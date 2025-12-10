import React from "react";
import type { Metadata } from "next";
import { MultiModalHeroSection } from "./_components/multimodal-hero-section";
import { MultiModalServicesSection } from "./_components/multimodal-services-section";
import { MultiModalTransportationChoices } from "./_components/multimodal-transportation-choices";
import { MultiModalKeyBenefits } from "./_components/multimodal-key-benefits";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Multimodal Service | ${companyName}`,
    description: `Simplified logistics with our multimodal transport services. One contract covers your container's complete door-to-door journey via multiple transport modes.`,
    keywords: `multimodal service, multimodal transport, door-to-door shipping, combined transport, India-Bangladesh logistics`,
    openGraph: {
      title: `Multimodal Service | ${companyName}`,
      description: `Simplified logistics with our multimodal transport services for your door-to-door journey.`,
      images: [
        {
        url: `${baseUrl}/everglory-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Multimodal logistics solution from ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-services/multimodal-transport`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

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
