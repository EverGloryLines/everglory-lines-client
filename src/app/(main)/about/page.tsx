import React from "react";
import HeroSection from "./_components/hero-section";
import { AboutPageTableOfContent } from "./_components/table-of-content";

export default function About() {
  return (
    <div className="relative min-h-screen w-full">
      <HeroSection />
      <AboutPageTableOfContent />
    </div>
  );
}
