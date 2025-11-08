// This interface defines the detailed vessel information you wanted to keep.
export interface VesselDetails {
  name: string;
  imo: string;
  flag: string;
  built: number;
  callSign: string;
  teu: number;
  class: string;
}

export interface Location {
  name: string;
  code: string;
  terminal?: string;
}

// The 'vessel' property here will hold the full vessel details.
export interface Vessel {
  name: string;
  voyageNumber: string; // The specific voyage number for this leg/entry
  serviceCode?: string;
  details: VesselDetails; // Nested object for all the specific info
}

export interface TransitTime {
  days: number;
  hours: number;
}

export interface Deadlines {
  emptyPickup: string | null;
  gateIn: string | null;
  shippingInstructions: string | null;
  vgm: string | null;
  dangerousGoods: string | null;
}

export interface RouteStop {
  port: Location;
  etd: string;
  eta: string;
}

// Updated Point-to-Point result
export interface PointToPointResult {
  id: string;
  from: Location;
  to: Location;
  vessel: Vessel;
  etd: string; // Estimated Time of Departure (from 'from' port)
  eta: string; // Estimated Time of Arrival (at 'to' port)
  transitTime: TransitTime;
  deadlines: Deadlines;
  routeDetails?: {
    // This is for the "Show route details" map
    // stops: Array<{
    //   port: Location;
    //   etd: string; // ETD for this stop
    //   eta: string; // ETA for this stop
    // }>;
    stops: RouteStop[];
  };
}

// Updated Port Call result
export interface PortCallResult {
  id: string;
  vessel: Vessel; // Will contain full details
  terminal: string;
  etd: string; // Replaces 'arrival' and 'departure'
  deadlines: Deadlines;
}

// This is for the Vessel Schedule tab timeline
export interface VoyageStop {
  port: Location;
  terminal?: string;
  etd: string; // The ETD at this port
  voyageNumber: string; // The voyage number for this specific stop
}

// Updated Vessel Schedule result
export interface VesselScheduleResult {
  vessel: VesselDetails; // The main vessel's details
  voyages: VoyageStop[]; // The list of all its future stops
}
