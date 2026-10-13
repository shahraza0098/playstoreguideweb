import type { Variants, Transition } from "motion/react";

export const MOTION_DURATIONS = {
  fast: 0.18,
  normal: 0.32,
  slow: 0.5,
} as const;

export const MOTION_EASINGS = {
  default: [0.16, 1, 0.3, 1] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
};

export const defaultTransition: Transition = {
  duration: MOTION_DURATIONS.normal,
  ease: MOTION_EASINGS.default,
};

/**
 * Subtle fade-and-rise entrance for headings, sections, and individual cards
 */
export const fadeRiseVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

/**
 * Subtle scale and fade for badges, floating dialogs, or popovers
 */
export const scaleSubtleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
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
    y: -8,
    scale: 0.98,
    transition: { duration: 0.18, ease: "easeInOut" as const },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
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
    scale: 1.02,
    transition: { duration: 0.15 },
  },
  whileTap: {
    scale: 0.98,
  },
};

