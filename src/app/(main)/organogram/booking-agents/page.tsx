import { BookingAgentsHeroSection } from "./_components/booking-agent-hero/booking-agents-hero-section";
import { AgentMapSection } from "./_components/booking-agent-map/agent-map-section";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Booking Agent Network | ${companyName}`,
    description: `Explore our extensive booking agent network supporting our shipping, liner, and feeder services across the India-Bangladesh trade lane.`,
    keywords: `shipping agency network, ${companyName} agents, port agents India, port agents Bangladesh, liner agency`,
    openGraph: {
      title: `Agency Network | ${companyName}`,
      description: `Explore our extensive agency network for the India-Bangladesh trade lane.`,
      images: [
        {
        url: `${baseUrl}/everglory-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${companyName}'s shipping agency network`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/organogram/booking-agents`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function BookingAgents() {
  return (
    <main>
      <BookingAgentsHeroSection />
      {/* Placeholder for offices section below */}
      <section id="booking-agent-map" className="py-20 overflow-hidden">
        <AgentMapSection />
      </section>
    </main>
  );
}
