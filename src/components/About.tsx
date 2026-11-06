export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              About me
            </h2>
            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl">
              I am a Full Stack Developer based in Mumbai, India. My work
              centers on PHP, Laravel, JavaScript, React and Next.js, with
              experience across TypeScript, Node.js, Express.js, MySQL,
              MongoDB, Tailwind CSS, Bootstrap, Git and Docker.
            </p>
            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-xl">
              I focus on building reliable, maintainable web applications and
              digital products — from architecture through to deployment.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-surface rounded-2xl blur opacity-50" />
            <div className="relative rounded-2xl border border-border bg-surface p-12">
              <ul className="space-y-4 text-lg text-secondary">
                <li className="flex items-center gap-3">
                  <span className="shrink-0 text-foreground">Location</span>
                  <span>Mumbai, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 text-foreground">Focus</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="shrink-0 text-foreground">Primary stack</span>
                  <span>PHP · Laravel · React · Next.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
