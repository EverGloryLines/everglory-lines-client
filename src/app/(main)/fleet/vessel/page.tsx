import React from "react";
import { VesselPageHeroSection } from "./_components/hero";
import { VesselSection } from "./_components/vessel-tabs";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Lines";
  const baseUrl = "https://everglorylines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Our Vessels | ${companyName}`,
    description: `Explore the modern fleet of ${companyName}, ensuring safe and efficient container transport on the India-Bangladesh route and beyond the oceans.`,
    keywords: `${companyName} vessels, shipping fleet, container ships, maritime fleet, India-Bangladesh vessels, modern shipping fleet`,
    openGraph: {
      title: `Our Vessels | ${companyName}`,
      description: `Explore the modern fleet of ${companyName}, ensuring safe and efficient container transport.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Vessel from ${companyName} at sea`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/vessel`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

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
