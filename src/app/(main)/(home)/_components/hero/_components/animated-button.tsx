"use client";
import { useState } from "react";
import { ANIMATION_TIMINGS, COLORS } from "@/constants/home-hero-slides";
import { motion } from "motion/react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const AnimatedButton = ({ children, onClick }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-4 lg:px-8 lg:py-4 font-sans font-semibold uppercase tracking-wide text-white rounded-none transition-shadow duration-300 hover:shadow-2xl overflow-hidden cursor-pointer"
      style={{
        backgroundColor: COLORS.primaryGreen,
        willChange: "transform",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 w-full"
        initial={{ height: "0%" }}
        animate={{ height: isHovered ? "50%" : "0%" }}
        transition={{
          duration: ANIMATION_TIMINGS.buttonFillDuration,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: COLORS.primaryOrange,
          transformOrigin: "top",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full"
        initial={{ height: "0%" }}
        animate={{ height: isHovered ? "50%" : "0%" }}
        transition={{
          duration: ANIMATION_TIMINGS.buttonFillDuration,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: COLORS.primaryOrange,
          transformOrigin: "bottom",
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
