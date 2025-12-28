import React from "react";
import Image from "next/image";

export function BusinessObjectiveSection() {
  return (
    <>
      {/* Square Image above description (placeholder) */}
      <div className="mb-6 flex justify-center max-h-[350px]">
        <Image
          src="/business/business-objective.jpg"
          alt="Abstract representation of history"
          width={650} // Set your desired width
          height={350} // Set your desired height to make it square
          className="rounded-none object-cover"
        />
      </div>

      {/* Description Text */}
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        <strong className="text-foreground font-plus-jakarta-sans">
          Everglory Container Lines
        </strong>{" "}
        is operating as an{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          International Shipping and Multimodal{" "}
        </strong>
        Transport Service provider mainly to meet the Foreign Trade linked to
        transportation requirement of{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          SAARC Community
        </strong>
        , aiming to contribute in the economic development of the region, and in
        the Sub-Continent.
      </p>
      <p className="mb-8 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        We are committed to provide{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          quality services
        </strong>{" "}
        at an{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          affordable
        </strong>{" "}
        rate to our customers. As an{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          international shipping and multimodal
        </strong>{" "}
        transport service provider, we are to provide quality services to
        Bangladesh and other{" "}
        <strong className="text-foreground font-plus-jakarta-sans">
          SAARC
        </strong>{" "}
        countries in a manner that none of the foreign shipping lines are in a
        position to do and at the same time we are to provide quality shipping
        services not only to our home customers but also to the customer across
        the oceans and around the World.
      </p>
      
    </>
  );
}
