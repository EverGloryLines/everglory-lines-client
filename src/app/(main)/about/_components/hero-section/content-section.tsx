/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants, Transition } from "motion/react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { SectionDescription } from "@/components/shared/text/section-description";
import { SectionTitle } from "@/components/shared/text/section-title";
import { CtaButtonVariantBlue } from "@/components/shared/buttons/cta-button-v-blue";
import { CtaButtonVariantBlueWhite } from "@/components/shared/buttons/cta-button-v-blue-white";

export const ContentSection = () => {
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      } as Transition, // Cast to Transition
    },
  };

  // Explicitly type itemVariants as Variants
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as any, // Cast to 'any' to satisfy Easing type
      } as Transition, // Cast to Transition
    },
  };

  return (
    <motion.div
      className="lg:w-[60%] px-4 md:-mt-4 flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="my-8 lg:my-0 md:mb-4 lg:mb-6"
        variants={itemVariants}
      >
        <SectionTitle className="text-4xl md:text-6xl lg:text-7xl text-center lg:text-left font-gilroy-regular">
          About Us
        </SectionTitle>
      </motion.div>

      <div className="grid grid-cols-2 lg:hidden gap-3 sm:gap-6 h-full mb-8">
        {/* First Column */}
        <div className="flex flex-col gap-4">
          <div className="relative h-[160px] sm:h-[180px] ml-4 md:h-[250px] overflow-hidden">
            <Image
              src="/about/hero/image-grid-1.png"
              alt="Medical professionals in operating room"
              fill
              className="rounded-tl-[100px] object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          <div className="relative h-[120px] ml-6 max-sm:w-[120px] sm:ml-12 overflow-hidden">
            <Image
              src="/about/hero/image-grid-2.png"
              alt="Doctor performing procedure"
              fill
              className="rounded-bl-[100px] object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-0 sm:gap-4">
          <div
            className="relative h-[120px] sm:h-[120px] w-[120px] overflow-hidden"
            //variants={imageVariants}
          >
            <Image
              src="/about/hero/image-grid-3.png"
              alt="Medical procedure closeup"
              fill
              className="rounded-tr-[60px] object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          <div
            className="relative h-[160px] md:h-[230px] w-[150px] md:w-[250px] overflow-hidden mt-4"
            //variants={imageVariants}
          >
            <Image
              src="/about/hero/image-grid-4.png"
              alt="Patient hand with IV"
              fill
              className="rounded-tr-[120px] object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>

      <motion.div
        className="text-gray-700 mb-6 md:mb-8 text-lg leading-relaxed"
        variants={itemVariants}
      >
        <SectionDescription className="text-base md:text-base lg:text-lg text-left font-sans font-normal text-[#000000]/70">
          As a leading force in global container logistics, we specialize in
          end-to-end shipping solutions, from port-to-door delivery to complex
          customs brokerage. We are currently pioneering the future of supply
          chain management with our advanced, integrated ERP platform, designed
          to offer clients real-time tracking, optimized scheduling, and
          transparent pricing across the entire ocean freight lifecycle.
        </SectionDescription>
      </motion.div>

      <motion.div
        className="flex items-center justify-center flex-row gap-2 mb-10"
        variants={itemVariants}
      >
        <CtaButtonVariantBlue href="https://helpdesk.moonhospital.info/app/6">
          <span className="block lg:hidden">Quote</span>
          <span className="hidden lg:block">Get a Freight Quote</span>
        </CtaButtonVariantBlue>

        <CtaButtonVariantBlueWhite href="/services">
          <span className="block lg:hidden">Vessel Fleet</span>
          <span className="hidden lg:block">Explore Our Vessel Fleet</span>
        </CtaButtonVariantBlueWhite>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Separator className="mb-6 md:mb-8 mt-0 bg-gray-200" />
      </motion.div>

      <motion.div
        className="space-y-1 mb-10 lg:mb-0 text-center lg:text-left"
        variants={itemVariants}
      >
        <p className="text-base md:text-lg text-[#000000]/70 font-plus-jakarta-sans font-normal">
          Have any questions?
        </p>
        <p className="text-base md:text-lg text-[#000000]/70 font-plus-jakarta-sans font-normal">
          Contact us!
        </p>
        <p className="text-2xl md:text-4xl font-plus-jakarta-sans font-normal text-[#000000]/80 mt-2">
          +88017 6655 6655
        </p>
      </motion.div>
    </motion.div>
  );
};
