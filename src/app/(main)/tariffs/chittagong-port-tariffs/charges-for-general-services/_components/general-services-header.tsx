"use client";

import { motion, Variants } from "motion/react";

export function GeneralServicesHeader() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mb-12 border-b border-gray-500 pb-8 text-center text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-[32px] md:text-[36px] 2xl:text-[48px] font-plus-jakarta-sans font-medium tracking-[-0.02em] leading-[1.4] my-2"
        variants={itemVariants}
      >
        General Services
      </motion.h1>
      <motion.p
        className="text-base lg:text-lg text-gray-300 max-w-sm sm:max-w-3xl mx-auto leading-relaxed tracking-tight"
        variants={itemVariants}
      >
        Hire rates, emergency support, marine fleet services, and operational
        license fees provided by Chittagong Port Authority.
      </motion.p>
    </motion.div>
  );
}
