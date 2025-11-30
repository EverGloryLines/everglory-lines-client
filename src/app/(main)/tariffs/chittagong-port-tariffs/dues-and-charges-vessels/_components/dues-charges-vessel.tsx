"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { DuesServiceCard } from "./dues-service-card";
import { duesServicesData } from "@/data/tariffs/dues-and-charges-vessels";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const DuesChargesVessel: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#001a3d] py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-20" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-20" />

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1
            variants={titleVariants}
            className="text-[32px] md:text-[36px] 2xl:text-[48px] font-plus-jakarta-sans font-medium tracking-[-0.02em] text-white leading-[1.4] mb-4"
          >
            Dues & Charges on Vessels
          </motion.h1>
          <motion.p
            variants={titleVariants}
            className="text-base lg:text-lg text-gray-300 max-w-sm sm:max-w-3xl mx-auto leading-relaxed tracking-tight"
          >
            Comprehensive breakdown of all port charges, fees, and services for
            vessels. Transparent pricing structure for port operations and
            vessel services.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {duesServicesData.map((service, index) => (
            <DuesServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
