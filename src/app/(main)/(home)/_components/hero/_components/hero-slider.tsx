"use client";
import { ANIMATION_TIMINGS } from "@/constants/home-hero-slides";
import { motion, AnimatePresence } from "motion/react";
import { HeroSliderProps } from "../types";
import { useSlider } from "@/hooks/use-slider";
import { slideVariants } from "@/animations/home-hero-slides";
import { SlideBackground } from "./slide-background";
import { SlideContent } from "./slide-content";
import { SliderNavigation } from "./navigation";

export const HeroSlider = ({
  slides,
  autoPlayInterval = ANIMATION_TIMINGS.autoPlayInterval,
  transitionDuration = ANIMATION_TIMINGS.transitionDuration,
}: HeroSliderProps) => {
  const { currentIndex, direction, nextSlide, previousSlide } = useSlider({
    totalSlides: slides.length,
    autoPlayInterval,
    transitionDuration,
  });

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#0d2a3d" }}
    >
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
          style={{ willChange: "transform, opacity" }}
        >
          <SlideBackground
            image={currentSlide.image}
            alt={currentSlide.title}
          />
          <SlideContent slide={currentSlide} />
        </motion.div>
      </AnimatePresence>

      <SliderNavigation
        onPrevious={previousSlide}
        onNext={nextSlide}
        currentIndex={currentIndex}
        totalSlides={slides.length}
      />
    </section>
  );
};
