import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={[
        "relative py-20 px-6 sm:py-24 sm:px-8 lg:py-32 lg:px-12",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={["mx-auto max-w-4xl text-center lg:text-left", className].filter(Boolean).join(" ")}>
      <h2
        className={[
          "font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground",
        ].join(" ")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            "mt-4 text-lg text-secondary leading-relaxed",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
