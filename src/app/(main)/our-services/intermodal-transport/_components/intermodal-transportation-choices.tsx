"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";

interface TransportCard {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  headerBg: string;
}

const transportCards: TransportCard[] = [
  {
    title: "TRAIN",
    description:
      "A sustainable option that provides flexibility and timeliness for high volume shipments.",
    image:
      "/services/intermodal-transport/cargo-train.jpg",
    bgColor: "bg-blue-50",
    headerBg: "bg-blue-700",
  },
  {
    title: "TRUCK",
    description:
      "Provides final mile deliveries across varying distances, offering flexibility tailored to your supply chain schedule.",
    image:
      "/services/intermodal-transport/cargo-truck.jpeg",
    bgColor: "bg-red-50",
    headerBg: "bg-red-600",
  },
  {
    title: "BARGE",
    description:
      "Environmentally-friendly option to move shipments inland via water transport routes that large vessels cannot access.",
    image:
      "/fleet/vessel/everglory-img-3.jpg",
    bgColor: "bg-amber-50",
    headerBg: "bg-amber-500",
  },
];

export function InterModalTransportationChoices() {
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
      className="w-full py-16 lg:py-24 px-8 lg:px-12 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-blue-900 mb-12"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          TRANSPORTATION CHOICES
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transportCards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`${card.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              {/* Header */}
              <div className={`${card.headerBg} text-white p-4`}>
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>

              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-balance">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
