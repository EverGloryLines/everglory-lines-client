import React from "react";
import { BusinessPageTableOfContent } from "./_components/table-of-content";
import { BusinessHeroSection } from "./_components/hero";

export default function Business() {
  return (
    <div className="relative min-h-screen w-full">
      <BusinessHeroSection />
      <div id="learn-more">
        <BusinessPageTableOfContent />
      </div>
    </div>
  );
}
