const projects = [
  {
    name: "JobScout.ai",
    description: "Project details to be added.",
    tech: ["PHP", "Laravel", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    name: "NoteStack",
    description: "Project details to be added.",
    tech: ["React", "Next.js", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    name: "Expense Tracker",
    description: "Project details to be added.",
    tech: ["JavaScript", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    name: "Motionis.health",
    description: "Project details to be added.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center lg:text-left mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Featured projects
          </h2>
          <p className="mt-4 text-lg text-secondary leading-relaxed">
            Selected work to be added. Descriptions, screenshots and links are
            placeholders pending verified project information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative border border-border bg-surface rounded-xl p-6 hover:border-accent transition-colors"
            >
              <div
                className={[
                  "h-32 rounded-lg overflow-hidden mb-4",
                  "bg-border flex items-center justify-center",
                ].join(" ")}
              >
                <span className="text-xs font-mono text-secondary">
                  Preview
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground group-hover:text-secondary transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono text-secondary uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-secondary hover:text-foreground transition-colors"
                  aria-label={`GitHub: ${project.name}`}
                >
                  GitHub
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                    aria-hidden="true"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8m0 0L9.6 7.9m-11 4H7m21-5h-2M7 3v18" />
                  </svg>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-secondary hover:text-foreground transition-colors"
                    aria-label={`Live: ${project.name}`}
                  >
                    Live
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1"
                      aria-hidden="true"
                    >
                      <path d="M15 2H6c-2.8 0-5 2.2-5 5v12c0 2.8 2.2 5 5 5h9c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5z" />
                      <polyline points="17 2 15 4 17 2" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
