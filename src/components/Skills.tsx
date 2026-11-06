export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"],
    },
    {
      category: "Backend & Architecture",
      skills: ["PHP", "Laravel", "Node.js", "Express.js", "RESTful APIs", "MVC Architecture"],
    },
    {
      category: "Databases & DevOps",
      skills: ["MySQL", "MongoDB", "Git / GitHub", "Docker", "Composer", "Linux CLI"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Technical Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
            Technologies and frameworks I build with regularly in production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-2xs"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
