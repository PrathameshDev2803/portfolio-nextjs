import Image from "next/image";
import { SkillPill } from "@/components/ui/SkillPill";

export function About() {
  const primaryStack = ["PHP", "Laravel", "JavaScript", "React"];

  const principles = [
    {
      index: "01",
      title: "Build",
      description:
        "Develop end-to-end web applications that solve practical problems.",
      icon: (
        <span className="font-mono text-xs font-semibold text-foreground">
          &lt;/&gt;
        </span>
      ),
    },
    {
      index: "02",
      title: "Improve",
      description:
        "Make applications more accessible, reliable and user-friendly.",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </svg>
      ),
    },
    {
      index: "03",
      title: "Grow",
      description:
        "Continuously learn, experiment and improve.",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Editorial Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Developer Profile Composition */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative mx-auto lg:mx-0 max-w-[310px] sm:max-w-[330px] lg:max-w-[340px] w-full">
              {/* Secondary ghost frame for subtle editorial depth */}
              <div
                className="absolute -inset-1.5 rounded-2xl border border-border/60 bg-surface/40 rotate-[2deg] -z-10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Foreground card */}
              <div className="relative rounded-2xl border border-border/80 bg-white p-4 sm:p-5 shadow-sm -rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                {/* Frame Header */}
                <div className="flex items-center justify-between pb-3 text-[11px] font-mono text-secondary">
                  <span className="tracking-tight">&#123; about.me &#125;</span>
                </div>

                {/* Portrait illustration - unclipped with internal breathing buffer */}
                <div className="relative aspect-[448/452] w-full overflow-hidden rounded-xl bg-surface/30 p-2.5 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/about-portrait.png"
                    alt="Developer portrait illustration"
                    width={448}
                    height={452}
                    className="h-full w-full object-contain object-bottom"
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

            {/* Editorial Serif Headline - refined vertical height */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif font-semibold tracking-tight text-foreground leading-[1.22] max-w-xl">
              Building practical web solutions with clean code and a{" "}
              <span className="italic font-normal text-foreground">
                user-first mindset.
              </span>
            </h2>

            {/* Description - high-contrast #5F5F5F body text, comfortable reading measure */}
            <div className="mt-6 space-y-4 text-[1.0625rem] sm:text-[1.125rem] text-secondary leading-[1.72] max-w-xl">
              <p>
                I&apos;m a Full Stack Developer based in Mumbai, India. I build
                functional, responsive and accessible web applications, with a
                focus on PHP, Laravel, JavaScript and React.
              </p>
              <p>
                I enjoy turning ideas into usable products, solving practical
                problems and continuously improving my development and design
                skills.
              </p>
            </div>

            {/* Professional Metadata Row */}
            <div className="mt-8 pt-6 border-t border-border/60 w-full flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-secondary font-medium">
              <span className="inline-flex items-center gap-1.5 text-foreground/85">
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

              <span className="inline-flex items-center gap-1.5 text-foreground/85">
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

        {/* Unified Lower Information Area: Development Focus & Principles Triad */}
        <div className="mt-16 rounded-2xl border border-border/70 bg-white shadow-2xs overflow-hidden">
          {/* Top Focus & Primary Stack Band */}
          <div className="bg-surface/40 p-6 sm:p-7 border-b border-border/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Development Focus
              </span>
              <p className="mt-1 text-sm sm:text-base text-foreground font-medium max-w-lg">
                Focused on clean architecture, performance, and accessible web systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary shrink-0">
                Primary Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {primaryStack.map((tech) => (
                  <SkillPill key={tech}>{tech}</SkillPill>
                ))}
              </div>
            </div>
          </div>

          {/* Connected Principles Triad (01 Build, 02 Improve, 03 Grow) */}
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {principles.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-7 hover:bg-surface/20 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-secondary/70 tracking-wider">
                      {item.index}
                    </span>
                    <div className="h-7 w-7 rounded-lg bg-surface/80 border border-border/60 flex items-center justify-center text-foreground">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
