import { OfficesHeroSection } from "./_components/offices-hero/offices-hero-section";
import { OfficesMapSection } from "./_components/agent-map/office-map-section";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Lines";
  const baseUrl = "https://everglorylines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Our Offices | ${companyName}`,
    description: `Find our office locations in India and Bangladesh. Contact our local teams for container shipping, feeder, and multimodal service inquiries.`,
    keywords: `${companyName} offices, office locations, contact shipping office, India shipping office, Bangladesh shipping office`,
    openGraph: {
      title: `Our Offices | ${companyName}`,
      description: `Find our office locations in India and Bangladesh.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Map of ${companyName} office locations`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-offices`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function Offices() {
  return (
    <main>
      <OfficesHeroSection />
      <section id="offices-section" className="py-20 overflow-hidden">
        <OfficesMapSection />
      </section>
    </main>
  );
}
