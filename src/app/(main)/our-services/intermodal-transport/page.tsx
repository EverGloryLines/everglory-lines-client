import React from "react";
import type { Metadata } from "next";
import { InterModalHeroSection } from "./_components/intermodal-hero-section";
import { InterModalServicesSection } from "./_components/intermodal-services-section";
import { InterModalTransportationChoices } from "./_components/intermodal-transportation-choices";
import { InterModalKeyBenefits } from "./_components/intermodal-key-benefits";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Intermodal Service | ${companyName}`,
    description: `Seamless intermodal transportation solutions. We manage your container's entire journey via ship, rail, and truck across India and Bangladesh.`,
    keywords: `intermodal service, intermodal transport, ship rail truck logistics, container logistics India, container logistics Bangladesh`,
    openGraph: {
      title: `Intermodal Service | ${companyName}`,
      description: `Seamless intermodal transportation solutions via ship, rail, and truck across India and Bangladesh.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Intermodal transport by ${companyName} combining ship, rail, and truck`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-services/intermodal-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}
export default function InterModalPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <InterModalHeroSection />
      <InterModalServicesSection />
      <InterModalTransportationChoices />
      <InterModalKeyBenefits />
    </div>
  );
}
