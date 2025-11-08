/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  PointToPointResult,
  PortCallResult,
  VesselScheduleResult,
  Location,
  Vessel,
  Deadlines,
  VesselDetails,
  RouteStop,
} from "./mock-schedule-data";

// --- Mock Data based on the provided image ---

// Helper to parse dates like "09/11/25" into a Date object
const parseDateString = (dateStr: string): Date => {
  if (!dateStr || dateStr === "--") return new Date(0); // Epoch for invalid
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(Date.UTC(2000 + year, month - 1, day)); // Assumes 21st century
};

// Helper to format a parsed date back to "YYYY-MM-DD"
const toISODateString = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

// Helper to parse "DD/MM/YY" directly to "YYYY-MM-DD"
const formatDateToISO = (dateStr: string): string => {
  if (!dateStr || dateStr === "--") return "";
  const date = parseDateString(dateStr);
  if (date.getTime() === 0) return "";
  return toISODateString(date);
};

// Helper to get an 'ETA' (for this mock, just adding transit days)
const getMockETA = (etdDate: Date, transitDays: number): string => {
  const etaDate = new Date(etdDate);
  etaDate.setDate(etaDate.getDate() + transitDays);
  return toISODateString(etaDate);
};

// --- Vessel Details (as requested) ---
// This data is invented as it's not in the schedule image
const VESSEL_DETAILS_DB: Record<string, VesselDetails> = {
  "UDDIPON EXPRESS": {
    name: "UDDIPON EXPRESS",
    imo: "9797503",
    flag: "Bangladesh",
    built: 2019,
    callSign: "S2BR6",
    teu: 1550,
    class: "",
  },
  "UTTARAN EXPRESS": {
    name: "UTTARAN EXPRESS",
    imo: "9797486",
    flag: "Bangladesh",
    built: 2019,
    callSign: "S2BR7",
    teu: 1550,
    class: "",
  },
  "UNNAYAN EXPRESS": {
    name: "UNNAYAN EXPRESS",
    imo: "9797424",
    flag: "Bangladesh",
    built: 2019,
    callSign: "S2BR8",
    teu: 1100,
    class: "",
  },
  "UDAYUN EXPRESS": {
    name: "UDAYUN EXPRESS",
    imo: "9797498",
    flag: "Bangladesh",
    built: 2019,
    callSign: "S2BR9",
    teu: 1100,
    class: "",
  },
};

// --- Raw Schedule Data from Image ---
interface RawScheduleEntry {
  vesselName: string;
  voy: string;
  chittagong: string;
  pangaon: string;
  mongla: string;
  kolkata: string;
  paradip: string;
  mongla2: string; // Second Mongla call
  haldia: string;
  pangaon2: string; // Second Pangaon call
}

