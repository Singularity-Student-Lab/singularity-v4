"use client";

import React, { useEffect, useState, useRef } from "react";

export default function PageTransition() {
  // 'entering' | 'idle' | 'exiting'
  const [transitionState, setTransitionState] = useState<"entering" | "idle" | "exiting">("entering");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initial Page Enter Animation (curtain slides away smoothly)
    const enterTimer = setTimeout(() => {
      setTransitionState("idle");
    }, 550);

    // 2. Global Link Click Interceptor for Smooth Page-to-Page Exits
    const handleDocumentClick = (event: MouseEvent) => {
      // Don't intercept if modifier keys are pressed (e.g. open in new tab)
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

      // Find closest <a> tag
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, javascript, download, or new tabs
      if (
        anchor.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.hasAttribute("download")
      ) {
        // If it is an absolute URL pointing to current origin, we can still handle it
        if (
          (href.startsWith("http://") || href.startsWith("https://")) &&
          !href.startsWith(window.location.origin)
        ) {
          return;
        }
      }

      // Ignore pure anchor jumps on the same page (e.g., #Mission, #Team, #labs)
      if (href.startsWith("#")) {
        return;
      }

      // Compute target URL path and hash
      let targetPath = href;
      try {
        const parsed = new URL(anchor.href, window.location.href);
        // If external origin, skip
        if (parsed.origin !== window.location.origin) return;

        // If exact same path, search, and hash, do nothing
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash === window.location.hash
        ) {
          return;
        }

        // If same path but only hash change (e.g. /#labs from /), allow standard scroll
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash
        ) {
          return;
        }

        targetPath = parsed.pathname + parsed.search + parsed.hash;
      } catch {
        // Fallback for relative paths
      }

      // Intercept and trigger smooth exit transition
      event.preventDefault();
      setTransitionState("exiting");

      // After curtain sweeps in, navigate to next page
      setTimeout(() => {
        window.location.href = targetPath;
      }, 420);
    };

    document.addEventListener("click", handleDocumentClick, true);

    // 3. Handle Back/Forward Cache (pageshow event)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setTransitionState("idle");
      }
    };

    const handlePopState = () => {
      setTransitionState("idle");
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(enterTimer);
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className={`singularity-page-transition-overlay state-${transitionState}`}
      aria-hidden="true"
    >
      <div className="transition-curtain-bg"></div>
      <div className="transition-glow-line"></div>
      <div className="transition-center-content">
        <div className="transition-logo-badge">
          <img
            src="/images/singularity_logo.webp"
            alt=""
            className="transition-logo-icon"
          />
          <span className="transition-logo-text">SINGULARITY</span>
        </div>
      </div>
    </div>
  );
}
