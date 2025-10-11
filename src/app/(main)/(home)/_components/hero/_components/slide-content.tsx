"use client";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Slide } from "../types";
import { contentVariants } from "@/animations/home-hero-slides";
import { COLORS } from "@/constants/home-hero-slides";
import { AnimatedButton } from "./animated-button";

interface SlideContentProps {
  slide: Slide;
}

export const SlideContent = ({ slide }: SlideContentProps) => {
  return (
    <div className="relative z-10 h-full flex items-center">
      <div className="relative container mx-auto px-4">
        <motion.div
          key={slide.id}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={contentVariants.tagline} className="mb-2">
            <span
              className="text-sm md:text-base font-sans font-semibold uppercase tracking-wider"
              style={{ color: COLORS.primaryOrange }}
            >
              {slide.tagline}
            </span>
          </motion.div>

          <div className="relative">
            <motion.div
              variants={contentVariants.backgroundText}
              className="absolute -top-8 md:-top-12 lg:-top-16 left-0 pointer-events-none select-none"
              aria-hidden="true"
            >
              <h2
                className="text-6xl md:text-8xl lg:text-9xl font-black whitespace-nowrap"
                style={{ color: COLORS.white }}
              >
                {slide.backgroundText}
              </h2>
            </motion.div>

            <motion.h1
              variants={contentVariants.title}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-white leading-tight mb-4 md:mb-6"
            >
              {slide.title}
            </motion.h1>
          </div>

          <motion.p
            variants={contentVariants.description}
            className="text-base md:text-lg lg:text-xl text-white mb-8 leading-tight max-w-2xl"
          >
            {slide.description}
          </motion.p>

          <motion.div
            variants={contentVariants.cta}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-10"
          >
            <AnimatedButton>{slide.ctaText}</AnimatedButton>

            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 flex items-center justify-center gap-2 p-2 bg-[#FF7700]/40 rounded-full">
                <Phone
                  className="w-6 h-6"
                  style={{ color: COLORS.primaryOrange }}
                />
              </div>

              <div className="flex flex-col justify-start items-start gap-0.5">
                <span className="text-base md:text-lg font-medium">
                  Call Us Now
                </span>
                <span className="text-lg md:text-xl font-semibold cursor-pointer">
                  <a href={`tel:${slide.phoneNumber}`}>{slide.phoneNumber}</a>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
