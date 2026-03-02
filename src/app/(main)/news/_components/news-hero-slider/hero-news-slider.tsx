"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Slide {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    date: "03/02/26",
    title:
      "Our vessel is commencing cargo operations and preparing for her maiden voyage.",
    image: "/logo/m.v uddipon express.jpeg",
    link: "https://www.facebook.com/share/p/1DAPNpMFgF/",
  },
  {
    id: 2,
    date: "10/10/25",
    title: "Pangaon ICT: The port that waits for a road to the Bay of Bengal",
    image: "/logo/global-trade.png",
    link: "https://www.tbsnews.net/thoughts/pangaon-ict-port-waits-road-1257486",
  },
  {
    id: 3,
    date: "30/09/25",
    title:
      "Why businesses avoid Pangaon and what MSC wants to fix with $400m offer",
    image: "/logo/trading.jpg",
    link: "https://today.thefinancialexpress.com.bd/last-page/mos-looks-into-graft-allegation-over-pangaon-ict-vessels",
  },
  {
    id: 4,
    date: "13/10/25",
    title:
      "Bangladesh to lease three major container terminals to global operators",
    image: "/logo/global-trade.png",
    link: "https://www.maritimegateway.com/bangladesh-to-lease-three-major-container-terminals-to-global-operators",
  },
];

const AUTOPLAY_DURATION = 5500; // 5.5 seconds
const INACTIVITY_DURATION = 2500; // 2.5 seconds

export function HeroNewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsPaused(true);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / AUTOPLAY_DURATION) * 50;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Resume auto-play after inactivity
  useEffect(() => {
    if (!isPaused) return;

    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, INACTIVITY_DURATION);

    return () => clearTimeout(timeout);
  }, [isPaused]);

  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);
  }, []);

  return (
    <section
      className="relative w-full h-[70vh] overflow-hidden bg-black"
      onMouseEnter={handleUserInteraction}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-8 pb-24 md:px-16 lg:px-24 lg:pb-32">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/90 md:text-sm">
              {slides[currentSlide].date}
            </p>
            <h2 className="mb-6 text-pretty text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {slides[currentSlide].title}
            </h2>
            <a
              href={slides[currentSlide].link}
              onClick={handleUserInteraction}
              className="group inline-flex items-center gap-2 border-b-2 border-white/40 pb-1 text-sm font-medium uppercase tracking-wide text-white transition-all hover:border-white/80 md:text-base"
            >
              Read More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-black/40 md:left-8 lg:h-14 lg:w-14"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all hover:border-white hover:bg-black/40 md:right-8 lg:h-14 lg:w-14"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Bar Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2 px-4 md:bottom-12">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative h-1 w-16 overflow-hidden bg-white/30 transition-all hover:bg-white/50 md:w-24 lg:w-32"
          >
            {/* Active progress fill */}
            {index === currentSlide && (
              <motion.div
                className="absolute inset-y-0 left-0 bg-[#D4AF37]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            )}
            {/* Completed state */}
            {index < currentSlide && (
              <div className="absolute inset-0 bg-[#D4AF37]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
