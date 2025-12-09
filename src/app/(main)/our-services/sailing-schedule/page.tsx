import { Metadata } from "next";
import { SchedulesPage } from "./_components";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Shipping Schedules | ${companyName}`,
    description: `View our vessel schedules, port calls, and transit times for our liner and feeder services between India and Bangladesh. Plan your shipment with confidence.`,
    keywords: `shipping schedules, vessel schedule, port rotation, transit times, India-Bangladesh shipping schedule, ETD, ETA`,
    openGraph: {
      title: `Shipping Schedules | ${companyName}`,
      description: `View our vessel schedules, port calls, and transit times for India-Bangladesh services.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Vessel shipping schedules for ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-services/sailing-schedule`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function SchedulesOfCharges() {
  return <SchedulesPage />;
}
