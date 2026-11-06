"use client";

import * as React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-foreground text-background hover:bg-secondary hover:text-background",
  secondary:
    "bg-surface text-foreground hover:bg-accent hover:text-foreground",
  ghost:
    "bg-transparent text-foreground hover:bg-surface hover:text-foreground",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        base,
        variants[variant],
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

interface AnchorButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function AnchorButton({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={[
        base,
        variants[variant],
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </a>
  );
}
