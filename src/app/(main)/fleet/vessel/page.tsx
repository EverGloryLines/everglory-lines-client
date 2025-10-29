import React from "react";
import { VesselPageHeroSection } from "./_components/hero";
import { VesselSection } from "./_components/vessel-tabs";

export default function VesselPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <VesselPageHeroSection />
      <div id="vessel-specification">
        <VesselSection />
      </div>
    </div>
  );
}
