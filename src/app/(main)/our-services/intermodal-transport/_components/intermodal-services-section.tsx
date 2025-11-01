"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

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
    <motion.section ref={ref} className="w-full py-8 lg:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-64 min-h-64 lg:h-full md:min-h-96"
            variants={slideInLeftVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src="/fleet/vessel/everglory-img-2.jpg"
              alt="Container ship services"
              fill
              className="object-contain md:object-cover rounded-none"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SectionTitle className="text-[26px] md:text-[32px] 2xl:text-[44px] max-md:max-w-lg max-md:text-center max-md:mx-auto">
              Everglory Intermodal Services complement our container
              shipping services and support you one step beyond carrying your
              cargo across the Bay of Bengal.
            </SectionTitle>
            <SectionDescription className="max-md:text-center">
              We deliver end-to-end transportation solutions that extend far
              beyond the port. Our integrated rail, truck and barge services
              ensure your cargo reaches its final destination across India and
              Bangladesh efficiently. Whether it&apos;s navigating inland
              waterways, coordinating cross-border trucking, or managing rail
              connections, we provide reliable door-to-door service tailored to
              your supply chain needs.
            </SectionDescription>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
