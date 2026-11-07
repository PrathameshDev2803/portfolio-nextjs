"use client";

import { useEffect, useRef } from "react";

export function AutoUpdate() {
  const currentVersionRef = useRef<string | null>(null);

  useEffect(() => {
    let isMounted = true;

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
      try {
        const response = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        if (!response.ok) return;

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
      }
    };

    // Initial check
    checkVersion();

    // Check when user returns to this tab
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        checkVersion();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Periodic check every 60 seconds when tab is active
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        checkVersion();
      }
    }, 60000);

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
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(interval);
      window.removeEventListener("error", handleChunkError);
    };
  }, []);

  return null;
}

