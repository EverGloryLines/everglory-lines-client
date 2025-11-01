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
      <section
        ref={ref1}
        className="py-8 md:py-20 px-4 container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <motion.div className="mb-6" variants={textVariants}>
              <SectionTitle>Guess where we don&quot;t fly...</SectionTitle>
            </motion.div>

            <motion.div
              className="mb-4 leading-relaxed"
              variants={textVariants}
            >
              <SectionDescription>
                Speed is an obvious advantage of Liner Service, along with reach
                and flexibility. But do you know how many countries Everglory
                serves, and whether key destinations are part of our network?
                Watch our shipping routes challenge in Everglory Bingo, part of
                the new series &quot;Just Another Day in Logistics.&quot;
              </SectionDescription>
            </motion.div>

            <motion.div className="leading-relaxed" variants={textVariants}>
              <SectionDescription>
                If this is your first episode, don&quot;t worry. You&quot;ll
                have no trouble connecting the dots. After all, you&quot;re in
                logistics, right?
              </SectionDescription>
            </motion.div>
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
      <section
        ref={ref2}
        className="py-8 md:py-20 px-4 container mx-auto"
      >
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
            <motion.div className="mb-6" variants={textVariants}>
              <SectionTitle>Time is important. At all times</SectionTitle>
            </motion.div>

            <motion.div className="leading-relaxed" variants={textVariants}>
              <SectionDescription>
                With Everglory Liner Service you can act fast to sudden changes
                or opportunities while maintaining control of your supply chain.
                We operate on the India-Bangladesh route with reliable
                scheduling. We are here to help you go all the way.
              </SectionDescription>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
