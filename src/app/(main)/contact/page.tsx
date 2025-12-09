import React from "react";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const baseUrl = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(baseUrl),
    title: `Contact Us | ${companyName}`,
    description: `Get in touch with ${companyName}. Contact our teams in India or Bangladesh for inquiries about container shipping, rates, or services.`,
    keywords: `contact ${companyName}, contact shipping company, shipping support, India office, Bangladesh office, get a quote`,
    openGraph: {
      title: `Contact Us | ${companyName}`,
      description: `Contact our teams in India or Bangladesh for inquiries about container shipping.`,
      images: [
        {
          url: "/everglory-og-image.png",
          width: 1200,
          height: 630,
          alt: `Contact ${companyName} for shipping services`,
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function Contact() {
  return (
    <div>
      <h1>Contact US</h1>
    </div>
  );
}
