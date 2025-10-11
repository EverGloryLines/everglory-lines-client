"use client";
import React from "react";
import { motion } from "motion/react";
import { LegId, LEGS } from "@/constants/leg-slides";

interface LegButtonsProps {
  activeLegId: LegId;
  onLegChange: (legId: LegId) => void;
}

export const LegButtons: React.FC<LegButtonsProps> = ({
  activeLegId,
  onLegChange,
}) => {
  return (
    <div className="flex justify-center gap-2 mb-6 flex-wrap">
      {LEGS.map((leg) => (
        <motion.button
          key={leg.id}
          onClick={() => onLegChange(leg.id as LegId)}
          className={`px-6 py-3 rounded font-semibold text-sm transition-colors duration-200 ${
            activeLegId === leg.id
              ? "bg-emerald-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Switch to ${leg.label}`}
          aria-pressed={activeLegId === leg.id}
        >
          {leg.label}
        </motion.button>
      ))}
    </div>
  );
};
