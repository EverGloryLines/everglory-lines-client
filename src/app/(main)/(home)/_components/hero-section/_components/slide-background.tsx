"use client";
import { backgroundImageVariants } from "@/animations/home-hero-slides";
import { COLORS } from "@/constants/home-hero-slides";
import { motion } from "motion/react";

import Image from "next/image";

interface SlideBackgroundProps {
  image: string;
  alt: string;
}

export const SlideBackground = ({ image, alt }: SlideBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <motion.div
        key={image}
        variants={backgroundImageVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "transform" }}
      >
        <Image
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
      </motion.div>

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ backgroundColor: COLORS.darkOverlay }}
      />

      <div
        className="absolute left-0 top-0 bottom-0 w-full pointer-events-none"
        style={{
          background: COLORS.contentGradient,
          //backdropFilter: "blur(2px)",
          //WebkitBackdropFilter: "blur(8px)",
        }}
      />
    </div>
  );
};
