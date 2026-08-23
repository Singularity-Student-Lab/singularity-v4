"use client";

import React, { useEffect, useState } from "react";

export default function PageTransition() {
  const [transitionState, setTransitionState] = useState<"entering" | "idle" | "exiting">("entering");

  useEffect(() => {
    // 1. Initial Page Enter (smooth gentle fade-in)
    const timer = setTimeout(() => {
      setTransitionState("idle");
    }, 280);

    // 2. Intercept internal links for a clean, quick exit fade
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external, hash jumps, mailto, tel, downloads
      if (
        anchor.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("#") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      // Check URL
      try {
        const parsed = new URL(anchor.href, window.location.href);
        if (parsed.origin !== window.location.origin) return;

        // Same page check
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash === window.location.hash
        ) {
          return;
        }

        // Same page with hash jump
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash
        ) {
          return;
        }

        // Clean quick transition
        event.preventDefault();
        setTransitionState("exiting");

        setTimeout(() => {
          window.location.href = parsed.pathname + parsed.search + parsed.hash;
        }, 180);
      } catch {
        // Ignore fallback
      }
    };

    document.addEventListener("click", handleDocumentClick, true);

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) setTransitionState("idle");
    };
    const handlePopState = () => setTransitionState("idle");

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div
      className={`singularity-simple-transition state-${transitionState}`}
      aria-hidden="true"
    >
      <div className="simple-transition-bar"></div>
    </div>
  );
}
