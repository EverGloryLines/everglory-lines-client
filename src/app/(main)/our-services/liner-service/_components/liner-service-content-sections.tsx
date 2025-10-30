"use client";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

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
        className="py-20 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              variants={textVariants}
            >
              Guess where we don&quot;t fly...
            </motion.h2>

            <motion.p
              className="text-lg text-slate-700 mb-4 leading-relaxed"
              variants={textVariants}
            >
              Speed is an obvious advantage of Liner Service, along with reach
              and flexibility. But do you know how many countries Everglory
              serves, and whether key destinations are part of our network?
              Watch our shipping routes challenge in Everglory Bingo, part of
              the new series &quot;Just Another Day in Logistics.&quot;
            </motion.p>

            <motion.p
              className="text-lg text-slate-700 leading-relaxed"
              variants={textVariants}
            >
              If this is your first episode, don&quot;t worry. You&quot;ll have
              no trouble connecting the dots. After all, you&quot;re in
              logistics, right?
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg"
            variants={imageVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <Image
              src="/services/liner-service/pangaon-port-2.jpg"
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
        className="py-20 md:py-32 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
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
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              variants={textVariants}
            >
              Time is important. At all times
            </motion.h2>

            <motion.p
              className="text-lg text-slate-700 leading-relaxed"
              variants={textVariants}
            >
              With Everglory Liner Service you can act fast to sudden changes or
              opportunities while maintaining control of your supply chain. We
              operate on the India-Bangladesh route with reliable scheduling. We
              are here to help you go all the way.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
