"use client";

import React from "react";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Plane,
  Gauge,
  Shield,
  Handshake,
  Globe,
  Clipboard,
} from "lucide-react";

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function LinerServiceBenefitsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits: BenefitCard[] = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Increased flexibility",
      description:
        "Tackle disruptions effortlessly with our own-controlled assets and global partnerships",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Enhanced agility",
      description:
        "Get better control by slowing down or speeding up your supply chain as per your needs",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure movement",
      description:
        "Best-in-class ground handling protocols, limiting risks of theft and damage",
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: "More reliability",
      description:
        "More lead time transparency with on-time arrival and departure schedules",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Wider reach",
      description:
        "Leverage our network to reach more locations and customers across India and Bangladesh",
    },
    {
      icon: <Clipboard className="w-12 h-12" />,
      title: "One-stop shop",
      description:
        "Integrate with our other services (Intermodal, Multimodal, Customs) for true end-to-end transportation",
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
    <section
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-16 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why Everglory Liner Services?
          </h2>
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
              className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              custom={index}
              variants={cardVariants}
            >
              <div className="flex justify-center mb-4 text-slate-700">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
