"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const taglines = [
  "All Water and Combined Container Liner Service Direct To Dhaka",
  "Not 60 Days, Only 6 Days Transit Time From All Inland Points/ICDs of India via Haldia to Pangaon, Dhaka",
  "We Connect The Bay Of Bengal - Domiciled In the Sub-continent",
  "Reliable Maritime Solutions for India-Bangladesh Trade Corridor",
];

export function TaglineSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-slate-100 py-4 md:py-2 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto h-10 md:h-12 flex items-center justify-center relative font-sans font-semibold">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              x: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.6 },
            }}
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <h2 className="text-base sm:text-lg md:text-xl text-gray-800 text-center leading-relaxed">
              {taglines[currentIndex]}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
