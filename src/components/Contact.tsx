export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
              Connect
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s build something exceptional together
            </h2>
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
              Whether you have a specific project in mind, an engineering role
              to fill, or want to discuss technical ideas, I&apos;m always open
              to conversation.
            </p>

            <div className="mt-8 space-y-4 text-sm sm:text-base text-secondary">
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Location:</span>
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Status:</span>
                <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground inline-block" />
                  Available for freelance & full-time roles
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-xs">
              <h3 className="text-base font-bold text-foreground mb-3">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-secondary mb-6 leading-relaxed">
                Reach out directly via email or connect with me on professional networks:
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:contact@prathameshjadhav.com"
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface/40 hover:bg-surface text-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="text-sm font-medium">Email Me</span>
                  </div>
                  <span className="text-xs font-mono text-secondary group-hover:text-foreground">
                    contact@prathameshjadhav.com &rarr;
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/prathameshjadhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface/40 hover:bg-surface text-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </div>
                  <span className="text-xs font-mono text-secondary group-hover:text-foreground">
                    linkedin.com/in/prathameshjadhav &rarr;
                  </span>
                </a>

                <a
                  href="https://github.com/PrathameshDev2803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-surface/40 hover:bg-surface text-foreground transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
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
                    <span className="text-sm font-medium">GitHub</span>
                  </div>
                  <span className="text-xs font-mono text-secondary group-hover:text-foreground">
                    @PrathameshDev2803 &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
