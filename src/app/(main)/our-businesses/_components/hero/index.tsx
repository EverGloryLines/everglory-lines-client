"use client";
import React from "react";
import Image from "next/image";
import { CtaButtonVariantBlue } from "@/components/shared/buttons/cta-button-v-blue";
import { motion } from "motion/react"; // Changed from 'motion/react' to 'framer-motion'
import { ArrowUpRight } from "lucide-react";

export function BusinessHeroSection() {
  const handleScrollToLearnMore = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent the default jump behavior
    const learnMoreSection = document.getElementById("learn-more");
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({
        behavior: "smooth", // This is the magic for smooth scrolling
        block: "start", // Scrolls to the top of the element
      });
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text and Buttons */}
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <h1 className="text-[36px] md:text-[44px] lg:text-[60px] 2xl:text-[64px] font-plus-jakarta-sans font-semibold tracking-[-0.02em] bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-tight my-2">
              The best offer <br />
              <span className="">for your Business</span>
            </h1>
            <div className="flex flex-row gap-4 justify-center md:justify-start mt-10">
              <CtaButtonVariantBlue href="">
                <span className="hidden md:block">GET STARTED</span>
                <span className="block md:hidden">START</span>
              </CtaButtonVariantBlue>
              <a href="#learn-more" onClick={handleScrollToLearnMore}>
                {" "}
                {/* Add onClick handler */}
                <motion.button
                  className="group relative inline-flex items-center gap-2 px-3 md:px-6 py-2 md:py-3 overflow-hidden rounded-none border border-[#4c6faf] bg-white text-[#4c6faf] font-plus-jakarta-sans font-medium cursor-pointer"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 transition-colors duration-600 group-hover:text-white">
                    <span className="hidden md:block">LEARN MORE</span>
                    <span className="block md:hidden">LEARN</span>
                  </span>
                  <span className="relative z-10 transition-transform duration-600 group-hover:translate-x-1">
                    <ArrowUpRight
                      size={18}
                      className="text-[#4c6faf] group-hover:text-white z-10 -ml-1"
                    />
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0 bg-[#4c6faf] z-0"
                    initial={{ height: 0 }}
                    variants={{
                      hover: {
                        height: "100%",
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                    style={{ originY: 1 }}
                  />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="w-full max-w-md lg:max-w-lg rounded-none overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/business/Everglory-lines-hero.png"
                alt="Modern business building against a cloudy sky"
                width={700}
                height={500}
                priority
                className="rounded-none w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
