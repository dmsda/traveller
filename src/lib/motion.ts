// Travellers V3 — Motion Design System Tokens & Variants
import type { Variants } from "motion/react";

export const MOTION_EASING = {
  // Editorial smooth bezier curves
  standard: [0.25, 0.1, 0.25, 1.0] as const,
  smoothOut: [0.16, 1, 0.3, 1] as const,
  springGentle: { type: "spring", stiffness: 120, damping: 18 } as const,
  springToggle: { type: "spring", stiffness: 500, damping: 30 } as const,
};

export const MOTION_DURATIONS = {
  instant: 0.15,
  fast: 0.22,
  base: 0.5,
  slow: 0.65,
  floatingCycle: 6, // 6s gentle floating cycle
  floatingOffsetCycle: 5.2,
};

// Reusable viewport configuration: triggers once when 15% visible
export const viewportTrigger = {
  once: true,
  amount: 0.15,
};

// Scroll Reveal / Fade In Up (16-20px translateY, 400-600ms duration)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.base,
      ease: [0.16, 1, 0.3, 1],
      delay: customDelay,
    },
  }),
};

// Stagger Container for lists and card groups (80-120ms stagger)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

// Stagger Child Item (16-18px translateY, 400-500ms duration)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATIONS.base,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Interactive Card Hover Variant (3px lift, 200ms transition)
export const cardHover: Variants = {
  initial: { y: 0 },
  hover: {
    y: -3,
    transition: {
      duration: 0.2,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Interactive Button Tap Variant
export const buttonInteraction: Variants = {
  hover: {
    y: -1.5,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
  tap: {
    y: 0,
    scale: 0.98,
    transition: { duration: 0.08 },
  },
};

// Continuous Subtle Floating Motion for Phone Mockup (6-8px, 6s, gentle easeInOut)
export const phoneFloat: Variants = {
  animate: {
    y: [-7, 0, -7],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

// Floating Card Out-of-phase Motion (Sajek Hill Card)
export const cardFloatOffset: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 5.2,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 0.3,
    },
  },
};

// Floating Badge Out-of-phase Motion (Martina Pill)
export const badgeFloatOffset: Variants = {
  animate: {
    y: [-4, 2, -4],
    transition: {
      duration: 4.8,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 0.7,
    },
  },
};

// World Map Background Fade-in
export const mapFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.75,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

// SVG Curved Route Line Draw-in
export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.9,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" as const, delay: 0.2 },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

