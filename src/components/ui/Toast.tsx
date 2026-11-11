"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

export type ToastType = "success" | "error" | "validation";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  description: string;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, "id">) => void;
  dismissToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const dismissToast = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    ({ type, title, description }: Omit<ToastItem, "id">) => {
      setToasts((prev) => {
        // Prevent stacking duplicate notifications with identical type & title
        const existing = prev.find((t) => t.type === type && t.title === title);
        if (existing) {
          const existingTimer = timersRef.current.get(existing.id);
          if (existingTimer) clearTimeout(existingTimer);
          const newTimer = setTimeout(() => {
            dismissToast(existing.id);
          }, 4500);
          timersRef.current.set(existing.id, newTimer);
          return prev;
        }

        const id = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
        const timer = setTimeout(() => {
          dismissToast(id);
        }, 4500);
        timersRef.current.set(id, timer);

        // Keep maximum 3 toasts visible at once
        const next = [...prev, { id, type, title, description }];
        if (next.length > 3) {
          const oldest = next[0];
          const oldTimer = timersRef.current.get(oldest.id);
          if (oldTimer) clearTimeout(oldTimer);
          timersRef.current.delete(oldest.id);
          return next.slice(next.length - 3);
        }
        return next;
      });
    },
    [dismissToast]
  );

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast }}>
      {children}
      {/* Toast Viewport Container: Fixed, non-obstructive, bottom-right on desktop, bottom-centered on mobile */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm sm:w-full mx-auto sm:mx-0"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role={toast.type === "error" ? "alert" : "status"}
            className="pointer-events-auto flex items-start gap-3.5 rounded-2xl border border-border bg-white p-4 shadow-lg shadow-neutral-900/5 transition-all duration-300 ease-out motion-reduce:transition-none"
          >
            {/* Monochrome State Icons */}
            <div
              className="shrink-0 pt-0.5 text-foreground"
              aria-hidden="true"
            >
              {toast.type === "success" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              )}
              {toast.type === "error" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              )}
              {toast.type === "validation" && (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              )}
            </div>

            {/* Title & Description */}
            <div className="flex-1 min-w-0 pr-1">
              <p className="text-xs sm:text-sm font-semibold text-foreground tracking-tight">
                {toast.title}
              </p>
              <p className="mt-0.5 text-xs text-secondary leading-relaxed">
                {toast.description}
              </p>
            </div>

            {/* Manual Dismiss Button */}
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="shrink-0 -mr-1 -mt-1 p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              aria-label="Dismiss notification"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

