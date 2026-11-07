import Image from "next/image";
import { SkillPill } from "@/components/ui/SkillPill";

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      description: "Building responsive and accessible interfaces.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <line x1="2" x2="22" y1="9" y2="9" />
          <circle cx="6" cy="6.5" r=".75" fill="currentColor" />
          <circle cx="9" cy="6.5" r=".75" fill="currentColor" />
          <circle cx="12" cy="6.5" r=".75" fill="currentColor" />
        </svg>
      ),
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Backend",
      description: "Developing robust and scalable server-side applications.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="8" x="2" y="3" rx="2" />
          <rect width="20" height="8" x="2" y="13" rx="2" />
          <line x1="6" x2="6.01" y1="7" y2="7" strokeWidth="2.5" />
          <line x1="6" x2="6.01" y1="17" y2="17" strokeWidth="2.5" />
          <line x1="10" x2="14" y1="7" y2="7" />
          <line x1="10" x2="14" y1="17" y2="17" />
        </svg>
      ),
      skills: ["PHP", "Laravel", "Node.js", "REST APIs"],
    },
    {
      title: "Database",
      description: "Working with relational databases.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      ),
      skills: ["MySQL", "SQL"],
    },
    {
      title: "Tools & Others",
      description: "Development workflows, deployment and supporting tools.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: ["Git", "GitHub", "XAMPP"],
    },
  ];

  const principles = [
    {
      title: "Full-Stack Development",
      description: "End-to-end web application development.",
      icon: (
        <span className="font-mono text-sm font-bold text-foreground select-none inline-block">
          &lt;/&gt;
        </span>
      ),
    },
    {
      title: "Accessibility",
      description: "Building inclusive and usable experiences.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Performance",
      description: "Focused on reliability and speed.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5" />
        </svg>
      ),
    },
    {
      title: "Maintainability",
      description: "Writing clean and scalable code.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
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
      id="skills"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header: Two-Column Layout */}
        <div className="grid sm:grid-cols-12 gap-8 items-center">
          <div className="sm:col-span-8 lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                EXPERTISE
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-semibold tracking-tight text-foreground leading-[1.2]">
              Technologies I work with
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-xl">
              A practical toolkit I use to build, ship and maintain web applications.
            </p>
          </div>

          {/* Right Column: Monochromatic Workspace Illustration */}
          <div className="sm:col-span-4 lg:col-span-5 hidden sm:flex justify-end items-center">
            <div className="relative w-full max-w-[280px] lg:max-w-[320px] aspect-[1774/887]">
              <Image
                src="/images/skills-workspace.png"
                alt="Developer workspace line art illustration"
                width={1774}
                height={887}
                className="w-full h-auto object-contain select-none"
                priority
              />
            </div>
          </div>
        </div>

        {/* 2 × 2 Categories Grid: Reference Horizontal Split */}
        <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border/80 bg-surface/40 hover:bg-surface/60 p-6 sm:p-7 shadow-2xs hover:border-foreground/20 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-6"
            >
              {/* Category Info Header (Left on desktop) */}
              <div className="sm:w-[42%] shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-foreground shrink-0" aria-hidden="true">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-secondary leading-[1.6]">
                  {category.description}
                </p>
              </div>

              {/* Technology Pills (Right on desktop) */}
              <div className="sm:w-[58%] pt-4 sm:pt-0 border-t sm:border-t-0 border-border/50 flex flex-wrap gap-2 sm:gap-2.5">
                {category.skills.map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Principles Row */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/60 gap-y-6 sm:gap-y-0">
            {principles.map((item, idx) => (
              <div
                key={item.title}
                className={[
                  "flex items-start gap-3",
                  idx === 0
                    ? "sm:pr-6"
                    : idx === principles.length - 1
                    ? "sm:pl-6 pt-6 sm:pt-0"
                    : "sm:px-6 pt-6 sm:pt-0",
                ].join(" ")}
              >
                <div className="mt-0.5 text-foreground shrink-0" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-secondary leading-[1.6]">
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
