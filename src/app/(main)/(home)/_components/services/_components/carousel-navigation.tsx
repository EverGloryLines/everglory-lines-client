"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselControls } from "../types";

interface CarouselNavigationProps extends CarouselControls {
  showArrows?: boolean;
}

export function CarouselNavigation({
  currentIndex,
  totalSlides,
  onNext,
  onPrevious,
  onDotClick,
  showArrows = true,
}: CarouselNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      {showArrows && (
        <button
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-all hover:border-teal-600 hover:text-teal-600 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-current focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      <div className="flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${
              index === currentIndex
                ? "w-12 h-3 bg-teal-600"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {showArrows && (
        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center transition-all hover:border-teal-600 hover:text-teal-600 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-200 disabled:hover:text-current focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
