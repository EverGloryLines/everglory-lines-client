"use client";

import { TariffHeader } from "./tariff-header";
import { TariffGrid } from "./tariff-grid";

export function TariffOverview() {
  return (
    <section className="w-full py-8 px-4 md:px-8 md:py-12">
      <div className="container mx-auto">
        <TariffHeader />
        <TariffGrid />
      </div>
    </section>
  );
}
