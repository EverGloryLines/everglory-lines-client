"use client";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export function LinerServiceContentSections() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

  const textVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      {/* Section 1: Text Left, Image Right */}
      <section ref={ref1} className="py-8 md:py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <motion.div className="mb-6" variants={textVariants}>
              <SectionTitle>OVER THE OCEANS, ALL DESTINATIONS</SectionTitle>
            </motion.div>

            <motion.div
              className="mb-4 leading-relaxed"
              variants={textVariants}
            >
              <SectionDescription>
                Connecting From Dhaka Over Mongla Via Colombo To Red Sea, East
                Med, North Africa, West Med, Black Sea, Balkan, North Europe,
                Scandinavia, Baltic And West African Ports. And Inbound From Far
                East, Southeast Asia Via Singa-
              </SectionDescription>
            </motion.div>

            {/* <motion.div className="leading-relaxed" variants={textVariants}>
              <SectionDescription>
                
              </SectionDescription>
            </motion.div> */}
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative rounded-none overflow-hidden shadow-lg"
            variants={imageVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <Image
              src="/services/liner-service/uddippon-express.jpeg"
              alt="Everglory Bingo Video"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Image Left, Text Right */}
      <section ref={ref2} className="py-8 md:py-20 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative rounded-none overflow-hidden shadow-lg order-2 md:order-1"
            variants={imageVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <Image
              src="/services/liner-service/pangaon-port-icd.jpg"
              alt="Time is Important Video"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-1 md:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <motion.div className="mb-4" variants={textVariants}>
              <SectionTitle>TRANSIT TIME GUARANTEED</SectionTitle>
            </motion.div>

            <motion.div className="leading-relaxed mb-2" variants={textVariants}>
              <SectionDescription>
                Everglory Container Lines guarantees super-fast transit times and
                hassle-free delivery to any point in Dhaka — whether
                Port-to-Port, Point-to-Point, Door-to-Door, or Shelf-to-Shelf.
              </SectionDescription>
            </motion.div>
            <motion.div className="leading-relaxed mb-2" variants={textVariants}>
              <SectionDescription>
                We are fully committed to delivering customer-oriented, reliable
                shipping services from Indian ICDs and Ports to Pangaon,
                Kamlapur ICD, Mongla, and Chittagong.
              </SectionDescription>
            </motion.div>
            <motion.div className="leading-relaxed mb-2" variants={textVariants}>
              <SectionDescription>
                With Everglory Container Lines, your cargo moves from any origin in India
                to any destination in Bangladesh within 5-7 days — ensuring
                speed, reliability, and complete customer satisfaction through
                tailored logistics solutions designed to meet your exact needs.
              </SectionDescription>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
