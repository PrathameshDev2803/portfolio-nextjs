"use client";

import * as React from "react";
import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
  icon: (active: boolean) => React.ReactNode;
}

const navItems: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h6" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: () => (
      <svg
        width="15"
        height="15"
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
    ),
  },
];

export function Navigation() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);
  const isScrollingToRef = useRef<boolean>(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Detect active section
    const scrollPosition = currentScrollY + 140;
    if (currentScrollY < 100) {
      setActiveId("hero");
    } else {
      const sections = navItems.map((item) => document.getElementById(item.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    }

    // Smart auto-hide on scroll-down to guarantee no content is obscured while reading
    if (!isScrollingToRef.current) {
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down -> gently slide away
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up -> reveal immediately
        setIsVisible(true);
      }
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsVisible(true);
    isScrollingToRef.current = true;

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveId("hero");
      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 700);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveId(id);
      setTimeout(() => {
        isScrollingToRef.current = false;
      }, 700);
    }
  };

  return (
    <header
      className={[
        "fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 pointer-events-none transition-all duration-300 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-24 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <nav
        className="pointer-events-auto max-w-full overflow-x-auto no-scrollbar bg-white/95 backdrop-blur-md border border-border/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full p-1.5 flex items-center gap-1 sm:gap-1.5 transition-all"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className={[
                "inline-flex items-center gap-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 select-none whitespace-nowrap",
                isActive
                  ? "bg-foreground text-background px-3.5 sm:px-4 py-1.5 shadow-xs"
                  : "text-secondary hover:text-foreground hover:bg-surface/70 px-2.5 sm:px-3.5 py-1.5",
              ].join(" ")}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="shrink-0">{item.icon(isActive)}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
