"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Country } from "@/data/agent-data";

interface MapSelectorProps {
  countries: Country[];
  selectedCountry: Country | null;
  onCountrySelect: (country: Country) => void;
}

export function MapSelector({
  countries,
  selectedCountry,
  onCountrySelect,
}: MapSelectorProps) {
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  const countryLabels: Record<string, string> = {
    IN: "India",
    BD: "Bangladesh",
    NP: "Nepal",
    SG: "Singapore",
    LK: "Sri Lanka",
    AE: "UAE",
    MY: "Malaysia",
    VN: "Vietnam",
  };

  return (
    <div className="w-full bg-[#485FA3] py-12 px-4 overflow-x-scroll">
      <div className="flex flex-nowrap gap-4 lg:gap-16 container mx-auto">
        {countries.map((country) => (
          <motion.button
            key={country.code}
            onClick={() => onCountrySelect(country)}
            onMouseEnter={() => setHoveredCode(country.code)}
            onMouseLeave={() => setHoveredCode(null)}
            className="relative flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`relative min-w-[300px] min-h-[350px] flex items-center justify-center transition-all duration-300 overflow-hidden ${
                selectedCountry?.code === country.code
                  ? "opacity-100 scale-105"
                  : ""
              } ${hoveredCode === country.code ? "opacity-100" : "opacity-85"}`}
            >
              <Image
                src={country.imgSrc || "/placeholder-map.jpg"}
                alt={`${countryLabels[country.code]} map`}
                width={300}
                height={350}
                priority
                className="object-cover"
              />
            </motion.div>
            <span className="mt-2 text-xl font-plus-jakarta-sans font-medium text-white text-center text-pretty">
              {countryLabels[country.code]}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
