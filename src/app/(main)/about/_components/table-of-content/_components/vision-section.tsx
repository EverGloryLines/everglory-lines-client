import React from "react";
import Image from "next/image";

export function VisionSection() {
  return (
    <>
      {/* Main Description */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        Our vision is to be the leading service provider of safe, reliable, and
        sustainable, connecting communities across the globe.
      </p>

      {/* Image and Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        {/* Left Side: Square Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/about/table-of-contents/section-2-img.png" // Your image path
            alt="Vision Eye Icon"
            width={200} // Explicit width for the image
            height={200} // Explicit height for the image (making it square)
            objectFit="contain" // Use 'contain' to ensure the entire icon is visible
            className="rounded-none" // Optional: if your image itself is not a perfect square, this rounds the image
          />
        </div>

        {/* Right Side: Bulleted Text with Highlights */}
        <div className="space-y-4">
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is empower global trade by delivering{" "}
            <span className="text-foreground font-medium">
              innovative and efficient shipping and logistics solution
            </span>
            , with strong commitment.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is empower trade by besey the honng our ctiticition and{" "}
            <span className="text-foreground font-medium">
              environmental responsibility
            </span>
            .
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is empowr the{" "}
            <span className="text-foreground font-medium">
              global trade oo bul
            </span>{" "}
            lotiong thin ohetung eranomitmen to catisfaation and enviromental
            responsibility.
          </p>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our vision is empower extractning,{" "}
            <span className="text-foreground font-medium">
              aradeloviste, and be slebrabity
            </span>{" "}
            trape future of shipping, multddobal transport and logistics
          </p>
        </div>
      </div>
    </>
  );
}
