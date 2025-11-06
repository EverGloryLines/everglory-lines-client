import { differenceInHours, addDays } from "date-fns";

// --- INTERFACES (Unchanged) ---
export interface Location {
  name: string;
  code: string;
  country: string;
  terminal?: string;
}

export interface Vessel {
  name: string;
  voyageNumber?: string; // This will now represent the VOY code (e.g., UDP-1)
  serviceCode: string; // This will represent the service line (e.g., UDP)
  imo: string;
  flag: string;
  flagCode: string;
  built: number;
  callSign: string;
  class?: string;
  teu?: string;
}

export interface Deadline {
  emptyPickup: string | null;
  gateIn: string | null;
  shippingInstructions: string | null;
  vgm: string | null;
  dangerousGoods: string | null;
}

export interface PointToPointResult {
  id: string;
  departure: {
    date: string;
    location: Location;
  };
  arrival: {
    date: string;
    location: Location;
  };
  vessel: Vessel;
  transitTime: {
    days: number;
    hours: number;
  };
  deadlines: Deadline;
  routeDetails?: {
    stops: Array<{
      port: Location;
      arrival: string;
      departure: string;
    }>;
  };
}

export interface PortCallResult {
  id: string;
  port: Location; // Added port object for search
  vessel: {
    name: string;
    voyageNumbers: string[]; // e.g., ["UDP-1"]
  };
  terminal: string;
  arrival: string;
  departure: string;
  deadlines: Deadline;
}

export interface VoyageStop {
  port: Location;
  terminal: string;
  arrivalVoyage: string;
  arrivalDate: string;
  departureVoyage: string;
  departureDate: string;
}

export interface VesselScheduleResult {
  vessel: Vessel;
  voyages: VoyageStop[];
}

// --- NEW DATA GENERATION ---

// 1. Define Locations
const chittagong: Location = {
  name: "Chittagong",
  code: "CGP",
  country: "Bangladesh",
  terminal: "Chittagong Terminal",
};
const pangaon: Location = {
  name: "Pangaon",
  code: "PGN",
  country: "Bangladesh",
  terminal: "Pangaon ICT",
};
const mongla: Location = {
  name: "Mongla",
  code: "MGL",
  country: "Bangladesh",
  terminal: "Mongla Port",
};
const kolkata: Location = {
  name: "Kolkata",
  code: "CCU",
  country: "India",
  terminal: "Kolkata Dock System",
};
const paradip: Location = {
  name: "Paradip",
  code: "PRT",
  country: "India",
  terminal: "Paradip Port",
};
const haldia: Location = {
  name: "Haldia",
  code: "HAL",
  country: "India",
  terminal: "Haldia Dock Complex",
};

// 2. Define Vessels
const uddiponVessel: Vessel = {
  name: "UDDIPON EXPRESS",
  serviceCode: "UDP",
  imo: "9797503",
  flag: "Bangladesh",
  flagCode: "BD",
  built: 2019,
  callSign: "S2AA",
  teu: "1100",
};
const uttaranVessel: Vessel = {
  name: "UTTARAN EXPRESS",
  serviceCode: "UTR",
  imo: "9797486",
  flag: "Bangladesh",
  flagCode: "BD",
  built: 2019,
  callSign: "S2AB",
  teu: "1200",
};
const unnayanVessel: Vessel = {
  name: "UNNAYAN EXPRESS",
  serviceCode: "UNY",
  imo: "9797424",
  flag: "Bangladesh",
  flagCode: "BD",
  built: 2019,
  callSign: "S2AC",
  teu: "1050",
};
const udayunVessel: Vessel = {
  name: "UDAYUN EXPRESS",
  serviceCode: "UDY",
  imo: "9797498",
  flag: "Bangladesh",
  flagCode: "BD",
  built: 2019,
  callSign: "S2AD",
  teu: "1150",
};

// 3. Helper Functions
const toDate = (ddmmyy: string): Date => {
  if (!ddmmyy || ddmmyy === "--") return new Date("9999-12-31"); // Handle empty dates
  const year = parseInt(`20${ddmmyy.slice(6, 8)}`, 10);
  const month = parseInt(ddmmyy.slice(3, 5), 10) - 1; // JS months are 0-indexed
  const day = parseInt(ddmmyy.slice(0, 2), 10);
  return new Date(year, month, day, 12, 0, 0); // Assume 12:00 PM
};

