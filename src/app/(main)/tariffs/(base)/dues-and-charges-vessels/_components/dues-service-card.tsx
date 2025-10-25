"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { DuesServiceCardType } from "@/data/tariffs/dues-and-charges-vessels";

export const cardVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const DuesServiceCard: React.FC<DuesServiceCardType> = ({
  title,
  description,
  keyFigures,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-gradient-to-br from-[#0a2540] to-[#164e7e] rounded-none p-6 transition-shadow duration-300"
    >
      <h3 className="text-xl font-plus-jakarta-sans font-medium text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-200 text-base font-sans font-normal leading-relaxed mb-4">
        {description}
      </p>

      {keyFigures.length > 0 && (
        <div className="mt-4">
          <h4 className="text-base text-white font-medium mb-3">Key figures</h4>
          <ul className="space-y-2">
            {keyFigures.map((figure, index) => (
              <li
                key={index}
                className="flex justify-between items-start text-sm"
              >
                <span className="text-gray-200 text-sm md:text-base font-sans font-normal flex-1 pr-2">
                  <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  {figure.label}
                </span>
                {figure.value && (
                  <span className="text-white font-plus-jakarta-sans font-semibold whitespace-nowrap">
                    {figure.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
