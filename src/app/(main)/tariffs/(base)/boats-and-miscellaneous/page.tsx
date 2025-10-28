import { boatsMiscData } from "@/data/tariffs/boats-and-miscellaneous";
import { BoatsHeader } from "./_components/boat-charges-header";
import { BoatAccordion } from "./_components/boat-accordion";

export default function BoatsAndMiscellaneous() {
  return (
    <main className="min-h-screen bg-[#001a3d] overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <BoatsHeader />
        <BoatAccordion sections={boatsMiscData} />
      </div>
    </main>
  );
}
