import { ANIMATION_TIMINGS } from "@/constants/home-hero-slides";
import { Variants, Variant } from "motion/react";

export const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "tween",
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: ANIMATION_TIMINGS.transitionDuration,
      },
      opacity: {
        duration: ANIMATION_TIMINGS.transitionDuration,
      },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    transition: {
      x: {
        type: "tween",
        ease: [0.43, 0.13, 0.23, 0.96],
        duration: ANIMATION_TIMINGS.transitionDuration,
      },
      opacity: {
        duration: ANIMATION_TIMINGS.transitionDuration,
      },
    },
  }),
};

export const backgroundImageVariants: Variants = {
  initial: {
    scale: 1.05,
  },
  animate: {
    scale: 1,
    transition: {
      duration: ANIMATION_TIMINGS.backgroundZoomDuration,
      ease: "easeOut" as const,
    },
  },
};

// Define a custom type for nested variants
type ContentVariants = {
  [key: string]: {
    hidden: Variant;
    visible: Variant;
  };
};

export const contentVariants: ContentVariants = {
  tagline: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: ANIMATION_TIMINGS.taglineDelay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  },
  backgroundText: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 0.07,
      transition: {
        delay: ANIMATION_TIMINGS.backgroundTextDelay,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  },
  title: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: ANIMATION_TIMINGS.titleDelay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  },
  description: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: ANIMATION_TIMINGS.descriptionDelay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  },
  cta: {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: ANIMATION_TIMINGS.ctaDelay,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  },
};
