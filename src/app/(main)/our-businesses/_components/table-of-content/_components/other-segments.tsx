import React from "react";
import Image from "next/image";

// The list of "Other Segments" from your second uploaded image
const otherSegmentsList = [
  "Shipping Agency",
  "Ship Handling Agency",
  "Container Liner Agency",
  "Ship's Husbanding Agency",
  "Port and Terminal Handling Agency",
  "Forwarding Services - Air and Sea",
  "Custom House Brokers - CHA/C&F Agents",
  "Overland Transport (Inland Haulage/Road Transport)",
  "Warehousing, Depot, CFS, and Terminals Services",
];

export function OtherSegmentsSection() {
  return (
    <>
      {/* Main Description */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        In support of the main business segments, the Group is also involved in
        a comprehensive array of supplementary services. These specialized
        segments allow us to offer end-to-end logistics solutions, ensuring we
        cover every critical stage of the supply chain with expertise and
        precision.
      </p>

      {/* Image and List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
        {/* Left Side: Image (The 'Other Segments' map/diagram) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/business/other-segments.jpg"
            alt="Global Logistics Map Diagram"
            width={200} // Explicit width
            height={200} // Explicit height
            objectFit="contain"
            className="rounded-none"
          />
        </div>

        {/* Right Side: Segment List (Redesigned from Vision's bulleted paragraphs) */}
        <div>
          <h4 className="text-xl font-semibold text-foreground mb-4 border-b pb-2">
            Specialized Agency & Support Services
          </h4>

          {/* This grid divides the 9 items into 3 columns for a cleaner layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {otherSegmentsList.map((segment, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-2 mt-1">
                  {/* Small circle/dot icon for the list item */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <p className="text-base text-muted-foreground leading-relaxed font-sans font-normal">
                  {/* Highlights key agency services */}
                  {segment.includes("Agency") ? (
                    <span className="text-foreground font-medium">
                      {segment}
                    </span>
                  ) : (
                    segment
                  )}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal border-t pt-4">
            The Group has grown from a humble beginning to a leading player in
            the global shipping industry, maintaining a steadfast commitment to
            our core values of{" "}
            <span className="text-foreground font-medium">
              consistency, integrity, and customer focus
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}
