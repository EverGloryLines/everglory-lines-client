import React from "react"
import type { Metadata } from "next"
import { InterModalHeroSection } from "./_components/intermodal-hero-section"
import { InterModalServicesSection } from "./_components/intermodal-services-section"
import {  InterModalTransportationChoices } from "./_components/intermodal-transportation-choices"
import { InterModalKeyBenefits } from "./_components/intermodal-key-benefits"

export const metadata: Metadata = {
  title: "Intermodal Transportation Services | PIL",
  description:
    "Professional intermodal transportation solutions combining rail, truck, and barge services for sustainable logistics across multiple continents.",
  keywords: "intermodal transportation, logistics, rail, truck, barge, shipping",
}

export default function InterModalPage() {
  return (
    <div className="w-full">
      <InterModalHeroSection />
      <InterModalServicesSection />
      <InterModalTransportationChoices />
      <InterModalKeyBenefits />
    </div>
  )
}
