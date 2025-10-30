"use client";

import { motion, Variants } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui";
import Image from "next/image";

export function LinerServiceHeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const checkpoints = ["Global", "Reliable", "Owned Fleet"];

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Rounded Corner */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/80 to-slate-600/60 z-10" />
        <Image
          src="/fleet/vessel/everglory-img-2.jpg"
          alt="Liner Service Background"
          className="w-full h-full object-cover rounded-bl-[80px]"
          width={1920}
          height={800}
        />
      </div>

      {/* Decorative Blue Border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-500/30 to-transparent z-5 rounded-bl-[80px]" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 max-w-2xl px-8 md:px-12 lg:px-16 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Everglory Liner Service
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md max-w-xl"
          variants={itemVariants}
        >
          Bypass disruptions with a faster, more frequent, and reliable service.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          variants={itemVariants}
        >
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 font-semibold"
          >
            Get instant prices
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
          >
            Contact us
          </Button>
        </motion.div>

        {/* Checkpoints */}
        <motion.div
          className="flex flex-wrap gap-6 md:gap-8"
          variants={containerVariants}
        >
          {checkpoints.map((checkpoint) => (
            <motion.div
              key={checkpoint}
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <Check className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-white font-medium">{checkpoint}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
