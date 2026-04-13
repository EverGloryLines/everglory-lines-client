"use client";

import { DataTable } from "./data-table";
import { columnsRouteA, columnsRouteB, PortSchedule } from "./columns";

// Data for the first block (UDP-1)
const dataBlock1: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-1",
    port1: { eta: "01/03", etd: "02/03" }, // Chittagong
    port2: { eta: "-", etd: "-" },         // Pangaon
    port3: { eta: "05/03", etd: "06/03" }, // Kolkata
    port4: { eta: "07/03", etd: "08/03" }, // Haldia
    port5: { eta: "10/03", etd: "11/03" }, // Chittagong
  },
];

// Data for the second block (UDP-2 to UDP-5)
const dataBlock2: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-2",
    port1: { eta: "19/03", etd: "21/03" }, // Chittagong
    port2: { eta: "-", etd: "-" }, // Haldia
    port3: { eta: "-", etd: "-" }, // Pangaon
    port4: { eta: "24/03", etd: "29/03" }, // Kolkata
    port5: { eta: "-", etd: "-" },         // Haldia
    port6: { eta: "-", etd: "-" }, // Chittagong
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-3",
    port1: { eta: "08/04", etd: "10/04" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "13/04", etd: "14/04" },
    port5: { eta: "-", etd: "-" },
    port6: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-4",
    port1: { eta: "17/04", etd: "18/04" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "22/04", etd: "24/04" },
    port5: { eta: "-", etd: "-" },
    port6: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-5",
    port1: { eta: "27/04", etd: "29/04" },
    port2: { eta: "-", etd: "-" },
    port3: { eta: "-", etd: "-" },
    port4: { eta: "04/05", etd: "06/05" },
    port5: { eta: "-", etd: "-" },
    port6: { eta: "-", etd: "-" },
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