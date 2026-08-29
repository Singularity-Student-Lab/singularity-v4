"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransition() {
  const [transitionState, setTransitionState] = useState<"entering" | "idle" | "exiting">("entering");
  const pathname = usePathname();
  const router = useRouter();

  // Handle route change completion
  useEffect(() => {
    // Reset scroll smoothly to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    if ((window as any).__lenisInstance) {
      try {
        (window as any).__lenisInstance.scrollTo(0, { immediate: true });
      } catch {}
    }

    const timer = setTimeout(() => {
      setTransitionState("idle");
      document.body.classList.remove("menu-open");
      document.querySelector(".menu-wrapper")?.classList.remove("is-open");
    }, 180);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Close menus on esc or outside click
    const handleMenuClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

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

      const closeTrigger = target.closest(".fixed-close-button, .lottie-x");
      if (closeTrigger) {
        event.preventDefault();
        event.stopPropagation();
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
        return;
      }

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

    // Intercept internal link navigation for seamless page transitions
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

      if (
        anchor.target === "_blank" ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      if (anchor.closest(".menu-wrapper")) {
        document.body.classList.remove("menu-open");
        document.querySelector(".menu-wrapper")?.classList.remove("is-open");
      }

      try {
        const parsed = new URL(anchor.href, window.location.href);
        if (parsed.origin !== window.location.origin) return;

        // In-page hash jump
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search &&
          parsed.hash
        ) {
          const hashTarget = document.querySelector(parsed.hash);
          if (hashTarget) {
            event.preventDefault();
            if ((window as any).__lenisInstance) {
              (window as any).__lenisInstance.scrollTo(hashTarget);
            } else {
              hashTarget.scrollIntoView({ behavior: "smooth" });
            }
          }
          return;
        }

        // Same URL, no-op
        if (
          parsed.pathname === window.location.pathname &&
          parsed.search === window.location.search
        ) {
          return;
        }

        event.preventDefault();
        setTransitionState("exiting");

        const destination = parsed.pathname + parsed.search + parsed.hash;
        setTimeout(() => {
          router.push(destination);
        }, 140);
      } catch {}
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
      <div className="simple-transition-bar" />
    </div>
  );
}
