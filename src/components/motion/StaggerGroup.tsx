"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeRiseVariants, defaultViewport } from "@/lib/motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  triggerOnce?: boolean;
}

export function StaggerGroup({
  children,
  className = "",
  staggerDelay = 0.06,
  triggerOnce = true,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.02,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...defaultViewport, once: triggerOnce }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={fadeRiseVariants} className={className}>
      {children}
    </motion.div>
  );
}
