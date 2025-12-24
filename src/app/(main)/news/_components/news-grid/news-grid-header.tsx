"use client";

import { motion } from "motion/react";

interface NewsGridHeaderProps {
  title: string;
  description: string;
}

export function NewsGridHeader({ title, description }: NewsGridHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block"
      >
        <h2 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
          {title}
        </h2>
        <div className="mx-auto h-1 w-32 bg-[#D4C194]" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        {description}
      </motion.p>
    </div>
  );
}