const getTransitTime = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalHours = differenceInHours(end, start);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  return { days, hours };
};

// Assume a 1-day port stay. Arrival is 1 day before ETD (Departure).
// For the first port, arrival and departure are on the same day.
const createStop = (
  port: Location,
  voy: string,
  depDateStr: string,
  isFirstStop: boolean
): VoyageStop => {
  const depDate = toDate(depDateStr);
  const arrDate = isFirstStop ? depDate : addDays(depDate, -1);

  return {
    port,
    terminal: port.terminal || port.name,
    arrivalVoyage: voy,
    arrivalDate: arrDate.toISOString(),
    departureVoyage: voy,
    departureDate: depDate.toISOString(),
  };
};

const emptyDeadlines: Deadline = {
  emptyPickup: null,
  gateIn: null,
  shippingInstructions: null,
  vgm: null,
  dangerousGoods: null,
};

// 4. Create Vessel Schedules from Image Data

const uddiponSchedule: VesselScheduleResult = {
  vessel: { ...uddiponVessel, voyageNumber: "UDP-4" }, // Use last voyage
  voyages: [
    createStop(chittagong, "UDP-1", "09/11/25", true),
    createStop(kolkata, "UDP-1", "13/11/25", false),
    createStop(haldia, "UDP-1", "14/11/25", false),
    createStop(chittagong, "UDP-2", "19/11/25", true),
    createStop(pangaon, "UDP-2", "21/11/25", false),
    createStop(kolkata, "UDP-2", "24/11/25", false),
    createStop(haldia, "UDP-2", "25/11/25", false),
    createStop(chittagong, "UDP-3", "29/11/25", true),
    createStop(pangaon, "UDP-3", "01/12/25", false),
    createStop(kolkata, "UDP-3", "04/12/25", false),
    createStop(haldia, "UDP-3", "06/12/25", false),
    createStop(chittagong, "UDP-4", "09/12/25", true),
    createStop(pangaon, "UDP-4", "11/12/25", false),
    createStop(kolkata, "UDP-4", "14/12/25", false),
    createStop(haldia, "UDP-4", "16/12/25", false),
  ],
};

const uttaranSchedule: VesselScheduleResult = {
  vessel: { ...uttaranVessel, voyageNumber: "UTR-4" },
  voyages: [
    createStop(chittagong, "UTR-1", "14/11/25", true),
    createStop(pangaon, "UTR-1", "17/11/25", false),
    createStop(mongla, "UTR-1", "20/11/25", false),
    createStop(pangaon, "UTR-1", "22/11/25", false),
    createStop(chittagong, "UTR-2", "26/11/25", true),
    createStop(pangaon, "UTR-2", "28/11/25", false),
    createStop(mongla, "UTR-2", "30/11/25", false),
    createStop(pangaon, "UTR-2", "02/12/25", false),
    createStop(chittagong, "UTR-3", "05/12/25", true),
    createStop(pangaon, "UTR-3", "07/12/25", false),
    createStop(mongla, "UTR-3", "09/12/25", false),
    createStop(pangaon, "UTR-3", "12/12/25", false),
    createStop(chittagong, "UTR-4", "15/12/25", true),
    createStop(pangaon, "UTR-4", "17/12/25", false),
    createStop(mongla, "UTR-4", "20/12/25", false),
    createStop(pangaon, "UTR-4", "22/12/25", false),
  ],
};

const unnayanSchedule: VesselScheduleResult = {
  vessel: { ...unnayanVessel, voyageNumber: "UNY-4" },
  voyages: [
    createStop(chittagong, "UNY-1", "24/11/25", true),
    createStop(pangaon, "UNY-1", "26/11/25", false),
    createStop(mongla, "UNY-1", "28/11/25", false),
    createStop(chittagong, "UNY-2", "03/12/25", true),
    createStop(pangaon, "UNY-2", "05/12/25", false),
    createStop(mongla, "UNY-2", "07/12/25", false),
    createStop(chittagong, "UNY-3", "12/12/25", true),
    createStop(pangaon, "UNY-3", "14/12/25", false),
    createStop(mongla, "UNY-3", "16/12/25", false),
    createStop(chittagong, "UNY-4", "21/12/25", true),
    createStop(pangaon, "UNY-4", "23/12/25", false),
    createStop(mongla, "UNY-4", "25/12/25", false),
  ],
};

