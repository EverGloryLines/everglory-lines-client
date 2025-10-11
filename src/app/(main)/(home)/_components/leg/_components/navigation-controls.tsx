"use client";
import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LegId } from "@/constants/leg-slides";

interface NavigationControlsProps {
  currentLegId: LegId;
  currentLegLabel: string;
  onPrevious?: () => void;
  onNext?: () => void;
  showButtons?: boolean;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentLegId,
  currentLegLabel,
  onPrevious,
  onNext,
  showButtons = false,
}) => {
  if (showButtons && onPrevious && onNext) {
    return (
      <>
        {/* Previous Button - Left Center Edge */}
        <motion.button
          onClick={onPrevious}
          disabled={currentLegId === 1}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          whileHover={currentLegId !== 1 ? { scale: 1.1 } : {}}
          whileTap={currentLegId !== 1 ? { scale: 0.95 } : {}}
          aria-label="Previous leg"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </motion.button>

        {/* Next Button - Right Center Edge */}
        <motion.button
          onClick={onNext}
          disabled={currentLegId === 12}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          whileHover={currentLegId !== 12 ? { scale: 1.1 } : {}}
          whileTap={currentLegId !== 12 ? { scale: 0.95 } : {}}
          aria-label="Next leg"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </motion.button>
      </>
    );
  }

  return (
    <motion.div
      key={currentLegLabel}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="text-2xl font-bold text-gray-800 text-center"
    >
      {currentLegLabel}
    </motion.div>
  );
};
