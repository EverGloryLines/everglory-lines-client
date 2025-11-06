export interface Location {
  name: string;
  code: string;
  country: string;
  terminal?: string;
}

export interface Vessel {
  name: string;
  voyageNumber: string;
  serviceCode: string;
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
  vessel: {
    name: string;
    voyageNumbers: string[];
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

export const pointToPointMockData: PointToPointResult[] = [
  {
    id: "1",
    departure: {
      date: "2025-11-09T00:00:00Z",
      location: {
        name: "Chittagong Port",
        code: "CGP",
        country: "Bangladesh",
      },
    },
    arrival: {
      date: "2025-11-14T18:00:00Z",
      location: {
        name: "Haldia Port",
        code: "HAL",
        country: "India",
        //terminal: "Jebel Ali Terminal 2",
      },
    },
    vessel: {
      name: "UDDIPON EXPRESS",
      voyageNumber: "545W",
      serviceCode: "545W",
      imo: "97975037",
      flag: "Bangladesh",
      flagCode: "BD",
      built: 2019,
      callSign: "BQQS",
    },
    transitTime: {
      days: 6,
      hours: 16,
    },
    deadlines: {
      emptyPickup: null,
      gateIn: null,
      shippingInstructions: null,
      vgm: null,
      dangerousGoods: null,
    },
    routeDetails: {
      stops: [
        {
          port: { name: "Chittagong Port", code: "CGP", country: "Bangladesh" },
          arrival: "2025-11-09T03:00:00Z",
          departure: "2025-11-11T03:00:00Z",
        },
        {
          port: {
            name: "Haldia Port",
            code: "HAL",
            country: "India",
          },
          arrival: "2025-11-14T18:00:00Z",
          departure: "2025-11-14T18:00:00Z",
        },
      ],
    },
  },
  {
    id: "2",
    departure: {
      date: "2025-11-09T00:00:00Z",
      location: {
        name: "Chittagong Port",
        code: "CGP",
        country: "Bangladesh",
      },
    },
    arrival: {
      date: "2025-11-13T18:00:00Z",
      location: {
        name: "Kolkata Port",
        code: "CCU",
        country: "India",
        //terminal: "Jebel Ali Terminal 2",
      },
    },
    vessel: {
      name: "UDDIPON EXPRESS",
      voyageNumber: "545W",
      serviceCode: "545W",
      imo: "97975037",
      flag: "Bangladesh",
      flagCode: "BD",
      built: 2019,
      callSign: "BQQS",
    },
    transitTime: {
      days: 4,
      hours: 16,
    },
    deadlines: {
      emptyPickup: null,
      gateIn: null,
      shippingInstructions: null,
      vgm: null,
      dangerousGoods: null,
    },
    routeDetails: {
      stops: [
        {
          port: { name: "Chittagong Port", code: "CGP", country: "Bangladesh" },
          arrival: "2025-11-09T03:00:00Z",
          departure: "2025-11-11T03:00:00Z",
        },
        {
          port: {
            name: "Chittagong Port",
            code: "HAL",
            country: "India",
          },
          arrival: "2025-11-13T18:00:00Z",
          departure: "2025-11-14T18:00:00Z",
        },
      ],
    },
  },
];

export const portCallsMockData: PortCallResult[] = [
  {
    id: "1",
    vessel: {
      name: "XPR CMB CGP FDR3",
      voyageNumbers: ["141N", "141S"],
    },
    terminal: "Chittagong Terminal",
    arrival: "2025-11-07T12:00:00Z",
    departure: "2025-11-10T12:00:00Z",
    deadlines: {
      emptyPickup: null,
      gateIn: null,
      shippingInstructions: null,
      vgm: null,
      dangerousGoods: null,
    },
  },
  {
    id: "2",
    vessel: {
      name: "XPR CMB CGP FDR3",
      voyageNumbers: ["141S", "142N"],
    },
    terminal: "South Asia Gateway Terminals",
    arrival: "2025-11-20T12:00:00Z",
    departure: "2025-11-21T12:00:00Z",
    deadlines: {
      emptyPickup: null,
      gateIn: null,
      shippingInstructions: null,
      vgm: null,
      dangerousGoods: null,
    },
  },
];

export const vesselScheduleMockData: VesselScheduleResult = {
  vessel: {
    name: "UDDIPON EXPRESS",
    voyageNumber: "UDP-1",
    serviceCode: "",
    imo: "9797503",
    flag: "Bangladesh",
    flagCode: "BD",
    built: 2019,
    callSign: "",
    teu: "",
  },
  voyages: [
    {
      port: { name: "Chittagong", code: "CGP", country: "Bangladesh" },
      terminal: "Chittagong Terminal",
      arrivalVoyage: "",
      arrivalDate: "2025-11-09T12:00:00Z",
      departureVoyage: "",
      departureDate: "2025-11-10T12:00:00Z",
    },
    {
      port: { name: "Colombo", code: "CMB", country: "Sri Lanka" },
      terminal: "South Asia Gateway Terminals",
      arrivalVoyage: "141S",
      arrivalDate: "2025-11-20T12:00:00Z",
      departureVoyage: "142N",
      departureDate: "2025-11-21T12:00:00Z",
    },
    {
      port: { name: "Chittagong", code: "CHT", country: "Bangladesh" },
      terminal: "Chittagong Terminal",
      arrivalVoyage: "142N",
      arrivalDate: "2025-11-28T12:00:00Z",
      departureVoyage: "142S",
      departureDate: "2025-12-01T12:00:00Z",
    },
  ],
};