const udayunSchedule: VesselScheduleResult = {
  vessel: { ...udayunVessel, voyageNumber: "UDY-4" },
  voyages: [
    createStop(chittagong, "UDY-1", "07/12/25", true),
    createStop(mongla, "UDY-1", "09/12/25", false),
    createStop(paradip, "UDY-1", "11/12/25", false),
    createStop(mongla, "UDY-1", "13/12/25", false),
    createStop(chittagong, "UDY-2", "17/12/25", true),
    createStop(mongla, "UDY-2", "20/12/25", false),
    createStop(paradip, "UDY-2", "22/12/25", false),
    createStop(mongla, "UDY-2", "24/12/25", false),
    createStop(chittagong, "UDY-3", "27/12/25", true),
    createStop(mongla, "UDY-3", "29/12/25", false),
    createStop(paradip, "UDY-3", "31/12/25", false),
    createStop(mongla, "UDY-3", "02/01/26", false),
    createStop(chittagong, "UDY-4", "06/01/26", true),
    createStop(mongla, "UDY-4", "08/01/26", false),
    createStop(paradip, "UDY-4", "10/01/26", false),
    createStop(mongla, "UDY-4", "12/01/26", false),
  ],
};

// 5. Consolidate Data for Export

export const allVesselSchedules: VesselScheduleResult[] = [
  uddiponSchedule,
  uttaranSchedule,
  unnayanSchedule,
  udayunSchedule,
];

// 6. Generate Port Calls from All Schedules
export const allPortCallsData: PortCallResult[] = [];
allVesselSchedules.forEach((schedule) => {
  schedule.voyages.forEach((stop, index) => {
    allPortCallsData.push({
      id: `${schedule.vessel.serviceCode}-${stop.departureVoyage}-${index}`,
      port: stop.port,
      vessel: {
        name: schedule.vessel.name,
        voyageNumbers: [stop.departureVoyage],
      },
      terminal: stop.terminal,
      arrival: stop.arrivalDate,
      departure: stop.departureDate,
      deadlines: emptyDeadlines,
    });
  });
});

// 7. Generate Point-to-Point Routes from All Schedules
export const allPointToPointData: PointToPointResult[] = [];
allVesselSchedules.forEach((schedule) => {
  const stops = schedule.voyages;
  for (let i = 0; i < stops.length; i++) {
    for (let j = i + 1; j < stops.length; j++) {
      // Only create a route if the voyage is the same
      if (stops[i].departureVoyage !== stops[j].arrivalVoyage) {
        continue;
      }

      // Avoid creating routes from/to the same port
      if (stops[i].port.code === stops[j].port.code) {
        continue;
      }

      const departureStop = stops[i];
      const arrivalStop = stops[j];
      const routeStops = stops.slice(i, j + 1).map((s) => ({
        port: s.port,
        arrival: s.arrivalDate,
        departure: s.departureDate,
      }));

      allPointToPointData.push({
        id: `${schedule.vessel.serviceCode}-${departureStop.departureVoyage}-${i}-${j}`,
        departure: {
          date: departureStop.departureDate,
          location: departureStop.port,
        },
        arrival: {
          date: arrivalStop.arrivalDate,
          location: arrivalStop.port,
        },
        vessel: {
          ...schedule.vessel,
          voyageNumber: departureStop.departureVoyage,
        },
        transitTime: getTransitTime(
          departureStop.departureDate,
          arrivalStop.arrivalDate
        ),
        deadlines: emptyDeadlines,
        routeDetails: {
          stops: routeStops,
        },
      });
    }
  }
});

// --- EXPORT THE GENERATED DATA ---
// These are the new master arrays to be used by schedules.ts
// The old single-export variables are for compatibility if needed,
// but the search should use the new `all...` arrays.

export const pointToPointMockData: PointToPointResult[] = allPointToPointData;
export const portCallsMockData: PortCallResult[] = allPortCallsData;
export const vesselScheduleMockData: VesselScheduleResult = uddiponSchedule; // Default for old compatibility