const RAW_SCHEDULE_DATA: RawScheduleEntry[] = [
  {
    vesselName: "UDDIPON EXPRESS",
    voy: "UDP-1",
    chittagong: "09/11/25",
    pangaon: "--",
    mongla: "--",
    kolkata: "13/11/25",
    paradip: "--",
    mongla2: "--",
    haldia: "14/11/25",
    pangaon2: "--",
  },
  {
    vesselName: "UTTARAN EXPRESS",
    voy: "UTR-1",
    chittagong: "14/11/25",
    pangaon: "17/11/25",
    mongla: "20/11/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "22/11/25",
  },
  {
    vesselName: "UDDIPON EXPRESS",
    voy: "UDP-2",
    chittagong: "19/11/25",
    pangaon: "21/11/25",
    mongla: "--",
    kolkata: "24/11/25",
    paradip: "--",
    mongla2: "--",
    haldia: "25/11/25",
    pangaon2: "--",
  },
  {
    vesselName: "UNNAYAN EXPRESS",
    voy: "UNY-1",
    chittagong: "24/11/25",
    pangaon: "26/11/25",
    mongla: "28/11/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "--",
  },
  {
    vesselName: "UTTARAN EXPRESS",
    voy: "UTR-2",
    chittagong: "26/11/25",
    pangaon: "28/11/25",
    mongla: "30/11/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "02/12/25",
  },
  {
    vesselName: "UDDIPON EXPRESS",
    voy: "UDP-3",
    chittagong: "29/11/25",
    pangaon: "01/12/25",
    mongla: "--",
    kolkata: "04/12/25",
    paradip: "--",
    mongla2: "--",
    haldia: "06/12/25",
    pangaon2: "--",
  },
  {
    vesselName: "UNNAYAN EXPRESS",
    voy: "UNY-2",
    chittagong: "03/12/25",
    pangaon: "05/12/25",
    mongla: "07/12/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "--",
  },
  {
    vesselName: "UTTARAN EXPRESS",
    voy: "UTR-3",
    chittagong: "05/12/25",
    pangaon: "07/12/25",
    mongla: "09/12/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "12/12/25",
  },
  {
    vesselName: "UDAYUN EXPRESS",
    voy: "UDY-1",
    chittagong: "07/12/25",
    pangaon: "--",
    mongla: "09/12/25",
    kolkata: "--",
    paradip: "11/12/25",
    mongla2: "13/12/25",
    haldia: "--",
    pangaon2: "--",
  },
  {
    vesselName: "UDDIPON EXPRESS",
    voy: "UDP-4",
    chittagong: "09/12/25",
    pangaon: "11/12/25",
    mongla: "--",
    kolkata: "14/12/25",
    paradip: "--",
    mongla2: "--",
    haldia: "16/12/25",
    pangaon2: "--",
  },
  // ... (added the rest of your data from the image)
  {
    vesselName: "UNNAYAN EXPRESS",
    voy: "UNY-3",
    chittagong: "12/12/25",
    pangaon: "14/12/25",
    mongla: "16/12/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "--",
  },
  {
    vesselName: "UTTARAN EXPRESS",
    voy: "UTR-4",
    chittagong: "15/12/25",
    pangaon: "17/12/25",
    mongla: "20/12/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "22/12/25",
  },
  {
    vesselName: "UDAYUN EXPRESS",
    voy: "UDY-2",
    chittagong: "17/12/25",
    pangaon: "--",
    mongla: "20/12/25",
    kolkata: "--",
    paradip: "22/12/25",
    haldia: "--",
    mongla2: "24/12/25",
    pangaon2: "--",
  },
  {
    vesselName: "UNNAYAN EXPRESS",
    voy: "UNY-4",
    chittagong: "21/12/25",
    pangaon: "23/12/25",
    mongla: "25/12/25",
    kolkata: "--",
    paradip: "--",
    mongla2: "--",
    haldia: "--",
    pangaon2: "--",
  },
  {
    vesselName: "UDAYUN EXPRESS",
    voy: "UDY-3",
    chittagong: "27/12/25",
    pangaon: "--",
    mongla: "29/12/25",
    kolkata: "--",
    paradip: "31/12/25",
    haldia: "--",
    mongla2: "02/01/26",
    pangaon2: "--",
  },
  {
    vesselName: "UDAYUN EXPRESS",
    voy: "UDY-4",
    chittagong: "06/01/26",
    pangaon: "--",
    mongla: "08/01/26",
    kolkata: "--",
    paradip: "10/01/26",
    haldia: "--",
    mongla2: "12/01/26",
    pangaon2: "--",
  },
];

const PORTS: Record<string, Location> = {
  chittagong: {
    name: "Chittagong, Bangladesh",
    code: "CGP",
    terminal: "CGP Main Terminal",
  },
  pangaon: {
    name: "Pangaon, Bangladesh",
    code: "PGN",
    terminal: "Pangaon ICT",
  },
  mongla: { name: "Mongla, Bangladesh", code: "MGL", terminal: "Mongla Port" },
  kolkata: {
    name: "Kolkata, India",
    code: "CCU",
    terminal: "Kolkata Dock System",
  },
  paradip: { name: "Paradip, India", code: "PRT", terminal: "Paradip Port" },
  haldia: {
    name: "Haldia, India",
    code: "HAL",
    terminal: "Haldia Dock Complex",
  },
  mongla2: { name: "Mongla, Bangladesh", code: "MGL", terminal: "Mongla Port" }, // Same port, different call
  pangaon2: {
    name: "Pangaon, Bangladesh",
    code: "PGN",
    terminal: "Pangaon ICT",
  }, // Same port, different call
};

