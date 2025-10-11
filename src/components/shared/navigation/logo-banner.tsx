"use client";

import Image from "next/image";

const logos = [
  {
    src: "/logo/everglory-lines-logo.jpg",
    alt: "Everglory Lines Logo",
    width: 280,
    height: 80,
  },
  {
    src: "/logo/BIWTC-Logo.jpg",
    alt: "BIWTC Logo",
    width: 280,
    height: 80,
  },
  {
    src: "/logo/INBD-7-Logo.jpeg",
    alt: "In BD Alliance Logo",
    width: 280,
    height: 80,
  },
  {
    src: "/logo/uttaran-express.jpg",
    alt: "Shipping Company Logo",
    width: 280,
    height: 80,
  },
  {
    src: "/logo/four-ships.jpg",
    alt: "Logistics Company Logo",
    width: 280,
    height: 80,
  },
];

export function LogoBanner() {
  return (
    <div className="w-full bg-white py-4 max-sm:px-2 border-b border-gray-200">
      <div className="section-layout">
        <div className="flex items-center justify-between gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 ${
                index >= 2 ? "hidden xl:block" : ""
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-16 lg:h-24 w-auto object-contain"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
