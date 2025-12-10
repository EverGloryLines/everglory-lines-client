import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Other Shipping Services | ${companyName}`,
    description: `Explore our additional logistics and container services, including container storage, customs brokerage, and special cargo handling for the India-Bangladesh route.`,
    keywords: `special cargo, customs brokerage, container storage, value-added logistics, breakbulk, project cargo, ${companyName}`,
    openGraph: {
      title: `Other Shipping Services | ${companyName}`,
      description: `Explore our additional logistics, storage, and special cargo handling services.`,
      images: [
        {
        url: `${baseUrl}/everglory-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Specialized cargo handling by ${companyName}`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/our-services/other-service`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function OtherServices() {
  return (
    <div>
      <h1>Other Services</h1>
    </div>
  );
}
