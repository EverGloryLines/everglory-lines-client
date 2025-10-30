"use client";

import type React from "react";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/text/section-title";

interface BenefitCard {
  title: string;
  imgSrc?: string;
}

const benefits: BenefitCard[] = [
  {
    title: "Simplified coordination with single contract",
    imgSrc: "/services/intermodal-transport/end-to-end.svg",
  },
  {
    title: "Unified accountability for all transport modes",
    imgSrc: "/services/intermodal-transport/single-point.svg",
  },
  {
    title: "Cost optimization through integrated routing",
    imgSrc: "/services/intermodal-transport/flexible-options.svg",
  },
  {
    title: "Reduced transit times and handling",
    imgSrc: "/services/intermodal-transport/environmental-experience.svg",
  },
];

export function MultiModalKeyBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 + i * 0.15,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-8 md:py-16 lg:py-24 px-4 bg-white"
    >
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle className="mb-4 md:mb-8">KEY BENEFITS</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-50 rounded-none p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <Image
                src={benefit.imgSrc || ""}
                alt={benefit.title}
                width={56}
                height={56}
                className="mb-4"
              />
              <h3 className="text-lg font-plus-jakarta-sans font-semibold text-[#24479B] text-balance">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
