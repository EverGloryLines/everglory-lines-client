import React from "react";
import { GeneralServicesAccordion } from "./_components/general-services-accordion";
import { GeneralServicesHeader } from "./_components/general-services-header";
import { generalServicesData } from "@/data/tariffs/general-services";

export default function GeneralServicesPage() {
  return (
    <main className="min-h-screen bg-[#001a3d] overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <GeneralServicesHeader />
        <GeneralServicesAccordion sections={generalServicesData} />
      </div>
    </main>
  );
}
