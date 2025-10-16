"use client";

import { motion } from "motion/react";
import { ImageGrid } from "./image-grid";
import { ContentSection } from "./content-section";

export default function HeroSection() {
  return (
    <motion.section
      className="container mx-auto w-full py-8 md:pt-12 md:pb-24 overflow-hidden px-4 md:pl-4 bg-white"
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row gap-8 md:gap-20 rounded-tl-[100px] lg:rounded-bl-[100px] shadow-[4px_8px_15px_rgba(0,0,0,0.1)]">
        <ImageGrid />
        <ContentSection />
      </div>
    </motion.section>
  );
}
