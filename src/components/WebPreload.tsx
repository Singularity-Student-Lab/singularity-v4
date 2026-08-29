"use client";

import React, { useEffect, useState } from "react";
import "./web-preload.css";

interface WebPreloadProps {
  brandName?: string;
  slogans?: string[];
  durationMs?: number;
  onComplete?: () => void;
}

const DEFAULT_SLOGANS = [
  "Student Research & Innovation Lab",
  "Engineering The Frontier at SRM-AP",
  "AI • Quantum • Robotics • Systems",
];

export default function WebPreload({
  brandName = "SINGULARITY",
  slogans = DEFAULT_SLOGANS,
  durationMs = 2700,
  onComplete,
}: WebPreloadProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [sloganIndex, setSloganIndex] = useState(0);
  const [sloganPhase, setSloganPhase] = useState<"entering" | "visible" | "exiting">("visible");
  const [isExiting, setIsExiting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const mountTimer = setTimeout(() => {
      setIsMounted(true);
    }, 40);

    // Slogan cycling interval
    const cycleInterval = setInterval(() => {
      setSloganPhase("exiting");
      setTimeout(() => {
        setSloganIndex((prev) => (prev + 1) % slogans.length);
        setSloganPhase("entering");
        setTimeout(() => {
          setSloganPhase("visible");
        }, 50);
      }, 260);
    }, 1700);

    // Trigger curtain exit
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = originalOverflow;
    }, durationMs);

    // Fully complete and unmount preloader
    const completeTimer = setTimeout(() => {
      setIsCompleted(true);
      if (onComplete) onComplete();
    }, durationMs + 1050);

    return () => {
      clearTimeout(mountTimer);
      clearInterval(cycleInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [durationMs, onComplete, slogans.length]);

  if (isCompleted) {
    return null;
  }

  const brandCharacters = brandName.split("");
  const currentSlogan = slogans[sloganIndex] || "";
  const sloganCharacters = currentSlogan.split("");

  return (
    <aside
      className={`web-preload-overlay ${isExiting ? "is-exiting" : ""} ${
        isCompleted ? "is-completed" : ""
      }`}
      aria-label="Singularity Preloader"
      aria-hidden={isExiting || isCompleted}
    >
      <div className="web-preload-bg">
        {/* Subtle Ambient Radial Glow Orbs */}
        <div
          className={`web-preload-orb web-preload-orb-cyan ${
            isMounted ? "is-animated" : ""
          }`}
          aria-hidden="true"
        />
        <div
          className={`web-preload-orb web-preload-orb-lime ${
            isMounted ? "is-animated" : ""
          }`}
          aria-hidden="true"
        />
      </div>

      <div className="web-preload-content">
        {/* App Logo Emblem Backdrop behind Title */}
        <div
          className={`web-preload-logo-backdrop ${
            isMounted ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          <img
            src="/images/singularity_logo.webp"
            alt=""
            width={260}
            height={260}
            className="web-preload-logo-img"
          />
        </div>

        {/* Brand Main Title (Character Blur & Scale Spring Reveal) */}
        <h1 className="web-preload-title" aria-label={brandName}>
          {brandCharacters.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={`web-preload-char ${isMounted ? "is-visible" : ""}`}
              style={{
                transitionDelay: isMounted
                  ? `${0.12 + index * 0.045}s`
                  : "0s",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Clean Staggered Slogan (No Box / No Border) */}
        <div
          className={`web-preload-slogan-wrapper ${
            isMounted ? "is-visible" : ""
          }`}
        >
          <p className="web-preload-slogan-text">
            {sloganCharacters.map((char, index) => {
              let charState = "state-visible";
              if (sloganPhase === "entering") charState = "state-entering";
              if (sloganPhase === "exiting") charState = "state-exiting";

              return (
                <span
                  key={`${sloganIndex}-${index}-${char}`}
                  className={`web-preload-slogan-char ${charState}`}
                  style={{
                    transitionDelay:
                      sloganPhase === "entering" || sloganPhase === "visible"
                        ? `${index * 0.012}s`
                        : `${index * 0.008}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </aside>
  );
}
