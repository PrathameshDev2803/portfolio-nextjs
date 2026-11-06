export function About() {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              About Me
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Crafting reliable, scalable web experiences
            </h2>
            <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
              I am a Full Stack Developer based in Mumbai, India. My work
              centers on building robust web solutions with PHP, Laravel,
              JavaScript, React and Next.js, backed by experience across
              TypeScript, Node.js, Express.js, MySQL, and Docker.
            </p>
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
              I focus on creating dependable software with clean architecture,
              responsive interfaces, and thoughtful user experiences.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-xs">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
                Overview
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-secondary">
                <li className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-medium text-foreground">Location</span>
                  <span>Mumbai, India</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-medium text-foreground">Role</span>
                  <span>Full Stack Developer</span>
                </li>
                <li className="flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-medium text-foreground">Availability</span>
                  <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground inline-block" />
                    Open to projects
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Core Stack</span>
                  <span className="text-right">Laravel · Next.js · React</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
