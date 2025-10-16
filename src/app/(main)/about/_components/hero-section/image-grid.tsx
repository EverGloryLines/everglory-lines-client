/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants, Transition } from "motion/react";
import Image from "next/image";

export const ImageGrid = () => {
  const containerVariants: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to 'any' to satisfy Easing type
        when: "beforeChildren",
        staggerChildren: 0.1,
      } as Transition, // Cast to Transition
    },
  };

  // Explicitly type imageVariants as Variants
  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any, // Cast to 'any' to satisfy Easing type
      } as Transition, // Cast to Transition
    },
  };

  return (
    <motion.div
      className="hidden lg:grid lg:w-[40%] grid-cols-2 gap-6 md:gap-8 h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First Column */}
      <div className="flex flex-col gap-6">
        <motion.div
          className="relative h-[200px] md:h-[250px] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-1.png"
            alt="shipping-liner-1"
            fill
            className="rounded-tl-[100px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </motion.div>

        <motion.div
          className="relative h-[150px] w-[150px] ml-0 lg:ml-16 overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-2.png"
            alt="shipping-liner-2"
            fill
            priority
            className="rounded-bl-[100px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <motion.div
          className="relative h-[200px] md:h-[220px] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-3.png"
            alt="shipping-liner-3"
            fill
            priority
            className="rounded-bl-[100px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-10">
        <motion.div
          className="relative h-[100px] w-[120px] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-4.png"
            alt="shipping-liner-4"
            fill
            priority
            className="rounded-tr-[60px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <motion.div
          className="relative h-[200px] md:h-[230px] w-[150px] md:w-[250px] overflow-hidden mt-4"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-5.png"
            alt="shipping-liner-5"
            fill
            priority
            className="rounded-tr-[120px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        <motion.div
          className="relative h-[160px] w-[150px] md:w-[180px] overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/about/hero/image-grid-6.png"
            alt="shipping-liner-6"
            fill
            priority
            className="rounded-br-[100px] object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
