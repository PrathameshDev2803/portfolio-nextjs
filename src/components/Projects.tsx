const projects = [
  {
    name: "JobScout.ai",
    description:
      "Intelligent job discovery and tracking application streamlining the recruitment lifecycle.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
    github: "https://github.com/PrathameshDev2803",
    live: "#",
  },
  {
    name: "NoteStack",
    description:
      "Minimalist markdown notes app with real-time saving and organized tagging system.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/PrathameshDev2803",
    live: "#",
  },
  {
    name: "Expense Tracker",
    description:
      "Personal finance tracking tool with detailed monthly analytics and budget alerts.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/PrathameshDev2803",
    live: "#",
  },
  {
    name: "Motionis.health",
    description:
      "Digital health platform interface focusing on accessibility and patient wellness journeys.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/PrathameshDev2803",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
            A selection of recent development projects demonstrating full-stack
            architecture, modern frontends, and dependable APIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col justify-between border border-border bg-white rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-foreground/40 transition-colors"
            >
              <div>
                <div className="h-40 rounded-xl overflow-hidden mb-6 bg-surface border border-border/60 flex items-center justify-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary">
                    {project.name} preview
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2.5 text-sm text-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-border/60 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-secondary transition-colors"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  <span>Code</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
