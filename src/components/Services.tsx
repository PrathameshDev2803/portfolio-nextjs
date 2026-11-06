export function Services() {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end web applications using PHP, Laravel, JavaScript, React and Next.js.",
    },
    {
      title: "PHP & Laravel",
      description:
        "Server-side development with Laravel, Eloquent and the PHP ecosystem.",
    },
    {
      title: "React & Next.js",
      description:
        "Modern frontend interfaces with React, Next.js, TypeScript and Tailwind CSS.",
    },
    {
      title: "Databases & APIs",
      description:
        "Data modeling and APIs with MySQL, MongoDB, Node.js and Express.js.",
    },
  ];

  return (
    <section id="services">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center lg:text-left mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Services
          </h2>
          <p className="mt-4 text-lg text-secondary leading-relaxed">
            What I can help you build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-surface rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
