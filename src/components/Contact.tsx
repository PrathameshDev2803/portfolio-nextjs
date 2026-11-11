"use client";

import React, { useState, useId } from "react";
import Image from "next/image";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const SUBJECT_OPTIONS = [
  "Job Opportunity",
  "Freelance Project",
  "Website Development",
  "Collaboration",
  "General Enquiry",
  "Other",
] as const;

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState<string>("");

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  const validateField = (name: keyof FormState, value: string): string | undefined => {
    switch (name) {
      case "name": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your name.";
        if (trimmed.length < 2) return "Name must be at least 2 characters.";
        if (trimmed.length > 100) return "Name must be under 100 characters.";
        return undefined;
      }
      case "email": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your email address.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed)) return "Please enter a valid email address.";
        return undefined;
      }
      case "subject": {
        if (!value) return "Please select a subject.";
        if (!SUBJECT_OPTIONS.includes(value as (typeof SUBJECT_OPTIONS)[number])) {
          return "Please select a valid subject.";
        }
        return undefined;
      }
      case "message": {
        const trimmed = value.trim();
        if (!trimmed) return "Please enter your message.";
        if (trimmed.length < 10) return "Message must be at least 10 characters.";
        if (trimmed.length > 3000) return "Message must be under 3,000 characters.";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormState, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const subjectErr = validateField("subject", formData.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField("message", formData.message);
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus the first invalid field
      const firstField = Object.keys(newErrors)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstField}"]`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you for reaching out! Your message has been sent successfully. I'll get back to you soon."
        );
        // Clear form only on confirmed success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error ||
            "Something went wrong while sending your message. Please try again or contact me directly by email."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(
        "Something went wrong while sending your message. Please try again or contact me directly by email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column — Personal Introduction & Contact Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                CONTACT
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Large Editorial Serif Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold tracking-tight text-foreground leading-[1.12]">
              Let&apos;s Build
              <br />
              Something Together
            </h2>

            {/* Supporting Intro Paragraph */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-secondary leading-relaxed max-w-md">
              Have a project in mind, a job opportunity or just want to connect?
              I&apos;d love to hear from you.
            </p>

            {/* Dedicated Contact Workspace Illustration */}
            <div className="mt-8 sm:mt-10 w-full max-w-[420px]">
              <div className="relative aspect-[670/300] w-full">
                <Image
                  src="/images/contact-illustration.png"
                  alt="Developer workspace line art illustration with laptop displaying code symbol, desk plant, books, and coffee mug"
                  width={670}
                  height={300}
                  priority
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Compact Contact Information Area */}
            <div className="mt-8 w-full max-w-[420px] rounded-2xl border border-border bg-surface/30 p-4 sm:p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/80">
                {/* Email Info */}
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-foreground shadow-2xs"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-foreground">
                      Email
                    </span>
                    <a
                      href="mailto:prathameshjadhav2803@gmail.com"
                      className="mt-0.5 block text-xs sm:text-sm text-secondary hover:text-foreground transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-xs"
                      title="Send email to prathameshjadhav2803@gmail.com"
                    >
                      prathameshjadhav2803@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-start gap-3 pt-4 sm:pt-0 sm:pl-6">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-foreground shadow-2xs"
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-foreground">
                      Location
                    </span>
                    <span className="mt-0.5 block text-xs sm:text-sm text-secondary">
                      Mumbai, Maharashtra, India
                    </span>
                    <span className="block text-[11px] text-secondary/80">
                      (Remote Friendly)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form Container */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border border-border bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
              {/* Form Heading & Supporting Text */}
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-foreground">
                Send a Message
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-secondary leading-relaxed">
                Fill in the details below and I&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Status Announcements */}
              {submitStatus === "success" && (
                <div
                  role="alert"
                  aria-live="polite"
                  className="mt-6 rounded-2xl border border-green-200 bg-green-50/70 p-4 sm:p-5 text-sm text-green-900"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-green-700 mt-0.5"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-medium">{statusMessage}</p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus("idle")}
                        className="mt-3 inline-flex items-center text-xs font-semibold text-green-800 underline hover:text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded-xs"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mt-6 rounded-2xl border border-red-200 bg-red-50/70 p-4 sm:p-5 text-sm text-red-900"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-red-700 mt-0.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <div className="flex-1">
                      <p className="font-medium">{statusMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="mt-6 sm:mt-8 space-y-5">
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Field 1 — Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor={nameId}
                      className="text-xs font-medium text-foreground mb-1.5"
                    >
                      Your Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id={nameId}
                      name="name"
                      required
                      placeholder="e.g. Prathamesh Jadhav"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? `${nameId}-error` : undefined}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-colors focus:outline-none focus:ring-1 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border hover:border-foreground/30 focus:border-foreground focus:ring-foreground"
                      } disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.name && (
                      <p
                        id={`${nameId}-error`}
                        className="mt-1 text-xs text-red-600"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2 — Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor={emailId}
                      className="text-xs font-medium text-foreground mb-1.5"
                    >
                      Your Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      id={emailId}
                      name="email"
                      required
                      placeholder="e.g. hello@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? `${emailId}-error` : undefined}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground placeholder:text-secondary/60 transition-colors focus:outline-none focus:ring-1 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border hover:border-foreground/30 focus:border-foreground focus:ring-foreground"
                      } disabled:opacity-60 disabled:cursor-not-allowed`}
                    />
                    {errors.email && (
                      <p
                        id={`${emailId}-error`}
                        className="mt-1 text-xs text-red-600"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Field 3 — Subject Select */}
                <div className="flex flex-col">
                  <label
                    htmlFor={subjectId}
                    className="text-xs font-medium text-foreground mb-1.5"
                  >
                    Subject <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id={subjectId}
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      aria-invalid={!!errors.subject}
                      aria-describedby={
                        errors.subject ? `${subjectId}-error` : undefined
                      }
                      className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm text-foreground transition-colors focus:outline-none focus:ring-1 ${
                        formData.subject === ""
                          ? "text-secondary/60"
                          : "text-foreground"
                      } ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-border hover:border-foreground/30 focus:border-foreground focus:ring-foreground"
                      } disabled:opacity-60 disabled:cursor-not-allowed`}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {SUBJECT_OPTIONS.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="text-foreground"
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-secondary"
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                  {errors.subject && (
                    <p
                      id={`${subjectId}-error`}
                      className="mt-1 text-xs text-red-600"
                      role="alert"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Field 4 — Message Textarea */}
                <div className="flex flex-col">
                  <label
                    htmlFor={messageId}
                    className="text-xs font-medium text-foreground mb-1.5"
                  >
                    Message <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, opportunity or query..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? `${messageId}-error` : undefined
                    }
                    className={`w-full rounded-xl border bg-white p-4 text-sm text-foreground placeholder:text-secondary/60 min-h-[140px] resize-y transition-colors focus:outline-none focus:ring-1 ${
                      errors.message
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-border hover:border-foreground/30 focus:border-foreground focus:ring-foreground"
                    } disabled:opacity-60 disabled:cursor-not-allowed`}
                  />
                  {errors.message && (
                    <p
                      id={`${messageId}-error`}
                      className="mt-1 text-xs text-red-600"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* CTA Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Primary CTA — Send Message */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all duration-200 shadow-xs disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-background"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </>
                    )}
                  </button>

                  {/* Secondary CTA — Schedule a Call (conditional on configured URL) */}
                  {calendlyUrl && (
                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white text-foreground px-5 sm:px-6 py-3 text-sm font-medium hover:bg-surface transition-colors shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-foreground/80"
                        aria-hidden="true"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>Schedule a Call</span>
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
