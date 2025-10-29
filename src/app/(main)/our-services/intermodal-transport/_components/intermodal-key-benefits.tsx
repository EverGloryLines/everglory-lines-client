"use client";

import type React from "react";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

interface BenefitCard {
  title: string;
  imgSrc?: string;
}

const benefits: BenefitCard[] = [
  {
    title: "End-to-end transportation solution",
    imgSrc: "/services/intermodal-transport/end-to-end.svg",
  },
  {
    title: "Single point of contact for one-stop service",
    imgSrc: "/services/intermodal-transport/single-point.svg",
  },
  {
    title: "Flexible options customisable to your needs",
    imgSrc: "/services/intermodal-transport/flexible-options.svg",
  },
  {
    title: "Environmentally friendly",
    imgSrc: "/services/intermodal-transport/environmental-experience.svg",
  },
];

export function InterModalKeyBenefits() {
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
      className="w-full py-16 lg:py-24 px-8 lg:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          KEY BENEFITS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-100 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <Image
                src={benefit.imgSrc || ""}
                alt={benefit.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-bold text-blue-900 text-balance">
                {benefit.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
