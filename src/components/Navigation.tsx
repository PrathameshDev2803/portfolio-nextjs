"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { AnchorButton } from "./ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-25% 0% -60% 0%", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={[
          "fixed inset-x-0 top-6 z-40",
          scrolled
            ? "shadow-sm border-b border-border"
            : "transition-shadow duration-300",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl flex h-14 items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="#"
            className="flex items-center gap-2 text-foreground font-serif text-xl font-semibold tracking-tight"
          >
            PJ.
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            {sections.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                onClick={() => scrollTo(item.id)}
                className={[
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  activeId === item.id
                    ? "bg-foreground text-background"
                    : "text-secondary hover:text-foreground hover:bg-surface",
                ].join(" ")}
                aria-current={activeId === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <AnchorButton
              variant="ghost"
              size="sm"
              href="#contact"
              className="hidden md:flex"
            >
              Contact
            </AnchorButton>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen((p) => !p)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="fixed inset-x-0 top-14 border-t border-border bg-background z-40"
          >
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-6">
              {sections.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={[
                    "block px-4 py-3 text-base font-medium border-b border-border/50 last:border-0",
                    activeId === item.id
                      ? "bg-surface text-foreground"
                      : "text-secondary hover:text-foreground hover:bg-surface",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <AnchorButton
                variant="primary"
                size="lg"
                href="#contact"
                className="mt-6 w-full"
              >
                Contact
              </AnchorButton>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
