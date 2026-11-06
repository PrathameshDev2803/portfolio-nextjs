import Image from "next/image";

export function About() {
  const primaryStack = ["PHP", "Laravel", "JavaScript", "React"];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Editorial Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Developer Profile Composition */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative mx-auto lg:mx-0 max-w-[270px] sm:max-w-[290px] w-full">
              {/* Secondary ghost frame for subtle editorial depth */}
              <div
                className="absolute -inset-1.5 rounded-2xl border border-border/60 bg-surface/40 rotate-[2deg] -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Foreground card */}
              <div className="relative rounded-2xl border border-border/80 bg-white p-4 shadow-sm -rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3 text-[11px] font-mono text-secondary">
                  <span className="tracking-tight">&#123; about.me &#125;</span>
                </div>

                {/* Portrait illustration */}
                <div className="relative aspect-[340/380] w-full overflow-hidden rounded-xl bg-surface/30 flex items-center justify-center">
                  <Image
                    src="/images/about-portrait.png"
                    alt="Developer portrait illustration"
                    width={340}
                    height={380}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Floating code icon badge */}
                <div
                  className="absolute -top-3 -right-3 h-8 w-8 rounded-xl bg-white border border-border/80 shadow-xs flex items-center justify-center font-mono text-xs text-foreground select-none"
                  aria-hidden="true"
                >
                  &lt;/&gt;
                </div>
              </div>

              {/* Handwritten-style subtle annotation */}
              <div className="mt-4 flex items-center gap-2 self-start ml-3 sm:ml-4 text-secondary">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary/70 -scale-y-100 rotate-12 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6 8c4 8 12 14 20 14" />
                  <path d="M22 17l4 5-6 2" />
                </svg>
                <span className="text-xs font-serif italic text-secondary tracking-wide select-none">
                  Developer + Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                ABOUT ME
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Editorial Serif Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-semibold tracking-tight text-foreground leading-[1.2]">
              Building practical web solutions with clean code and a{" "}
              <span className="italic font-normal text-foreground">
                user-first mindset.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
              I&apos;m a Full Stack Developer based in Mumbai, India. I build
              functional, responsive and accessible web applications, with a
              focus on PHP, Laravel, JavaScript and React.
            </p>
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
              I enjoy turning ideas into usable products, solving practical
              problems and continuously improving my development and design
              skills.
            </p>

            {/* Professional Metadata Row */}
            <div className="mt-8 pt-6 border-t border-border/60 w-full flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-secondary font-medium">
              <span className="inline-flex items-center gap-1.5 text-foreground/80">
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
                Mumbai, India
              </span>

              <span className="hidden sm:inline text-border" aria-hidden="true">
                |
              </span>

              <span className="inline-flex items-center gap-1.5 text-foreground/80">
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
                Full Stack Developer
              </span>

              <span className="hidden sm:inline text-border" aria-hidden="true">
                |
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground inline-block" />
                Open to full-time opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Lower Information Area: Development Focus & Primary Stack */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Development Focus
            </span>
            <p className="mt-1 text-sm sm:text-base text-foreground font-medium">
              Focused on clean architecture, performance, and accessible web systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary shrink-0">
              Primary Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Development Principles: Build, Improve, Grow */}
        <div className="mt-12 pt-8 border-t border-border/40 grid sm:grid-cols-3 gap-8">
          {/* 1. Build */}
          <div className="flex items-start gap-3.5">
            <div
              className="mt-0.5 h-8 w-8 rounded-lg bg-surface/70 border border-border/60 flex items-center justify-center shrink-0 font-mono text-xs font-semibold text-foreground select-none"
              aria-hidden="true"
            >
              &lt;/&gt;
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Build</h3>
              <p className="mt-1 text-xs sm:text-sm text-secondary leading-relaxed">
                Develop end-to-end web applications that solve practical problems.
              </p>
            </div>
          </div>

          {/* 2. Improve */}
          <div className="flex items-start gap-3.5">
            <div
              className="mt-0.5 h-8 w-8 rounded-lg bg-surface/70 border border-border/60 flex items-center justify-center shrink-0 text-foreground"
              aria-hidden="true"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Improve</h3>
              <p className="mt-1 text-xs sm:text-sm text-secondary leading-relaxed">
                Make applications more accessible, reliable and user-friendly.
              </p>
            </div>
          </div>

          {/* 3. Grow */}
          <div className="flex items-start gap-3.5">
            <div
              className="mt-0.5 h-8 w-8 rounded-lg bg-surface/70 border border-border/60 flex items-center justify-center shrink-0 text-foreground"
              aria-hidden="true"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Grow</h3>
              <p className="mt-1 text-xs sm:text-sm text-secondary leading-relaxed">
                Continuously learn, experiment and improve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
