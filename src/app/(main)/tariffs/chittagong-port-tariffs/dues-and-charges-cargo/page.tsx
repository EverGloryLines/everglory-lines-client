import { duesAndChargesCargo } from "@/data/tariffs/dues-and-charges-cargo"
import { CargoAccordion } from "./_components/cargo-accordion"
import { DuesCargoHeader } from "./_components/dues-charges-header"

export default function DuesChargesCargo() {
  return (
    <main className="min-h-screen bg-[#001a3d] overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <DuesCargoHeader />
        <CargoAccordion sections={duesAndChargesCargo} />
      </div>
    </main>
  )
}
