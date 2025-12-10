import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/shared/provider/lenis-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

const microgrammaBold = localFont({
  src: "../fonts/microgramma-bold.otf",
  variable: "--font-microgramma-sans",
});

const microgrammaMedium = localFont({
  src: "../fonts/microgramma-medium.otf",
  variable: "--font-microgramma-medium",
});

const orbitronExtrabold = localFont({
  src: "../fonts/orbitron-black.otf",
  variable: "--font-orbitron-extrabold",
});

const orbitronBold = localFont({
  src: "../fonts/orbitron-bold.otf",
  variable: "--font-orbitron-bold",
});

const orbitronLight = localFont({
  src: "../fonts/orbitron-light.otf",
  variable: "--font-orbitron-light",
});

const orbitronMedium = localFont({
  src: "../fonts/orbitron-medium.otf",
  variable: "--font-orbitron-medium",
});

export function generateMetadata(): Metadata {
  const companyName = "Everglory Container Lines";
  const domain = "https://everglorycontainerlines.com";

  return {
    metadataBase: new URL(domain),
    title: `${companyName} | India-Bangladesh Container Shipping & Liner Services`,
    description: `Leading container transport & shipping company specializing in the India-Bangladesh route. We offer reliable liner, feeder, multimodal, and intermodal services with our own fleet.`,
    keywords: `India-Bangladesh shipping, container transport, shipping company, feeder service, liner service, multimodal transport, intermodal services, ${companyName}, shipping between India and Bangladesh`,
    icons: {
      icon: "/everglory-favicon.ico",
    },
    openGraph: {
      title: `${companyName} | India-Bangladesh Container Shipping & Liner Services`,
      description: `Leading container transport & shipping company specializing in the India-Bangladesh route.`,
      url: domain,
      siteName: companyName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${domain}/everglory-opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Everglory Container Lines Official Preview",
        },
      ],
    },
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: domain,
    },
    authors: [{ name: companyName }],
    publisher: companyName,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        ${plusJakartaSans.variable}
        ${dmSans.variable}
        ${montserratSans.variable} 
        ${microgrammaBold.variable} 
        ${microgrammaMedium.variable}
        ${orbitronExtrabold.variable} 
        ${orbitronBold.variable} 
        ${orbitronLight.variable} 
        ${orbitronMedium.variable} 
        font-sans antialiased
        `}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
