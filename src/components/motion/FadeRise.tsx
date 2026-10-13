"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { defaultTransition, defaultViewport } from "@/lib/motion";

interface FadeRiseProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  triggerOnce?: boolean;
}

export function FadeRise({
  children,
  className = "",
  delay = 0,
  duration,
  yOffset = 14,
  triggerOnce = true,
}: FadeRiseProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          ...defaultTransition,
          ...(duration ? { duration } : {}),
          delay,
        },
      }}
      viewport={{ ...defaultViewport, once: triggerOnce }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
