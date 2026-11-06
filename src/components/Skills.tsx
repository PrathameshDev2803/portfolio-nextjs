export function Skills() {
  const groups = [
    {
      title: "Primary",
      items: ["PHP", "Laravel", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Additional",
      items: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "Docker",
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center lg:text-left mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Technical skills
          </h2>
          <p className="mt-4 text-lg text-secondary leading-relaxed">
            Technologies I work with regularly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3
                className="text-sm font-serif font-semibold text-uppercase tracking-widest text-secondary"
              >
                {group.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-surface rounded-full px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item}
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
