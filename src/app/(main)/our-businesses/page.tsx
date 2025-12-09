import React from "react";
import { BusinessPageTableOfContent } from "./_components/table-of-content";
import { BusinessHeroSection } from "./_components/hero";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Our Businesses | ${companyName}`,
    description: `Discover the full range of businesses and services offered by ${companyName}, from core container shipping to integrated logistics solutions.`,
    keywords: `${companyName} businesses, shipping services, logistics solutions, maritime businesses, cargo transportation, supply chain management`,
    openGraph: {
      title: `Our Businesses & Services | ${companyName}`,
      description: `Discover the full range of businesses and services offered by ${companyName}.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Diverse business operations of ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-businesses`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

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
