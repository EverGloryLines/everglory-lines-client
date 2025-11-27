"use client";

import { LegId, LEGS } from "@/constants/leg-slides";
import React, { useState, useCallback } from "react";
import { LegButtons } from "./_components/leg-buttons";
import { NavigationControls } from "./_components/navigation-controls";
import { LegMap } from "./_components/leg-map";

export const LegSection: React.FC = () => {
  const [activeLegId, setActiveLegId] = useState<LegId>(1);

  const activeLeg = LEGS.find((leg) => leg.id === activeLegId)!;

  const handleLegChange = useCallback((legId: LegId) => {
    setActiveLegId(legId);
  }, []);

  const handlePrevious = useCallback(() => {
    if (activeLegId > 1) {
      setActiveLegId((activeLegId - 1) as LegId);
    }
  }, [activeLegId]);

  const handleNext = useCallback(() => {
    if (activeLegId < 12) {
      setActiveLegId((activeLegId + 1) as LegId);
    }
  }, [activeLegId]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    },
    [handlePrevious, handleNext]
  );

  return (
    <section
      className="h-fit lg:min-h-screen bg-[#C8E6E1] py-8 md:py-16 2xl:py-24 px-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Leg navigation section"
    >
      <div className="container mx-auto">
        {/* Desktop: Leg Buttons */}
        <div className="hidden lg:block">
          <LegButtons activeLegId={activeLegId} onLegChange={handleLegChange} />
        </div>

        {/* Mobile/Tablet: Leg Label */}
        <div className="lg:hidden mb-4">
          <NavigationControls
            currentLegId={activeLegId}
            currentLegLabel={activeLeg.label}
          />
        </div>

        {/* Map Display with Mobile Navigation */}
        <div className="relative">
          <LegMap
            legId={activeLegId}
            mapImage={activeLeg.mapImage}
            label={activeLeg.label}
          />

          {/* Mobile Navigation Buttons - Positioned at center edges */}
          <div className="lg:hidden">
            <NavigationControls
              currentLegId={activeLegId}
              currentLegLabel={activeLeg.label}
              onPrevious={handlePrevious}
              onNext={handleNext}
              showButtons={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
