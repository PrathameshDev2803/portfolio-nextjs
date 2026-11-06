export function Services() {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web applications combining robust backend APIs with responsive, reactive interfaces.",
    },
    {
      title: "PHP & Laravel Solutions",
      description:
        "Custom server-side logic, relational database schemas, secure authentication, and administrative dashboards.",
    },
    {
      title: "Modern React & Next.js",
      description:
        "High-performance client frontends, SSR/SSG rendering, fluid interactions, and mobile-first responsiveness.",
    },
    {
      title: "API Design & Integration",
      description:
        "Clean REST APIs, third-party webhook integrations, and efficient database architectures with MySQL and MongoDB.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 sm:px-8 lg:px-12 border-t border-border/60">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
            Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What I Can Help You Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed">
            Reliable engineering services tailored for startups, businesses, and digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-white rounded-2xl p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
