import { AnchorButton } from "./ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative py-24 px-6 sm:py-32 sm:px-8 lg:py-40 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:pr-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[0.85rem] font-medium text-secondary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse inline-block h-full w-full rounded-full bg-foreground opacity-75" />
              </span>
              <span>Available for new projects</span>
            </div>

            <h1
              className={[
                "mt-6 text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-foreground leading-[1.05]",
              ].join(" ")}
            >
              Prathamesh Jadhav
            </h1>

            <p className="mt-6 text-xl text-secondary leading-relaxed max-w-xl">
              Full Stack Developer based in Mumbai, India. I build with{" "}
              <span className="text-foreground font-medium">
                PHP, Laravel, JavaScript, React and Next.js
              </span>
              , creating reliable web applications and digital products.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <AnchorButton
                variant="primary"
                size="lg"
                href="#projects"
              >
                View Work
              </AnchorButton>
              <AnchorButton
                variant="secondary"
                size="lg"
                href="#contact"
              >
                Get in Touch
              </AnchorButton>
            </div>

            <div className="mt-12 flex items-center gap-4 text-[0.85rem] text-secondary">
              <span className="h-[1px] w-8 bg-border" aria-hidden="true" />
              <span>Mumbai, India</span>
              <span className="h-[1px] flex-1 bg-border" aria-hidden="true" />
            </div>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://github.com/PrathameshDev2803"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8m0 0L9.6 7.9m-11 4H7m21-5h-2M7 3v18" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/prathameshjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-surface rounded-2xl blur opacity-50" />
            <div className="relative rounded-2xl border border-border bg-surface p-8">
              <div className="grid grid-cols-2 gap-4 text-sm font-mono text-secondary">
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">Primary</span>
                  <span>PHP · Laravel</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">Frontend</span>
                  <span>React · Next.js</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">JavaScript</span>
                  <span>TypeScript · Node.js</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-foreground font-medium">Data</span>
                  <span>MySQL · MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
