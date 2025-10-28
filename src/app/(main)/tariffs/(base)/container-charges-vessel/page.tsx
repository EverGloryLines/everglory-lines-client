import { containerChargesData } from "@/data/tariffs/container-charges-vessel";
import { ContainerAccordion } from "./_components/container-accordion";
import { ContainerChargesHeader } from "./_components/container-charges-header";

export default function ContainerChargesVessel() {
  return (
    <main className="min-h-screen bg-[#001a3d] overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <ContainerChargesHeader />
        <ContainerAccordion sections={containerChargesData} />
      </div>
    </main>
  );
}
