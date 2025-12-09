import React from "react";
import { TariffOverview } from "./_components/tariff-overview";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Chittagong Port Tariffs & Charges | ${companyName}`,
    description: `Access detailed tariff information and charges for container shipping services provided by ${companyName} on the India-Bangladesh route and beyond.`,
    keywords: `shipping tariffs, freight charges, container charges, surcharges, India-Bangladesh tariffs, ${companyName} rates`,
    openGraph: {
      title: `Tariffs & Charges | ${companyName}`,
      description: `Access detailed tariff information and charges for container shipping services.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Tariff and charges information from ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/tariffs/chittagong-port-tariffs`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}
export default function ChittagongPortTariffs() {
  return (
    <div className="relative overflow-hidden h-fit bg-white">
      {" "}
      {/* Radial gradients */}{" "}
      <div className="absolute top-20 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-30" />{" "}
      <div className="absolute top-20 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-30" />{" "}
      {/* Additional subtle overlay for enhanced glow effect */}{" "}
      <div className="absolute top-20 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,rgba(255, 56, 49, 0.3),rgba(255, 65, 58,0.5),transparent)] rounded-full blur-2xl -translate-x-1/4 -translate-y-1/4 pointer-events-none" />{" "}
      <div className="absolute top-20 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,rgba(255, 56, 49, 0.3),rgba(255, 65, 58,0.5),transparent)] rounded-full blur-2xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />{" "}
      <TariffOverview />{" "}
    </div>
  );
}
