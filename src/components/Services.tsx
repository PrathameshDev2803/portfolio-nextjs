"use client";

import React from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureItem {
  title: string;
  description: string;
  badgeBg: string;
  icon: React.ReactNode;
}

export function Services() {
  const services: ServiceItem[] = [
    {
      id: "full-stack",
      title: "Full-Stack Development",
      description:
        "End-to-end web applications with modern, scalable solutions.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        </svg>
      ),
    },
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Responsive and accessible interfaces with a focus on usability.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      id: "backend",
      title: "Backend Development",
      description:
        "Robust server-side solutions, APIs and business logic.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="8" x="2" y="3" rx="2" />
          <rect width="20" height="8" x="2" y="13" rx="2" />
          <line x1="6" x2="6.01" y1="7" y2="7" />
          <line x1="10" x2="10.01" y1="7" y2="7" />
          <line x1="6" x2="6.01" y1="17" y2="17" />
          <line x1="10" x2="10.01" y1="17" y2="17" />
        </svg>
      ),
    },
    {
      id: "website",
      title: "Website Development",
      description:
        "Professional, SEO-friendly websites for businesses and brands.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
  ];

  const features: FeatureItem[] = [
    {
      title: "Reliable",
      description: "Stable and well-tested solutions.",
      badgeBg: "bg-accent/70 text-foreground",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5" />
        </svg>
      ),
    },
    {
      title: "Performance",
      description: "Fast and optimized experiences.",
      badgeBg: "bg-surface text-foreground",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "Accessible",
      description: "Built with usability in mind.",
      badgeBg: "bg-surface text-foreground",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Maintainable",
      description: "Clean, scalable and future-ready code.",
      badgeBg: "bg-accent/70 text-foreground",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      ),
    },
  ];

  const handleServiceSelect = (title: string) => {
    // Pre-populate inquiry context for email link in Contact section
    const emailLink = document.querySelector<HTMLAnchorElement>(
      'a[href^="mailto:prathameshjadhav2803@gmail.com"]'
    );
    if (emailLink) {
      emailLink.href = `mailto:prathameshjadhav2803@gmail.com?subject=${encodeURIComponent(
        `Project Inquiry — ${title}`
      )}`;
    }
  };

  return (
    <section
      id="services"
      className="scroll-mt-28 relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 border-t border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Editorial Two-Column Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Introduction & Dedicated Line Art Illustration */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-secondary uppercase">
                SERVICES
              </span>
              <span className="h-[1px] w-12 bg-border" aria-hidden="true" />
            </div>

            {/* Editorial Serif Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-semibold tracking-tight text-foreground leading-[1.12]">
              Development
              <br />
              Services
            </h2>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-secondary leading-[1.65] max-w-md">
              I help individuals and businesses build reliable, accessible and
              high-performing web solutions.
            </p>

            {/* Dedicated Monochromatic Development Illustration */}
            <div className="mt-8 sm:mt-10 w-full max-w-[310px] sm:max-w-[340px]">
              <div
                className="relative aspect-[320/220] w-full"
                role="img"
                aria-label="Development services illustration showing code interface, analytics dashboard, and mechanical engineering gear"
              >
                <svg
                  viewBox="0 0 320 220"
                  fill="none"
                  className="w-full h-full select-none overflow-visible"
                  aria-hidden="true"
                >
                  {/* Subtle organic background shape in muted lavender */}
                  <path
                    d="M 38 120 C 22 68, 52 28, 110 30 C 168 32, 186 64, 210 94 C 234 124, 224 172, 168 192 C 112 212, 54 172, 38 120 Z"
                    fill="#E9E7F2"
                  />

                  {/* Layered Browser Window (3D isometric perspective) */}
                  {/* Top 3D Extrusion */}
                  <polygon
                    points="58,54 72,42 218,42 204,54"
                    fill="#FFFFFF"
                    stroke="#171717"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                  {/* Right 3D Extrusion */}
                  <polygon
                    points="204,54 218,42 218,148 204,160"
                    fill="#EEEEEC"
                    stroke="#171717"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                  {/* Front Face Window Casing */}
                  <rect
                    x="58"
                    y="54"
                    width="146"
                    height="106"
                    rx="8"
                    fill="#FFFFFF"
                    stroke="#171717"
                    strokeWidth="1.75"
                  />

                  {/* Window Controls (3 dots) */}
                  <circle cx="70" cy="64" r="2.5" fill="#171717" />
                  <circle cx="78" cy="64" r="2.5" fill="#171717" />
                  <circle cx="86" cy="64" r="2.5" fill="#171717" />

                  {/* Dark Terminal Screen */}
                  <rect
                    x="66"
                    y="74"
                    width="130"
                    height="78"
                    rx="5"
                    fill="#171717"
                  />

                  {/* Code Symbol </> inside screen */}
                  <path
                    d="M 120 96 L 111 106 L 120 116"
                    stroke="#FFFFFF"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 142 96 L 151 106 L 142 116"
                    stroke="#FFFFFF"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="135"
                    y1="94"
                    x2="127"
                    y2="118"
                    stroke="#FFFFFF"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                  />

                  {/* Code Line Bars */}
                  <line
                    x1="80"
                    y1="130"
                    x2="136"
                    y2="130"
                    stroke="#737373"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="80"
                    y1="138"
                    x2="112"
                    y2="138"
                    stroke="#737373"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Floating Code Badge { } */}
                  <rect
                    x="222"
                    y="38"
                    width="44"
                    height="40"
                    rx="8"
                    fill="#FFFFFF"
                    stroke="#171717"
                    strokeWidth="1.75"
                  />
                  <text
                    x="244"
                    y="63"
                    fontFamily="monospace"
                    fontSize="16"
                    fontWeight="bold"
                    fill="#171717"
                    textAnchor="middle"
                  >
                    {"{ }"}
                  </text>

                  {/* Smaller Analytics Dashboard Panel (Overlapping bottom right) */}
                  <rect
                    x="170"
                    y="108"
                    width="92"
                    height="72"
                    rx="8"
                    fill="#FFFFFF"
                    stroke="#171717"
                    strokeWidth="1.75"
                  />
                  {/* Panel Header Metrics */}
                  <circle cx="182" cy="120" r="2.5" fill="#737373" />
                  <line
                    x1="190"
                    y1="120"
                    x2="208"
                    y2="120"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="182"
                    y1="128"
                    x2="198"
                    y2="128"
                    stroke="#E5E5E3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* 4 Rising Bar Chart Bars */}
                  <rect
                    x="210"
                    y="150"
                    width="6"
                    height="16"
                    rx="1.5"
                    fill="#171717"
                  />
                  <rect
                    x="220"
                    y="140"
                    width="6"
                    height="26"
                    rx="1.5"
                    fill="#171717"
                  />
                  <rect
                    x="230"
                    y="130"
                    width="6"
                    height="36"
                    rx="1.5"
                    fill="#171717"
                  />
                  <rect
                    x="240"
                    y="120"
                    width="6"
                    height="46"
                    rx="1.5"
                    fill="#171717"
                  />
                  <line
                    x1="206"
                    y1="168"
                    x2="250"
                    y2="168"
                    stroke="#E5E5E3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* Mechanical Engineering Gear (Front Center-Left) */}
                  {/* 3D Gear Extrusion Shadow */}
                  <path
                    d="M 177.6 171.6 L 177.6 180.4 L 170.6 179.9 L 168.2 185.7 L 173.5 190.3 L 167.3 196.5 L 162.7 191.2 L 156.9 193.6 L 157.4 200.6 L 148.6 200.6 L 149.1 193.6 L 143.3 191.2 L 138.7 196.5 L 132.5 190.3 L 137.8 185.7 L 135.4 179.9 L 128.4 180.4 L 128.4 171.6 L 135.4 172.1 L 137.8 166.3 L 132.5 161.7 L 138.7 155.5 L 143.3 160.8 L 149.1 158.4 L 148.6 151.4 L 157.4 151.4 L 156.9 158.4 L 162.7 160.8 L 167.3 155.5 L 173.5 161.7 L 168.2 166.3 L 170.6 172.1 Z"
                    fill="#171717"
                  />
                  {/* Front Gear Face */}
                  <path
                    d="M 174.6 167.6 L 174.6 176.4 L 167.6 175.9 L 165.2 181.7 L 170.5 186.3 L 164.3 192.5 L 159.7 187.2 L 153.9 189.6 L 154.4 196.6 L 145.6 196.6 L 146.1 189.6 L 140.3 187.2 L 135.7 192.5 L 129.5 186.3 L 134.8 181.7 L 132.4 175.9 L 125.4 176.4 L 125.4 167.6 L 132.4 168.1 L 134.8 162.3 L 129.5 157.7 L 135.7 151.5 L 140.3 156.8 L 146.1 154.4 L 145.6 147.4 L 154.4 147.4 L 153.9 154.4 L 159.7 156.8 L 164.3 151.5 L 170.5 157.7 L 165.2 162.3 L 167.6 168.1 Z"
                    fill="#FFFFFF"
                    stroke="#171717"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                  />
                  {/* Gear Center Hub */}
                  <circle cx="150" cy="172" r="7" fill="#171717" />
                  <circle cx="150" cy="172" r="4" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Horizontal Service Entries with Curved Timeline Connector */}
          <div className="lg:col-span-7 relative">
            {/* Desktop Curved Timeline Connector (Decorative SVG) */}
            <div
              className="hidden lg:block absolute -left-12 xl:-left-16 top-9 bottom-9 w-12 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 60 300"
                className="h-full w-full overflow-visible"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* Outward bowing subtle connecting arc */}
                <path
                  d="M 52 0 C 14 90, 14 210, 52 300"
                  stroke="#D4D4D0"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Marker 1: Top node with outer ring and filled center */}
                <circle
                  cx="52"
                  cy="0"
                  r="7.5"
                  stroke="#171717"
                  strokeWidth="1.5"
                  fill="#FAFAF8"
                  vectorEffect="non-scaling-stroke"
                />
                <circle
                  cx="52"
                  cy="0"
                  r="3.5"
                  fill="#171717"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Marker 2: Hollow circle node */}
                <circle
                  cx="24.5"
                  cy="100"
                  r="4.5"
                  stroke="#171717"
                  strokeWidth="1.75"
                  fill="#FAFAF8"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Marker 3: Hollow circle node */}
                <circle
                  cx="24.5"
                  cy="200"
                  r="4.5"
                  stroke="#171717"
                  strokeWidth="1.75"
                  fill="#FAFAF8"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Marker 4: Hollow circle node */}
                <circle
                  cx="52"
                  cy="300"
                  r="4.5"
                  stroke="#171717"
                  strokeWidth="1.75"
                  fill="#FAFAF8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* Service Entries List */}
            <div className="space-y-4 sm:space-y-4.5">
              {services.map((service) => (
                <a
                  key={service.id}
                  href="#contact"
                  onClick={() => handleServiceSelect(service.title)}
                  className="group relative flex items-center justify-between rounded-2xl sm:rounded-full border border-border/85 bg-white/95 px-4.5 sm:px-6 py-3.5 sm:py-4 shadow-2xs hover:border-foreground/25 hover:bg-white hover:shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                  aria-label={`Inquire about ${service.title} — ${service.description}`}
                >
                  {/* Left: Icon & Text Info */}
                  <div className="flex items-center gap-3.5 sm:gap-4.5 min-w-0 pr-2">
                    {/* Neutral Icon Container */}
                    <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-border/70 bg-surface/40 flex items-center justify-center shrink-0 text-foreground group-hover:bg-surface/80 group-hover:border-foreground/20 transition-colors duration-200">
                      {service.icon}
                    </div>

                    {/* Text Container */}
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-0.5 text-xs sm:text-sm text-secondary leading-snug line-clamp-2 sm:line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Directional Circular Arrow Indicator */}
                  <div
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-border/80 bg-white flex items-center justify-center shrink-0 ml-3 text-foreground/80 group-hover:text-foreground group-hover:border-foreground/30 group-hover:bg-surface/40 transition-all duration-200"
                    aria-hidden="true"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 motion-reduce:transform-none"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip — Connected Flowing Treatment */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* Desktop Layout: Continuous Interconnected Organic Shape (>= 1024px) */}
          <div className="hidden lg:block relative">
            {/* Continuous SVG Outlined Surface with Smooth Curved Transitions */}
            <svg
              viewBox="0 0 1200 92"
              fill="none"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-2xs"
              aria-hidden="true"
            >
              <path
                d="M 46 1
                   L 270 1
                   C 285 1, 290 28, 300 28
                   C 310 28, 315 1, 330 1
                   L 570 1
                   C 585 1, 590 28, 600 28
                   C 610 28, 615 1, 630 1
                   L 870 1
                   C 885 1, 890 28, 900 28
                   C 910 28, 915 1, 930 1
                   L 1154 1
                   A 45 45 0 0 1 1154 91
                   L 930 91
                   C 915 91, 910 64, 900 64
                   C 890 64, 885 91, 870 91
                   L 630 91
                   C 615 91, 610 64, 600 64
                   C 590 64, 585 91, 570 91
                   L 330 91
                   C 315 91, 310 64, 300 64
                   C 290 64, 285 91, 270 91
                   L 46 91
                   A 45 45 0 0 1 46 1
                   Z"
                fill="#FFFFFF"
                stroke="#E5E5E3"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* 4 Feature Segments Content */}
            <div className="relative grid grid-cols-4 items-center py-4 px-6 z-10 min-h-[92px]">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3.5 px-3"
                >
                  <div
                    className={`h-11 w-11 rounded-full flex items-center justify-center shrink-0 ${feature.badgeBg}`}
                  >
                    {feature.icon}
                  </div>
                  <div className="min-w-0 pr-2">
                    <h4 className="text-sm font-bold text-foreground tracking-tight truncate">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-secondary leading-snug mt-0.5 line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout: Connected Vertical Sequence (< 1024px) */}
          <div className="block lg:hidden relative rounded-2xl border border-border/80 bg-white/95 p-5 sm:p-6 shadow-2xs">
            <div className="space-y-6 relative">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="relative flex items-start gap-4"
                >
                  {/* Vertical connector line linking consecutive icons */}
                  {idx < features.length - 1 && (
                    <div
                      className="absolute left-5 top-11 bottom-0 w-[1.5px] bg-border -translate-x-1/2 -mb-6 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                  <div
                    className={`relative z-10 h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center shrink-0 ${feature.badgeBg} ring-4 ring-white`}
                  >
                    {feature.icon}
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h4 className="text-sm sm:text-base font-bold text-foreground tracking-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed mt-0.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
