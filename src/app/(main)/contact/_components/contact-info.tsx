"use client";

import { motion, Variants } from "motion/react";
import { Phone, Printer, MapPin, ChevronRight } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1727-423016, +880 1334-938912",
    href: "tel:+880 1334-938912",
  },
  {
    icon: Printer,
    label: "Fax",
    value: "+880 1758-398875 , +880 1334-938925",
    href: "tel:+880 1334-938925",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Suite 7A, 22 Kemal Ataturk Avenue, Banani, Dhaka-1212",
    multiline: true,
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // easeOut bezier curve
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // easeOut bezier curve
    },
  },
};

export function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-2 py-8 md:p-12 mt-36 md:mt-64"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-sans font-medium mb-4 text-[#24479B]">
          Contact Us.
        </h2>
        <div className="flex gap-1 mb-6">
          {[...Array(9)].map((_, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: i < 5 ? 1 : 0.3, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-[#24479B] text-xl font-bold"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.span>
          ))}
        </div>
      </motion.div>

      <div className="space-y-6 md:space-y-8">
        {contactDetails.map((detail, index) => (
          <motion.div key={index} variants={itemVariants} className="relative">
            <div className="flex gap-4">
              <div className="relative">
                <detail.icon className="w-6 h-6 text-[#1e3a8a]" />
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#ff6b35]" />
              </div>
              <div className="flex-1">
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-base md:text-lg font-medium text-[#24479B] hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm md:text-base font-medium text-[#24479B] leading-relaxed">
                    {detail.value}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
