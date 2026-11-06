import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 px-6 sm:pt-36 sm:pb-24 sm:px-8 lg:pt-40 lg:pb-28 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-foreground/80 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground inline-block" />
              <span>Open to full-time opportunities</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I&apos;m Prathamesh Jadhav
            </h1>

            {/* Role Title with Typewriter Cursor */}
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
              Full Stack Developer
              <span className="typewriter-cursor text-foreground" aria-hidden="true">
                |
              </span>
            </h2>

            {/* Descriptions */}
            <p className="mt-5 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              I build functional, responsive and user-focused web applications,
              working across frontend and backend development.
            </p>
            <p className="mt-3 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              My primary focus is PHP, Laravel, JavaScript and React, with an
              interest in building clean, accessible and maintainable digital
              experiences.
            </p>

            {/* Location & Availability Row */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-secondary font-medium">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground/70"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Based in Mumbai, India
              </span>
              <span className="inline-flex items-center gap-1.5">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground/70"
                  aria-hidden="true"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                Open to full-time opportunities
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-foreground/90 transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <span>&rarr;</span>
              </a>

              <a
                href="/Prathamesh-Jadhav-CV.pdf"
                download="Prathamesh-Jadhav-CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white text-foreground px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-surface transition-colors shadow-2xs"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            {/* Divider Line */}
            <hr className="mt-10 w-full border-t border-border/80" />

            {/* Social Links Row */}
            <div className="mt-6 flex items-center gap-4 text-xs sm:text-sm text-foreground">
              <span className="text-secondary font-medium">Follow me:</span>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/PrathameshDev2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="GitHub profile"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/prathameshjadhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:prathameshjadhav2803@gmail.com"
                  className="p-1 text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Email Prathamesh Jadhav"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] rounded-3xl border border-border/80 bg-white p-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="relative aspect-[338/409] w-full overflow-hidden rounded-2xl bg-surface">
                <Image
                  src="/images/avatar.png"
                  alt="Prathamesh Jadhav — Full Stack Developer"
                  width={338}
                  height={409}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
