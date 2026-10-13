import type { Variants, Transition } from "motion/react";

export const MOTION_DURATIONS = {
  fast: 0.18,
  normal: 0.3,
  slow: 0.45,
} as const;

export const MOTION_EASINGS = {
  default: [0.16, 1, 0.3, 1] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeInOut: [0.4, 0, 0.2, 1] as const,
};

export const defaultTransition: Transition = {
  duration: MOTION_DURATIONS.normal,
  ease: MOTION_EASINGS.default,
};

export const defaultViewport = {
  once: true,
  amount: 0.08,
  margin: "0px 0px -20px 0px",
};

/**
 * Fallback static variants when prefers-reduced-motion is active
 */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0 } },
};

/**
 * Subtle fade-and-rise entrance for headings, sections, and individual cards
 */
export const fadeRiseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Clean fade-in without vertical shift
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATIONS.normal,
      ease: MOTION_EASINGS.default,
    },
  },
};

/**
 * Staggered container for grouping lists, grids, or timeline milestones
 */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

/**
 * Subtle scale and fade for badges, floating dialogs, or popovers
 */
export const scaleSubtleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/**
 * Mobile drawer slide-in and fade
 */
export const mobileDrawerVariants: Variants = {
  closed: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: MOTION_EASINGS.default },
  },
};

/**
 * Disclosure and accordion smooth expansion
 */
export const disclosureVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    overflow: "hidden",
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.24, ease: MOTION_EASINGS.default },
  },
};

/**
 * Card hover and tap micro-interactions
 */
export const cardHoverProps = {
  whileHover: {
    y: -3,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  whileTap: {
    y: 0,
    scale: 0.99,
  },
};

/**
 * Button tap feedback
 */
export const buttonTapProps = {
  whileHover: {
    scale: 1.015,
    transition: { duration: 0.15 },
  },
  whileTap: {
    scale: 0.985,
  },
};
