import React from "react";
import type { Metadata } from "next";
import { LinerServiceBenefitsGrid } from "./_components/liner-service-benefits-grid";
import { LinerServiceContentSections } from "./_components/liner-service-content-sections";
import { LinerServiceFAQSection } from "./_components/liner-service-faq-section";
import { LinerServiceHeroSection } from "./_components/liner-service-hero-section";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Lines";
  const baseUrl = "https://everglorylines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Feeder Service | ${companyName}`,
    description: `Efficient feeder services connecting gateway ports with smaller terminals in India and Bangladesh. We are a key link in the container logistics chain.`,
    keywords: `feeder service, container feeder vessel, India-Bangladesh feeder, port feeder service, transshipment services`,
    openGraph: {
      title: `Feeder Service | ${companyName}`,
      description: `Efficient feeder services connecting gateway ports with smaller terminals in India and Bangladesh.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Feeder vessel from ${companyName} in port`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/services/feeder-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function LinerServicePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <LinerServiceHeroSection />
      <LinerServiceContentSections />
      <LinerServiceBenefitsGrid />
      <LinerServiceFAQSection />
    </main>
  );
}
