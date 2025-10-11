"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServicesCarouselItem } from "../types";

interface ServiceCardProps {
  service: ServicesCarouselItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-[350px] md:h-[450px] 2xl:h-[500px] overflow-hidden rounded-none shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <motion.div
          className="absolute inset-0 bg-white origin-left"
          initial={{ scaleX: 0.7 }}
          animate={{ scaleX: isHovered ? 0 : 0.7 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-0 bg-black/40 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="relative h-full flex flex-col justify-between p-8 md:p-10 z-10">
          <div className="space-y-1 md:space-y-3">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* <service.icon className="w-12 h-12 text-teal-600" /> */}
              <Image 
               src={service.iconSrc as string}
               alt={service.title}
               width={100}
               height={100}
               className="w-12 h-12 text-teal-600"
              />
            </motion.div>

            <motion.div
              className="text-2xl 2xl:text-3xl mt-4 lg:mt-12 font-semibold text-light-green"
              animate={{ color: isHovered ? "#ffffff" : "#0d9488" }}
              transition={{ duration: 0.3 }}
            >
              {service.serialNumber}
            </motion.div>

            <div>
              <motion.h3
                className="max-w-[100px] text-2xl md:text-3xl font-plus-jakarta-sans font-bold mb-4"
                animate={{ color: isHovered ? "#ffffff" : "#1f2937" }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="max-w-[220px] text-base font-sans font-medium leading-normal"
                animate={{ color: isHovered ? "#e5e7eb" : "#6b7280" }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>

          <Link href={service.link} className="inline-block">
            <motion.button
              className="w-10 md:w-14 h-10 md:h-14 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
              animate={{
                backgroundColor: isHovered ? "#ffffff" : "#f3f4f6",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight
                className={`w-6 h-6 transition-colors ${
                  isHovered ? "text-teal-600" : "text-gray-900"
                }`}
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}