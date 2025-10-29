"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";

export function InterModalServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-16 lg:py-24 px-8 lg:px-12 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96"
            variants={slideInLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src="/fleet/vessel/everglory-img-2.jpg"
              alt="Container ship services"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 text-balance">
              Our PIL Intermodal Services complement our container shipping
              services and support you one step beyond carrying your cargo
              across the ocean
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed text-balance">
              We provide a professional and reliable customised solution –
              leveraging our capabilities in rail, truck and barge to transport
              your goods inland, even across borders. Our intermodal services
              are a good fit for companies with a focus on sustainable business
              practices and are available in Africa, North Asia, South Asia,
              Southeast Asia, the Middle East, Latin America, and Oceania.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
