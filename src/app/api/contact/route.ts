import { ALLOWED_SUBJECTS, validateEmail } from "@/lib/validation";

// In-memory rate limiting map (IP -> { count, expiresAt })
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

// In-memory duplicate protection map (hashKey -> expiresAt)
const recentSubmissionsMap = new Map<string, number>();

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    const now = Date.now();
    const rateLimit = rateLimitMap.get(ip);

    if (rateLimit && now < rateLimit.expiresAt) {
      if (rateLimit.count >= 5) {
        return Response.json(
          {
            error:
              "Too many requests from your IP. Please wait a few minutes before trying again.",
          },
          { status: 429 }
        );
      }
      rateLimit.count += 1;
    } else {
      rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 }); // 10-minute window
    }

    // Clean up expired entries periodically
    if (rateLimitMap.size > 1000) {
      for (const [key, value] of rateLimitMap.entries()) {
        if (now >= value.expiresAt) {
          rateLimitMap.delete(key);
        }
      }
    }

    // 2. Parse Request Body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return Response.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website } = body;

    // 3. Honeypot Spam Protection
    // If the hidden 'website' field is populated, silently accept to deceive bots
    if (website && String(website).trim() !== "") {
      return Response.json({
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      });
    }

    // 4. Server-Side Validation
    const rawName = typeof name === "string" ? name : "";
    const rawEmail = typeof email === "string" ? email : "";
    const rawSubject = typeof subject === "string" ? subject : "";
    const rawMessage = typeof message === "string" ? message : "";

    const cleanName = rawName.trim();
    const cleanEmail = rawEmail.trim();
    const cleanSubject = rawSubject.trim();
    const cleanMessage = rawMessage.trim();

    // Prevent header injection attacks
    if (/[\r\n]/.test(cleanName) || /[\r\n]/.test(cleanEmail)) {
      return Response.json(
        { error: "Invalid characters in name or email address." },
        { status: 400 }
      );
    }

    // Name: Required, non-empty, trimmed (2-100 chars)
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return Response.json(
        { error: "Please provide a valid name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    // Email: Required, valid RFC format
    if (!cleanEmail || !validateEmail(cleanEmail)) {
      return Response.json(
        { error: "Please provide a valid email address (e.g. name@example.com)." },
        { status: 400 }
      );
    }

    // Subject: Required, must be in ALLOWED_SUBJECTS
    if (!ALLOWED_SUBJECTS.includes(cleanSubject as (typeof ALLOWED_SUBJECTS)[number])) {
      return Response.json(
        { error: "Please select a valid subject from the predefined options." },
        { status: 400 }
      );
    }

    // Message: Optional, max 2,000 characters
    if (cleanMessage.length > 2000) {
      return Response.json(
        {
          error:
            "Message cannot exceed 2,000 characters.",
        },
        { status: 400 }
      );
    }

    // 5. Duplicate Submission Protection
    const submissionKey = `${ip}:${cleanEmail.toLowerCase()}:${cleanSubject}:${cleanMessage}`;
    const recentExpiry = recentSubmissionsMap.get(submissionKey);
    if (recentExpiry && now < recentExpiry) {
      return Response.json(
        {
          error:
            "Duplicate submission detected. Please wait a moment before sending again.",
        },
        { status: 429 }
      );
    }
    recentSubmissionsMap.set(submissionKey, now + 60 * 1000); // 60 seconds cooldown

    // Clean up expired duplicate entries
    if (recentSubmissionsMap.size > 500) {
      for (const [key, expiresAt] of recentSubmissionsMap.entries()) {
        if (now >= expiresAt) {
          recentSubmissionsMap.delete(key);
        }
      }
    }

    // 6. Email Configuration & Credentials
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "prathameshjadhav2803@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    // Build Server Timestamp
    const serverTimestamp = new Date().toUTCString();

    // Email Subject format: [Portfolio Contact] {Selected Subject} — {Sender Name}
    const emailSubject = `[Portfolio Contact] ${cleanSubject} — ${cleanName}`;

    // Plain text content
    const messageContent = cleanMessage || "No additional message provided.";
    const emailText = `New Portfolio Contact Submission
Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}
Message: ${messageContent}
Submitted At: ${serverTimestamp}
`;

    // Safe HTML email content
    const safeHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #171717; max-width: 600px; margin: 0 auto; padding: 28px; border: 1px solid #E5E5E3; border-radius: 14px; background-color: #FFFFFF;">
        <h2 style="margin-top: 0; color: #171717; font-size: 20px; font-weight: 600; border-bottom: 1px solid #E5E5E3; padding-bottom: 14px;">
          New Portfolio Contact Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 22px; font-size: 14px;">
          <tr>
            <td style="padding: 7px 0; color: #737373; width: 100px;"><strong>Name:</strong></td>
            <td style="padding: 7px 0; color: #171717; font-weight: 500;">${escapeHtml(cleanName)}</td>
          </tr>
          <tr>
            <td style="padding: 7px 0; color: #737373;"><strong>Email:</strong></td>
            <td style="padding: 7px 0; color: #171717;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #171717; text-decoration: underline;">${escapeHtml(cleanEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding: 7px 0; color: #737373;"><strong>Subject:</strong></td>
            <td style="padding: 7px 0; color: #171717;">${escapeHtml(cleanSubject)}</td>
          </tr>
          <tr>
            <td style="padding: 7px 0; color: #737373;"><strong>Submitted At:</strong></td>
            <td style="padding: 7px 0; color: #737373;">${escapeHtml(serverTimestamp)}</td>
          </tr>
        </table>
        <div style="margin-top: 8px; margin-bottom: 20px;">
          <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #171717;">Message:</p>
          <div style="background-color: #FAFAF8; padding: 16px; border-radius: 10px; border: 1px solid #E5E5E3;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: ${cleanMessage ? "#171717" : "#737373"}; ${cleanMessage ? "" : "font-style: italic;"}">
              ${escapeHtml(messageContent)}
            </p>
          </div>
        </div>
        <p style="margin-top: 20px; margin-bottom: 0; font-size: 12px; color: #737373; border-top: 1px solid #E5E5E3; padding-top: 14px;">
          You can reply directly to this email to reach ${escapeHtml(cleanName)}.
        </p>
      </div>
    `;

    // 7. Check for Missing API Key
    if (!apiKey) {
      console.warn(
        "[Contact API] RESEND_API_KEY environment variable is not configured. Email delivery skipped."
      );
      return Response.json(
        {
          error:
            "Email service is not yet configured with an API key. Please contact me directly at prathameshjadhav2803@gmail.com.",
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    // 8. Send Email via Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: cleanEmail,
        subject: emailSubject,
        text: emailText,
        html: safeHtml,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("[Contact API] Resend API error:", errorData);
      return Response.json(
        {
          error:
            "Something went wrong while sending your message. Please try again or contact me directly by email.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Thank you for reaching out. I'll get back to you soon.",
    });
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return Response.json(
      {
        error:
          "Something went wrong while sending your message. Please try again or contact me directly by email.",
      },
      { status: 500 }
    );
  }
}
