import React from "react";
import { TariffOverview } from "./_components/tariff-overview";
export default function Tariffs() {
  return (
    <div className="relative overflow-hidden h-fit bg-white">
      {" "}
      {/* Radial gradients */}{" "}
      <div className="absolute top-20 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-30" />{" "}
      <div className="absolute top-20 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,#60A5FA,#3B82F6,transparent)] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-30" />{" "}
      {/* Additional subtle overlay for enhanced glow effect */}{" "}
      <div className="absolute top-20 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,rgba(255, 56, 49, 0.3),rgba(255, 65, 58,0.5),transparent)] rounded-full blur-2xl -translate-x-1/4 -translate-y-1/4 pointer-events-none" />{" "}
      <div className="absolute top-20 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle_at_center,rgba(255, 56, 49, 0.3),rgba(255, 65, 58,0.5),transparent)] rounded-full blur-2xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />{" "}
      <TariffOverview />{" "}
    </div>
  );
}
