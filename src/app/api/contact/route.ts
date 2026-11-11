// In-memory rate limiting map (IP -> { count, expiresAt })
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

const ALLOWED_SUBJECTS = [
  "Job Opportunity",
  "Freelance Project",
  "Website Development",
  "Collaboration",
  "General Enquiry",
  "Other",
] as const;

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
      rateLimitMap.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 }); // 10 minutes window
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
    // If the hidden 'website' field is populated, silently accept to fool bots
    if (website && String(website).trim() !== "") {
      return Response.json({
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
      });
    }

    // 4. Server-side Validation
    const cleanName = typeof name === "string" ? name.trim() : "";
    const cleanEmail = typeof email === "string" ? email.trim() : "";
    const cleanSubject = typeof subject === "string" ? subject.trim() : "";
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    // Check for header injection attacks
    if (/[\r\n]/.test(cleanName) || /[\r\n]/.test(cleanEmail)) {
      return Response.json(
        { error: "Invalid characters in name or email address." },
        { status: 400 }
      );
    }

    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return Response.json(
        { error: "Please provide a valid name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail) || cleanEmail.length > 150) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!ALLOWED_SUBJECTS.includes(cleanSubject as (typeof ALLOWED_SUBJECTS)[number])) {
      return Response.json(
        { error: "Please select a valid subject from the list." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 10 || cleanMessage.length > 3000) {
      return Response.json(
        {
          error:
            "Please provide a message between 10 and 3,000 characters.",
        },
        { status: 400 }
      );
    }

    // 5. Check Email Provider Credentials
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "prathameshjadhav2803@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

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

    // 6. Send Email via Resend REST API
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
        subject: `[Portfolio Inquiry] ${cleanSubject} — from ${cleanName}`,
        text: `New contact submission from portfolio website:

Name: ${cleanName}
Email: ${cleanEmail}
Subject: ${cleanSubject}

Message:
${cleanMessage}
`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #171717; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E5E5E3; border-radius: 12px; background-color: #FFFFFF;">
            <h2 style="margin-top: 0; color: #171717; font-size: 20px; font-weight: 600; border-bottom: 1px solid #E5E5E3; padding-bottom: 12px;">
              New Portfolio Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #737373; width: 90px;"><strong>Name:</strong></td>
                <td style="padding: 6px 0; color: #171717; font-weight: 500;">${cleanName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #737373;"><strong>Email:</strong></td>
                <td style="padding: 6px 0; color: #171717;"><a href="mailto:${cleanEmail}" style="color: #171717; text-decoration: underline;">${cleanEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #737373;"><strong>Subject:</strong></td>
                <td style="padding: 6px 0; color: #171717;">${cleanSubject}</td>
              </tr>
            </table>
            <div style="background-color: #FAFAF8; padding: 16px; border-radius: 8px; border: 1px solid #E5E5E3; margin-bottom: 16px;">
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #171717;">${cleanMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
            </div>
            <p style="margin-top: 16px; margin-bottom: 0; font-size: 12px; color: #737373;">
              Reply directly to this email to respond to ${cleanName}.
            </p>
          </div>
        `,
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
      message:
        "Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon.",
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
