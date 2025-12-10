import React from "react";
import type { Metadata } from "next";
import { LinerServiceBenefitsGrid } from "./_components/liner-service-benefits-grid";
import { LinerServiceContentSections } from "./_components/liner-service-content-sections";
import { LinerServiceFAQSection } from "./_components/liner-service-faq-section";
import { LinerServiceHeroSection } from "./_components/liner-service-hero-section";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Liner Service | ${companyName}`,
    description: `Reliable, scheduled liner services for container shipping between major ports in India and Bangladesh. Discover our routes and schedules.`,
    keywords: `liner service, container liner service, India-Bangladesh liner shipping, scheduled shipping, port-to-port container`,
    openGraph: {
      title: `Liner Service | ${companyName}`,
      description: `Reliable, scheduled liner services for container shipping between India and Bangladesh.`,
      images: [
        {
        url: `${baseUrl}/everglory-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${companyName} container ship providing liner services`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-services/liner-service`,
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
