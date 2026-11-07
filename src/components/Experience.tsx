import Image from "next/image";
import { SkillPill } from "@/components/ui/SkillPill";

export function Experience() {
  const experience = {
    role: "Full Stack Developer",
    progression: "Web Developer Intern → Full Stack Developer",
    company: "Traction Shastra",
    arrangement: "Remote",
    period: "Nov 2025 — Present",
    isCurrent: true,
    description:
      "Contributed to web development projects across frontend and backend functionality, working on responsive interfaces, application features, database schemas, and website performance improvements.",
    technologies: [
      "PHP",
      "Laravel",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "MySQL",
    ],
  };

  return (
    <section
      id="experience"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header: Two-Column Layout */}
        <div className="grid sm:grid-cols-12 gap-8 items-center">
          <div className="sm:col-span-8 lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                EXPERIENCE
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-semibold tracking-tight text-foreground leading-[1.2]">
              My Professional Journey
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-xl">
              A look at my professional experience and the work I&apos;ve contributed to.
            </p>
          </div>

          {/* Right Column: Monochromatic Desk Calendar & Coffee Illustration */}
          <div className="sm:col-span-4 lg:col-span-5 hidden sm:flex justify-end items-center">
            <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[660/260]">
              <Image
                src="/images/experience-illustration.png"
                alt="Calendar with code symbol, books and coffee line art illustration"
                width={660}
                height={260}
                className="w-full h-auto object-contain select-none"
                priority
              />
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="mt-14 sm:mt-16 relative">
          {/* Timeline Entry */}
          <div className="relative pl-9 sm:pl-11">
            {/* Continuous Vertical Timeline Spine: Crisp solid line */}
            <div
              className="absolute left-[13px] top-4 -bottom-6 w-[2px] bg-border"
              aria-hidden="true"
            />

            {/* Timeline Marker: Proportional two-layer circular marker matching reference */}
            <div
              className="absolute left-[14px] top-8 -translate-x-1/2 -translate-y-1/2 z-10 flex h-6 w-6 box-border items-center justify-center rounded-full border border-[#EAE9E6] bg-[#F5F4F1] shadow-2xs select-none"
              aria-hidden="true"
            >
              <span className="h-[11px] w-[11px] rounded-full bg-[#171717]" />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl border border-border/80 bg-white p-6 sm:p-7 lg:p-8 shadow-2xs hover:border-foreground/20 transition-all font-roboto">
              {/* Card Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                {/* Left: Building icon + Role + Company */}
                <div className="flex items-start gap-3.5">
                  <div
                    className="h-10 w-10 rounded-xl bg-surface/60 border border-border/60 flex items-center justify-center shrink-0 text-foreground shadow-2xs mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h.01" />
                      <path d="M16 6h.01" />
                      <path d="M12 6h.01" />
                      <path d="M12 10h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 10h.01" />
                      <path d="M8 14h.01" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-[19px] sm:text-[20px] font-bold tracking-normal text-foreground leading-snug">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm sm:text-[15px] font-medium text-secondary">
                      <span>{experience.company} · {experience.arrangement}</span>
                      <span className="ml-2 text-xs sm:text-[13px] font-normal text-secondary/75">
                        ({experience.progression})
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right: Current badge + Date (Side-by-side horizontally on Desktop) */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-3.5 shrink-0 self-start sm:self-auto">
                  {experience.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-[#F5F4F1] px-2.5 py-0.5 text-xs font-semibold text-foreground shadow-2xs select-none">
                      <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      Current
                    </span>
                  )}
                  {experience.isCurrent && (
                    <span
                      className="hidden sm:block h-11 w-px bg-[#E5E5E5] shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-secondary">
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
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>{experience.period}</span>
                  </div>
                </div>
              </div>

              {/* Description (Seamless vertical flow) */}
              <p className="mt-3.5 text-sm sm:text-base text-secondary leading-relaxed">
                {experience.description}
              </p>

              {/* Technology Pills */}
              <div className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
                {experience.technologies.map((tech) => (
                  <SkillPill key={tech}>{tech}</SkillPill>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
