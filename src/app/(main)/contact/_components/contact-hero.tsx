"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f02b2a] text-white px-4 py-4 md:py-8"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-5xl font-sans font-medium mb-2 md:mb-4 ml-1">
          Contact us
        </h1>
        <nav className="flex items-center gap-2 text-sm md:text-base font-sans font-semibold ml-2">
          <Link
            href="/"
            className="hover:underline transition-all duration-200 opacity-90 hover:opacity-100"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/70">Contact</span>
        </nav>
      </div>
    </motion.div>
  );
}
