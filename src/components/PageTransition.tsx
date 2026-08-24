"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageTransition() {
  const [transitionState, setTransitionState] = useState<"entering" | "idle" | "exiting">("entering");
  const router = useRouter();

  useEffect(() => {
    // 1. Initial Page Enter (smooth gentle fade-in)
    const timer = setTimeout(() => {
      setTransitionState("idle");
    }, 280);

    // 2. Universal Navigation Drawer Controller (Mobile & Desktop)
    const handleMenuClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Check if clicked menu open button (hamburger, nav button, circle menu)
      const openTrigger = target.closest(".menu-button, .w-nav-button, .w-icon-nav-menu, .circle-menu");
      if (openTrigger) {
        event.preventDefault();
        event.stopPropagation();
        const menu = document.querySelector(".menu-wrapper");
        const isOpen = document.body.classList.contains("menu-open") || menu?.classList.contains("is-open");
        if (isOpen) {
          document.body.classList.remove("menu-open");
          menu?.classList.remove("is-open");
        } else {
          document.body.classList.add("menu-open");
          menu?.classList.add("is-open");
        }
        return;
      }

      // Check if clicked close button
      const closeTrigger = target.closest(".fixed-close-button, .lottie-x");
      if (closeTrigger) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
        return;
      }

      // If menu is open and clicked on background (outside navigation-content)
      const menuWrapper = target.closest(".menu-wrapper");
      if (menuWrapper && !target.closest(".navigation-content")) {
        document.body.classList.remove("menu-open");
        menuWrapper.classList.remove("is-open");
        return;
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
      }
    };

    document.addEventListener("click", handleMenuClick, true);
    document.addEventListener("keydown", handleKeyDown);

    // 3. Intercept internal links for a clean, quick exit fade
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
        anchor.hasAttribute("download")
      ) {
        return;
      }

      // If clicked inside menu, close menu immediately
      if (anchor.closest(".menu-wrapper")) {
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
      }

      // Check URL
      try {
        const parsed = new URL(anchor.href, window.location.href);
        if (parsed.origin !== window.location.origin) return;

        // Hash jump on same page
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash
        ) {
          const hashTarget = document.querySelector(parsed.hash);
          if (hashTarget) {
            event.preventDefault();
            hashTarget.scrollIntoView({ behavior: "smooth" });
          }
          return;
        }

        // Same page without hash
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search
        ) {
          return;
        }

        // Clean quick transition
        event.preventDefault();
        setTransitionState("exiting");

        const destination = parsed.pathname + parsed.search + parsed.hash;
        setTimeout(() => {
          router.push(destination);
          setTimeout(() => setTransitionState("idle"), 280);
        }, 180);
      } catch {
        // Ignore fallback
      }
    };

    document.addEventListener("click", handleDocumentClick, true);

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        setTransitionState("idle");
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
      }
    };
    const handlePopState = () => {
      setTransitionState("idle");
      document.body.classList.remove("menu-open");
      document.querySelector(".menu-wrapper")?.classList.remove("is-open");
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("popstate", handlePopState);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleMenuClick, true);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);

  return (
    <div
      className={`singularity-simple-transition state-${transitionState}`}
      aria-hidden="true"
    >
      <div className="simple-transition-bar"></div>
    </div>
  );
}
