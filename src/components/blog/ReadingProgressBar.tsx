"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docEl = document.documentElement;
          const scrollTop = window.scrollY || docEl.scrollTop || 0;
          const scrollHeight = docEl.scrollHeight - docEl.clientHeight;

          if (scrollHeight > 0) {
            const currentProgress = Math.min(
              100,
              Math.max(0, (scrollTop / scrollHeight) * 100)
            );
            // Throttle state updates: only update if progress moved by >= 0.5%
            setProgress((prev) => {
              if (Math.abs(prev - currentProgress) >= 0.5 || currentProgress === 100 || currentProgress === 0) {
                return currentProgress;
              }
              return prev;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-border/40"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-teal-500 to-indigo-500 transition-all duration-100 ease-out origin-left"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
