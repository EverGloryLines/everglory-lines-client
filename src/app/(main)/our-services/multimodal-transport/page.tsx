import React from "react";
import type { Metadata } from "next";
import { MultiModalHeroSection } from "./_components/multimodal-hero-section";
import { MultiModalServicesSection } from "./_components/multimodal-services-section";
import { MultiModalTransportationChoices } from "./_components/multimodal-transportation-choices";
import { MultiModalKeyBenefits } from "./_components/multimodal-key-benefits";

export const metadata: Metadata = {
  title: "Intermodal Transportation Services | PIL",
  description:
    "Professional intermodal transportation solutions combining rail, truck, and barge services for sustainable logistics across multiple continents.",
  keywords:
    "intermodal transportation, logistics, rail, truck, barge, shipping",
};

export default function MultiModalPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <MultiModalHeroSection />
      <MultiModalServicesSection />
      <MultiModalTransportationChoices />
      <MultiModalKeyBenefits />
    </div>
  );
}
