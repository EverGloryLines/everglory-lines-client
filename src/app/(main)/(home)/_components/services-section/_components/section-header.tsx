"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";

import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full text-center max-w-3xl mx-auto mb-16">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
       <SectionTitle>{title}</SectionTitle>
      </motion.div>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <SectionDescription>{description}</SectionDescription>
      </motion.div>
    </div>
  );
}
