export function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Independent / Freelance",
      period: "2023 — Present",
      location: "Mumbai, India",
      description:
        "Architecting and shipping responsive web apps, REST APIs, and client platforms using PHP, Laravel, React, and Next.js.",
    },
    {
      role: "Web Development Specialist",
      company: "Client Projects",
      period: "2022 — 2023",
      location: "Mumbai, India",
      description:
        "Developed full-featured business management applications, database schemas, and tailored frontend experiences.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            Trajectory
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
            Professional background and development roles.
          </p>
        </div>

        <div className="max-w-3xl space-y-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.role}-${exp.company}`}
              className="relative pl-6 border-l-2 border-border"
            >
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-foreground" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-xs font-medium text-secondary">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-secondary mt-0.5">
                {exp.company} · {exp.location}
              </p>
              <p className="mt-3 text-sm text-secondary leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