// Helper for default deadlines
const getDefaultDeadlines = (): Deadlines => ({
  emptyPickup: "N/A",
  gateIn: "N/A",
  shippingInstructions: "N/A",
  vgm: "N/A",
  dangerousGoods: "N/A",
});

// Helper to get full Vessel object
const getVessel = (vesselName: string, voyageNumber: string): Vessel => ({
  name: vesselName,
  voyageNumber: voyageNumber,
  details: VESSEL_DETAILS_DB[vesselName] || {
    name: vesselName,
    imo: "N/A",
    flag: "N/A",
    built: 0,
    callSign: "N/A",
    teu: 0,
    class: "N/A",
  },
  serviceCode: VESSEL_DETAILS_DB[vesselName]?.class || "N/A",
});

// --- Search Functions ---

export async function searchPointToPoint(
  fromPortName: string,
  toPortName: string,
  departingDateStr: string, // YYYY-MM-DD format
  containerType: string
): Promise<PointToPointResult[]> {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API

  const results: PointToPointResult[] = [];
  const searchDepartingDate = new Date(departingDateStr);

  RAW_SCHEDULE_DATA.forEach((entry, index) => {
    const vessel = getVessel(entry.vesselName, entry.voy);
    const portEntries = [
      { key: "chittagong", etdStr: entry.chittagong, transitDays: 0 },
      { key: "pangaon", etdStr: entry.pangaon, transitDays: 2 },
      { key: "mongla", etdStr: entry.mongla, transitDays: 3 },
      { key: "kolkata", etdStr: entry.kolkata, transitDays: 4 },
      { key: "paradip", etdStr: entry.paradip, transitDays: 5 },
      { key: "mongla2", etdStr: entry.mongla2, transitDays: 6 },
      { key: "haldia", etdStr: entry.haldia, transitDays: 7 },
      { key: "pangaon2", etdStr: entry.pangaon2, transitDays: 8 },
    ].filter((p) => p.etdStr !== "--");

    let fromIndex = -1;
    let toIndex = -1;

    for (let i = 0; i < portEntries.length; i++) {
      if (PORTS[portEntries[i].key].name === fromPortName) fromIndex = i;
      if (PORTS[portEntries[i].key].name === toPortName) toIndex = i;
    }

    if (fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex) {
      const etdFromDate = parseDateString(portEntries[fromIndex].etdStr);

      if (etdFromDate >= searchDepartingDate) {
        const fromLocation = PORTS[portEntries[fromIndex].key];
        const toLocation = PORTS[portEntries[toIndex].key];
        const etdToDate = parseDateString(portEntries[toIndex].etdStr);

        const diffTime = Math.abs(etdToDate.getTime() - etdFromDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        //const routeStops: PointToPointResult['routeDetails']['stops'] = [];
        const routeStops: RouteStop[] = [];
        for (let i = fromIndex; i <= toIndex; i++) {
          const stopPort = PORTS[portEntries[i].key];
          const stopEtdDate = parseDateString(portEntries[i].etdStr);
          routeStops.push({
            port: stopPort,
            etd: toISODateString(stopEtdDate),
            eta: toISODateString(stopEtdDate), // For simplicity, ETA = ETD at intermediate stops
          });
        }

        // As per your example: (chittaong-pangaon) [uttaran express] ( UTR-1) ...
        // Your logic for intermediate stops (chittaong to pangaon , pangon to mongla) is built here.
        if (
          fromPortName.includes("Chittagong") &&
          toPortName.includes("Pangaon") &&
          entry.vesselName.includes("UTTARAN")
        ) {
          // This specific route implies intermediate stops
          // The logic above already builds this from fromIndex to toIndex.
          // Example: UTR-1: Chittagong (idx 0), Pangaon (idx 1), Mongla (idx 2)
          // If from=Chittagong, to=Mongla, it will correctly include Pangaon.
        }

        results.push({
          id: `${vessel.name}-${vessel.voyageNumber}-${index}`,
          from: fromLocation,
          to: toLocation,
          vessel,
          etd: toISODateString(etdFromDate),
          eta: toISODateString(etdToDate), // ETA is the ETD of the final port
          transitTime: { days: diffDays, hours: 0 },
          deadlines: getDefaultDeadlines(),
          routeDetails: { stops: routeStops },
        });
      }
    }
  });
  return results;
}

export async function searchPortCalls(
  portName: string,
  countryName: string,
  dateFrom: string, // YYYY-MM-DD
  days: number
): Promise<PortCallResult[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const results: PortCallResult[] = [];
  const searchDateFrom = new Date(dateFrom);
  const searchDateTo = new Date(searchDateFrom);
  searchDateTo.setDate(searchDateTo.getDate() + days);

  RAW_SCHEDULE_DATA.forEach((entry, index) => {
    const vessel = getVessel(entry.vesselName, entry.voy);
    const portKeys: (keyof RawScheduleEntry)[] = [
      "chittagong",
      "pangaon",
      "mongla",
      "kolkata",
      "paradip",
      "mongla2",
      "haldia",
      "pangaon2",
    ];

    portKeys.forEach((key) => {
      const etdString = entry[key];
      if (etdString && etdString !== "--") {
        const etdDate = parseDateString(etdString);
        const portLocation = PORTS[key];

        if (portLocation.name === `${portName}, ${countryName}`) {
          if (etdDate >= searchDateFrom && etdDate <= searchDateTo) {
            results.push({
              id: `${vessel.name}-${vessel.voyageNumber}-${key}-${index}`,
              vessel,
              terminal: portLocation.terminal || "N/A",
              etd: toISODateString(etdDate),
              deadlines: getDefaultDeadlines(),
            });
          }
        }
      }
    });
  });
  return results.sort(
    (a, b) => new Date(a.etd).getTime() - new Date(b.etd).getTime()
  );
}

export async function searchVesselSchedules(
  vesselName: string,
  dateFrom: string // YYYY-MM-DD
): Promise<VesselScheduleResult | null> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const vesselDetails = VESSEL_DETAILS_DB[vesselName.toUpperCase()];
  if (!vesselDetails) {
    return null; // Vessel not found in our DB
  }

  const vesselSchedule: VesselScheduleResult = {
    vessel: vesselDetails,
    voyages: [],
  };
  const searchDateFrom = new Date(dateFrom);

  const relevantEntries = RAW_SCHEDULE_DATA.filter(
    (entry) => entry.vesselName.toLowerCase() === vesselName.toLowerCase()
  );

  relevantEntries.forEach((entry) => {
    const portKeys: (keyof RawScheduleEntry)[] = [
      "chittagong",
      "pangaon",
      "mongla",
      "kolkata",
      "paradip",
      "mongla2",
      "haldia",
      "pangaon2",
    ];

    portKeys.forEach((key) => {
      const etdString = entry[key];
      if (etdString && etdString !== "--") {
        const etdDate = parseDateString(etdString);
        if (etdDate >= searchDateFrom) {
          const portLocation = PORTS[key];
          vesselSchedule.voyages.push({
            port: portLocation,
            terminal: portLocation.terminal || "N/A",
            etd: toISODateString(etdDate),
            voyageNumber: entry.voy,
          });
        }
      }
    });
  });

  // Sort all found stops by date
  vesselSchedule.voyages.sort(
    (a, b) => new Date(a.etd).getTime() - new Date(b.etd).getTime()
  );

  return vesselSchedule;
}
