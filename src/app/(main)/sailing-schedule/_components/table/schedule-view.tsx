"use client";

import { DataTable } from "./data-table";
import { columnsRouteA, columnsRouteB, PortSchedule } from "./columns";

// Data for the first block (UDP-1)
const dataBlock1: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-1",
    port1: { eta: "27/02", etd: "28/02" }, // Chittagong
    port2: { eta: "-", etd: "-" },         // Pangaon
    port3: { eta: "03/03", etd: "04/03" }, // Kolkata
    port4: { eta: "05/03", etd: "06/03" }, // Haldia
    port5: { eta: "09/03", etd: "10/03" }, // Chittagong
  },
];

// Data for the second block (UDP-2 to UDP-5)
const dataBlock2: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-2",
    port1: { eta: "-", etd: "-" }, // Chittagong
    port2: { eta: "-", etd: "-" }, // Haldia
    port3: { eta: "-", etd: "-" }, // Pangaon
    port4: { eta: "-", etd: "-" },         // Haldia
    port5: { eta: "-", etd: "-" }, // Chittagong
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-3",
    port1: { eta: "-", etd: "-" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "-", etd: "-" },
    port5: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-4",
    port1: { eta: "-", etd: "-" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "-", etd: "-" },
    port5: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-5",
    port1: { eta: "-", etd: "-" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "-", etd: "-" },
    port5: { eta: "-", etd: "-" },
  },
];

export function SailingScheduleView() {
  return (
    <div className="w-full bg-white py-6">
      <h3 className="text-xl font-plus-jakarta-sans font-semibold mb-4">Sailing Schedule</h3>
      
      {/* Route A Table */}
      <DataTable columns={columnsRouteA} data={dataBlock1} />
      
      {/* Route B Table */}
      <div className="mt-8">
        <DataTable columns={columnsRouteB} data={dataBlock2} />
      </div>
    </div>
  );
}