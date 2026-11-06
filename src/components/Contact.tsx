export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center lg:text-left mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-secondary leading-relaxed">
            Available for new projects and collaborations based in Mumbai,
            India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Email <a href="mailto:hello@example.com" className="text-foreground font-medium underline decoration-border hover:decoration-foreground transition-all">hello@example.com</a>
            </p>
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              Mumbai, India
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          <div className="border border-border bg-surface rounded-xl p-8 lg:p-12">
            <h3 className="font-serif text-2xl font-semibold text-foreground">Say hello</h3>
            <p className="mt-2 text-sm text-secondary">
              Reach out to discuss your project. Details to be added.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
