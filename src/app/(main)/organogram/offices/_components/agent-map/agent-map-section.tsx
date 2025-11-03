"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AgentCardsGrid } from "./agent-cards-grid";
import { agentData, Country } from "@/data/agent-data";
import { MapSelector } from "./map-selector";

export function AgentMapSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    // Smooth scroll to agents grid
    setTimeout(() => {
      cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <section className="w-full">
      {/* Map Selector Section */}
      <MapSelector
        countries={agentData}
        selectedCountry={selectedCountry}
        onCountrySelect={handleCountrySelect}
      />

      {/* Agent Cards Section */}
      <div className="px-4 py-8 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="mx-auto container">
          <div ref={cardsRef} className="pt-4">
            <AnimatePresence mode="wait">
              {selectedCountry ? (
                <AgentCardsGrid
                  key={selectedCountry.code}
                  agents={selectedCountry.agents}
                  country={selectedCountry.name}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <p className="text-xl font-plus-jakarta-sans font-medium text-slate-600">
                    Select a country to view agent information
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
