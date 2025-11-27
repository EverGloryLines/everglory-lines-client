"use client";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { NavigationProps } from "../types";
import { useResponsive } from "@/hooks/use-responsive";
import { COLORS } from "@/constants/home-hero-slides";

export const SliderNavigation = ({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides,
}: NavigationProps) => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPrevious()}
            className="w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor:
                index === currentIndex
                  ? COLORS.primaryOrange
                  : "rgba(255, 255, 255, 0.5)",
              width: index === currentIndex ? "2rem" : "0.625rem",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex items-center gap-3 text-white"
      >
        <RotateCw className="w-5 h-5" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Track Your Shipment
        </span>
      </motion.div>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevious}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer"
          style={{ backgroundColor: COLORS.white }}
          aria-label="Previous slide"
        >
          <ChevronLeft
            className="w-6 h-6"
            style={{ color: COLORS.primaryOrange }}
          />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNext}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer"
          style={{ backgroundColor: COLORS.primaryOrange }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>
    </div>
  );
};
