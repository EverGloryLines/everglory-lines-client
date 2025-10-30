"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui";

export function MultiModalHeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row min-h-screen lg:min-h-96 xl:min-h-[450px] 2xl:min-h-[500px]">
        {/* Left - Red Background with Text */}
        <motion.div
          className="w-full lg:w-2/5 bg-[#F02B2A] text-white p-8 lg:p-12 flex flex-col justify-between"
          variants={slideInLeftVariants}
        >
          <div className="text-sm font-plus-jakarta-sans font-normal">
            <Breadcrumb className="mb-8">
              <BreadcrumbList className="text-white">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-red-100">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-red-200" />

                <BreadcrumbItem className="text-red-100 font-semibold">
                  Multimodal
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="text-5xl lg:text-6xl font-plus-jakarta-sans font-medium text-white">
            MULTIMODAL
          </h1>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="w-full lg:w-3/5 relative min-h-96 lg:min-h-auto"
          variants={slideInRightVariants}
        >
          <Image
            src="/services/multimodal-transport/multimodal-hero-img.png"
            alt="Container ship in port"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Bottom Section - Blue Background */}
      <motion.div
        className="w-full bg-[#485FA3] text-white py-16 lg:py-24 px-4 lg:px-12 max-md:-mt-20"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-plus-jakarta-sans font-medium mb-6 text-balance leading-normal"
            variants={slideUpVariants}
          >
            DELIVERING COMPREHENSIVE AND FLEXIBLE MULTIMODAL TRANSPORTATION
            SOLUTIONS
          </motion.h2>

          <motion.p
            className="text-lg font-sans font-normal text-gray-200 leading-relaxed text-balance"
            variants={slideUpVariants}
          >
            Combining multiple modes of transport under a single contract, we
            streamline your logistics with seamless connections between sea,
            rail, road, and inland waterways for optimal efficiency.
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}
