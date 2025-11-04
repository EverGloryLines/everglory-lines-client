"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

import { SectionTitle } from "@/components/shared/text/section-title";
import Image from "next/image";

interface BenefitCard {
  imgSrc: string;
  title: string;
  description: string;
}

export function LinerServiceBenefitsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits: BenefitCard[] = [
    {
      imgSrc: "/services/liner-service/plane_v1.svg",
      title: "Operational Flexibility",
      description:
        "Adapt to changing market demands with our dynamic sailing schedules, controlled assets, and strong global partnerships — ensuring seamless cargo movement under any condition.",
    },
    {
      imgSrc: "/services/liner-service/speedometer_v1.svg",
      title: "Agile Supply Chain Management",
      description:
        "Optimize your shipping timelines with the ability to scale, accelerate, or adjust delivery speeds according to your supply chain requirements and trade priorities.",
    },
    {
      imgSrc: "/services/liner-service/security-opt_v1.svg",
      title: "Cargo Safety & Security",
      description:
        "Your cargo is protected under stringent handling standards and monitored protocols — minimizing risks of loss, damage, or delay throughout every leg of the voyage.",
    },
    {
      imgSrc: "/services/liner-service/handshake_v1.svg",
      title: "Reliable Scheduling",
      description:
        "We maintain transparent lead times and dependable port calls, providing the punctuality and consistency your business can rely on across all major trade routes.",
    },
    {
      imgSrc: "/services/liner-service/globe_v1.svg",
      title: "Extensive Service Network",
      description:
        "Connect to an expansive network linking Indian ICDs and ports to Bangladesh’s key terminals — including Pangaon, Kamlapur ICD, Mongla, and Chittagong — with onward global connectivity.",
    },
    {
      imgSrc: "/services/liner-service/customs_clearence_v1.svg",
      title: "Integrated Logistics Solutions",
      description:
        "Experience true end-to-end service integration with our multimodal, intermodal, and customs support — simplifying your shipping process through a single, unified platform.",
    },
  ];

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.12,
      },
    }),
  };

  return (
    <section ref={ref} className="py-8 md:py-16 px-4 bg-[#F7F7F7]">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-4 md:mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <SectionTitle>Driving Performance Across Global Trade Routes</SectionTitle>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-8 flex items-center justify-center flex-col gap-2 text-center"
              custom={index}
              variants={cardVariants}
            >
              <Image
                src={benefit?.imgSrc || "./placeholder.png"}
                alt={benefit.title}
                width={80}
                height={80}
                className="object-contain"
              />

              <h3 className="text-xl font-plus-jakarta-sans font-medium text-slate-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-slate-600 font-sans font-normal leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
