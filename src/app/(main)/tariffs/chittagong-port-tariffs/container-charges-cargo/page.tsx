import { containerChargesCargoData } from "@/data/tariffs/container-charges-cargo";
import { ContainerAccordion } from "./_components/container-accordion";
import { ContainerChargesHeader } from "./_components/container-charges-header";

export default function ContainerChargesCargo() {
  return (
    <main className="min-h-screen bg-[#001a3d] overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <ContainerChargesHeader />
        <ContainerAccordion sections={containerChargesCargoData} />
      </div>
    </main>
  );
}
