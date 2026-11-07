"use client";

import { useEffect, useRef } from "react";

export function AutoUpdate() {
  const currentVersionRef = useRef<string | null>(null);
  const isCheckingRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    let activeUntil = Date.now() + 120000; // Fast-poll for first 2 minutes

    // Helper to clear browser caches and trigger a hard reload
    const triggerHardReload = async () => {
      try {
        if ("caches" in window) {
          const cacheKeys = await window.caches.keys();
          await Promise.all(cacheKeys.map((key) => window.caches.delete(key)));
        }
      } catch {
        // Silently continue if caches API is restricted
      }
      window.location.reload();
    };

    // Check if a new deployment has been published
    const checkVersion = async () => {
      if (!isMounted || isCheckingRef.current) return;
      isCheckingRef.current = true;

      try {
        // Primary: Dynamic zero-cache API route; Fallback: static version.json
        const now = Date.now();
        let response = await fetch(`/api/version?t=${now}`, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
        }).catch(() => null);

        if (!response || !response.ok) {
          response = await fetch(`/version.json?t=${now}`, {
            cache: "no-store",
            headers: {
              "Cache-Control": "no-cache, no-store, must-revalidate",
              Pragma: "no-cache",
            },
          }).catch(() => null);
        }

        if (!response || !response.ok) return;

        const data = await response.json();
        const serverVersion = data?.version;

        if (!serverVersion || !isMounted) return;

        if (!currentVersionRef.current) {
          // Initialize with currently loaded version
          currentVersionRef.current = serverVersion;
        } else if (currentVersionRef.current !== serverVersion) {
          // New deployment detected! Hard reload with cache reset
          triggerHardReload();
        }
      } catch {
        // Network/offline catch
      } finally {
        isCheckingRef.current = false;
      }
    };

    // Initial check on mount
    checkVersion();

    // Trigger immediate check when returning to window or tab
    const handleActivity = () => {
      activeUntil = Date.now() + 120000;
      if (document.visibilityState === "visible") {
        checkVersion();
      }
    };

    window.addEventListener("focus", handleActivity);
    document.addEventListener("visibilitychange", handleActivity);

    // Adaptive periodic polling: 5s when recently active, 20s when idle
    let pollTimeout: ReturnType<typeof setTimeout> | null = null;

    const scheduleNextPoll = () => {
      if (!isMounted) return;
      const isRecentlyActive = Date.now() < activeUntil;
      const delay = isRecentlyActive ? 5000 : 20000;

      pollTimeout = setTimeout(() => {
        if (document.visibilityState === "visible") {
          checkVersion();
        }
        scheduleNextPoll();
      }, delay);
    };

    scheduleNextPoll();

    // Catch stale Next.js chunk errors after a deployment and auto-reload
    const handleChunkError = (e: ErrorEvent) => {
      const msg = e.message || "";
      if (/Loading chunk [\d]+ failed|ChunkLoadError/i.test(msg)) {
        triggerHardReload();
      }
    };

    window.addEventListener("error", handleChunkError);

    return () => {
      isMounted = false;
      if (pollTimeout) clearTimeout(pollTimeout);
      window.removeEventListener("focus", handleActivity);
      document.removeEventListener("visibilitychange", handleActivity);
      window.removeEventListener("error", handleChunkError);
    };
  }, []);

  return null;
}
