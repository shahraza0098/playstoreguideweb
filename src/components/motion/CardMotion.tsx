"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cardHoverProps } from "@/lib/motion";

interface CardMotionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardMotion({ children, className = "" }: CardMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div {...cardHoverProps} className={className}>
      {children}
    </motion.div>
  );
}
