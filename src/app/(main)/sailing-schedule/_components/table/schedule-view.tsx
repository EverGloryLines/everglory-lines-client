"use client";

import { DataTable } from "./data-table";
import { columnsRouteA, columnsRouteB, PortSchedule } from "./columns";

// Data for the first block (UDP-1)
const dataBlock1: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-1",
    port1: { eta: "26/12", etd: "28/12" }, // Chittagong
    port2: { eta: "-", etd: "-" },         // Pangaon
    port3: { eta: "31/12", etd: "03/01" }, // Kolkata
    port4: { eta: "03/01", etd: "05/01" }, // Haldia
    port5: { eta: "08/01", etd: "10/01" }, // Chittagong
  },
];

// Data for the second block (UDP-2 to UDP-5)
const dataBlock2: PortSchedule[] = [
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-2",
    port1: { eta: "08/01", etd: "10/01" }, // Chittagong
    port2: { eta: "12/01", etd: "14/01" }, // Haldia
    port3: { eta: "16/01", etd: "18/01" }, // Pangaon
    port4: { eta: "-", etd: "-" },         // Haldia
    port5: { eta: "19/01", etd: "21/01" }, // Chittagong
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-3",
    port1: { eta: "19/01", etd: "21/01" },
    port2: { eta: "23/01", etd: "25/01" },
    port3: { eta: "27/01", etd: "29/01" },
    port4: { eta: "01/02", etd: "03/02" },
    port5: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-4",
    port1: { eta: "-", etd: "-" },
    port2: { eta: "01/02", etd: "04/02" },
    port3: { eta: "06/02", etd: "08/02" },
    port4: { eta: "10/02", etd: "13/02" },
    port5: { eta: "-", etd: "-" },
  },
  {
    vessel: "UDDIPON EXPRESS",
    voyage: "UDP-5",
    port1: { eta: "-", etd: "-" },
    port2: { eta: "10/02", etd: "13/02" },
    port3: { eta: "15/02", etd: "17/02" },
    port4: { eta: "19/02", etd: "22/02" },
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