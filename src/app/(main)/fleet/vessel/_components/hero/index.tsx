"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const CAROUSEL_IMAGES = [
  {
    src: "/fleet/vessel/everglory-img-2.jpg",
    alt: "Cargo ship with containers",
  },
  {
    src: "/fleet/vessel/everglory-img-3.jpg",
    alt: "Container vessel at sea",
  },
  {
    src: "/fleet/vessel/everglory-img-1.jpg",
    alt: "Shipping vessel for global trade",
  },
];

const CAROUSEL_INTERVAL = 5000;
const TRANSITION_DURATION = 1.2;

export function VesselPageHeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {CAROUSEL_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.05,
            }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: "easeInOut",
            }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-plus-jakarta-sans font-bold text-white text-center text-balance"
          initial={{ translateY: 30, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          OUR FLEET
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl font-sans font-normal text-white text-center max-w-4xl px-4 text-balance"
          initial={{ translateY: 30, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Seamless maritime freight services connecting Bangladesh and India.
          Your trusted partner for efficient cargo delivery across the Bay of
          Bengal.
        </motion.p>
      <Link href="#vessel-specification">
        <motion.button
          className="mt-8 px-8 py-3 bg-[#4c6faf] hover:bg-[#4c6faf]/90 text-white font-plus-jakarta-sans font-medium rounded-none transition-colors cursor-pointer"
          initial={{ translateY: 30, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          LEARN MORE
        </motion.button>
      </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {CAROUSEL_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
