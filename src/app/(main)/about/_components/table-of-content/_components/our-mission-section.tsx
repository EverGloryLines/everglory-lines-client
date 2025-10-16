import React from "react";
import Image from "next/image";

export function OurMissionSection() {
  return (
    <>
      {/* Image and Description Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        {/* Left Side: Square Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/about/table-of-contents/section-3-img.jpg"
            alt="Mission Logo Image"
            width={200} // Explicit width for the image
            height={200} // Explicit height for the image (making it square)
            objectFit="contain" // Use 'contain' to ensure the entire icon is visible
            className="rounded-none" // Optional: if your image itself is not a perfect square, this rounds the image
          />
        </div>

        {/* Right Side: Bulleted Text with Highlights */}
        <div className="space-y-4">
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed font-sans font-normal">
            Our mission is provide{" "}
            <span className="text-foreground font-medium">
              innovative shipping and multidodal transport
            </span>
            services that meet evolving needs of ou customers,while promoting
            safety, and{" "}
            <span className="text-foreground font-medium">
              excellence in everything
            </span>{" "}
            we do.
          </p>
        </div>
      </div>

      {/* Main Description */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        We&apos;re committed building long-term relationships with our
        customers, and partners, and communities, and to making a positive
        impact on the world around us.
      </p>
    </>
  );
}
