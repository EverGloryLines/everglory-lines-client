import { useState, useEffect, useCallback } from 'react';

interface UseSliderProps {
  totalSlides: number;
  autoPlayInterval: number;
  transitionDuration: number;
}

export const useSlider = ({
  totalSlides,
  autoPlayInterval,
}: UseSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (newIndex: number) => {
      if (newIndex === currentIndex) return;

      const newDirection = newIndex > currentIndex ? 1 : -1;
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    },
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % totalSlides;
    goToSlide(newIndex);
  }, [currentIndex, totalSlides, goToSlide]);

  const previousSlide = useCallback(() => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, totalSlides, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  return {
    currentIndex,
    direction,
    nextSlide,
    previousSlide,
    goToSlide,
  };
};
