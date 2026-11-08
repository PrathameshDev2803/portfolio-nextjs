import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "JobScout.ai",
    category: "AI TOOL",
    description:
      "An AI-powered job search and resume tailoring tool with job fit analysis and ATS optimization.",
    technologies: ["Python", "Streamlit", "Gemini API"],
    image: "/images/project-jobscout.png",
    link: "https://github.com/PrathameshDev2803/jobscout-ai",
  },
  {
    title: "NoteStack",
    category: "PRODUCT",
    description:
      "A lightweight note-taking application with rich text editing, audio recording and local storage.",
    technologies: ["React", "Tiptap", "LocalStorage"],
    image: "/images/project-notestack.png",
    link: "https://github.com/PrathameshDev2803/notestack",
  },
  {
    title: "Expense Tracker",
    category: "WEB APPLICATION",
    description:
      "A personal expense management application to track, categorize and analyze expenses.",
    technologies: ["PHP", "MySQL", "Chart.js"],
    image: "/images/project-expensetracker.png",
    link: "https://github.com/PrathameshDev2803",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header: Two-Column Layout */}
        <div className="grid sm:grid-cols-12 gap-8 items-center">
          <div className="sm:col-span-8 lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                FEATURED PROJECTS
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-semibold tracking-tight text-foreground leading-[1.2]">
              Selected Work
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 text-base sm:text-lg text-secondary leading-[1.65] max-w-xl">
              A collection of projects that showcase my skills, problem-solving
              approach and focus on building usable products.
            </p>
          </div>

          {/* Dedicated Section Illustration */}
          <div className="sm:col-span-4 lg:col-span-5 flex justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              <Image
                src="/images/projects-illustration.png"
                alt="Layered browser windows with code and interface previews illustration"
                width={405}
                height={213}
                className="w-full h-auto object-contain select-none"
                priority
              />
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-border/80 bg-white p-5 sm:p-6 lg:p-7 shadow-2xs hover:border-foreground/30 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                {/* Project Preview */}
                <div className="w-full sm:w-[46%] shrink-0">
                  <div className="rounded-xl overflow-hidden border border-border/60 bg-[#FAFAF8] shadow-2xs group-hover:border-foreground/20 transition-all">
                    <Image
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      width={305}
                      height={190}
                      className="w-full h-auto object-cover select-none group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full sm:w-[54%] flex flex-col min-w-0">
                  {/* Category + External Link Arrow */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono sm:text-xs font-semibold tracking-wider text-secondary uppercase">
                      {project.category}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-secondary/70 hover:text-foreground transition-colors"
                        aria-label={`Open ${project.title} ${
                          project.link.includes("github.com")
                            ? "repository"
                            : "website"
                        }`}
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
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          aria-hidden="true"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="mt-1.5 text-xl sm:text-[22px] font-serif font-bold text-foreground tracking-tight leading-snug">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-[13px] text-secondary leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Technology Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-border/80 bg-[#F5F4F1] px-2.5 py-0.5 text-[11px] sm:text-xs font-medium text-foreground/85 shadow-2xs select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
          <a
            href="https://github.com/PrathameshDev2803?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-foreground/90 transition-colors shadow-xs"
          >
            <span>View All Projects</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>

          <a
            href="https://github.com/PrathameshDev2803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white text-foreground px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium hover:bg-surface transition-colors shadow-2xs"
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
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
