export interface GeneralServicesTariffRow {
  description: string;
  unit: string;
  rate: string;
}

export interface GeneralAccordionSection {
  id: string;
  title: string;
  subtitle: string;
  tables: {
    title: string;
    rows: GeneralServicesTariffRow[];
  }[];
  notes: string[];
}

export const generalServicesData: GeneralAccordionSection[] = [
  {
    id: "c1",
    title: "1 - Equipment & Gear Hire",
    subtitle:
      "Rental charges for cranes, forklifts, trailers, and lifting gear",
    tables: [
      {
        title: "Equipment Hire Rates",
        rows: [
          {
            description: "Mobile crane (<10 tons)",
            unit: "Hour",
            rate: "$10.70",
          },
          {
            description: "Mobile crane (10–20 tons)",
            unit: "Hour",
            rate: "$16.05",
          },
          {
            description: "Mobile crane (>20 tons)",
            unit: "Hour",
            rate: "$21.40",
          },
          {
            description: "Forklift truck (up to 3 tons)",
            unit: "Hour",
            rate: "$5.35",
          },
          {
            description: "Forklift truck (3–5 tons)",
            unit: "Hour",
            rate: "$7.48",
          },
          { description: "Trailer or tractor", unit: "Hour", rate: "$8.55" },
          {
            description: "Lifting gear / slings / ropes",
            unit: "Use",
            rate: "$2.00 – $5.00",
          },
        ],
      },
    ],
    notes: [
      "Minimum hire duration is 2 hours.",
      "Overtime use beyond 8 hours per day incurs +25% surcharge.",
      "Operator and standard fuel included in rates.",
      "Self-operation of CPA equipment is not permitted.",
    ],
  },
  {
    id: "c2",
    title: "2 - Emergency Services",
    subtitle:
      "Firefighting, salvage, diving, and rescue assistance for port incidents",
    tables: [
      {
        title: "Fire & Emergency Response Rates",
        rows: [
          {
            description: "Fire tug (within harbor)",
            unit: "Hour",
            rate: "$325.89",
          },
          {
            description: "Fire tug (outside limits)",
            unit: "Hour",
            rate: "$435.00",
          },
          {
            description: "Fire pump unit (ashore)",
            unit: "Hour",
            rate: "$80.00",
          },
          { description: "Fire van / crew team", unit: "Hour", rate: "$40.00" },
          {
            description: "Rescue divers / safety crew",
            unit: "Person/Hour",
            rate: "$100.00",
          },
          {
            description: "Salvage tug + crew operation",
            unit: "Operation",
            rate: "$500.00 minimum",
          },
        ],
      },
    ],
    notes: [
      "Minimum call-out charge is 2 hours.",
      "Salvage beyond harbor limits: +50% rate increase.",
      "CPA divers available 24 hours for emergencies.",
      "Damage or loss of CPA gear billed to requesting party.",
    ],
  },
  {
    id: "c3",
    title: "3 - Slipway & Marine Fleet Hire",
    subtitle:
      "Hire of port-owned vessels, dredgers, tugs, and slipway facilities",
    tables: [
      {
        title: "Marine Fleet & Slipway Hire",
        rows: [
          {
            description: "Small harbor launch / boat",
            unit: "Trip",
            rate: "$66.00",
          },
          { description: "Work barge", unit: "Hour", rate: "$150.00" },
          {
            description: "Tug (tow assist within port)",
            unit: "Hour",
            rate: "$205.00",
          },
          { description: "Slipway (≤300 GT)", unit: "Day", rate: "$250.00" },
          { description: "Slipway (>300 GT)", unit: "Day", rate: "$400.00" },
          {
            description: "Dredger (private deployment)",
            unit: "Hour",
            rate: "$1,500.00 (min 4 hrs)",
          },
        ],
      },
    ],
    notes: [
      "Hire bookings subject to advance approval and vessel availability.",
      "Fuel beyond normal consumption charged extra.",
      "Craft owners must insure their vessel during slipway stay.",
      "Dock floor cleaning and maintenance billed at cost +15%.",
    ],
  },
  {
    id: "c4",
    title: "4 - Licenses & Passes",
    subtitle:
      "Annual permits and identification cards for port operators, agents, and vehicles",
    tables: [
      {
        title: "License & Pass Fees",
        rows: [
          {
            description: "Berth operator license",
            unit: "Annual",
            rate: "$500.00",
          },
          {
            description: "Stevedore / contractor license",
            unit: "Annual",
            rate: "$300.00",
          },
          {
            description: "Agent / freight forwarder license",
            unit: "Annual",
            rate: "$250.00",
          },
          {
            description: "Vehicle entry pass",
            unit: "Per vehicle / year",
            rate: "$50.00",
          },
          {
            description: "Worker / driver ID card",
            unit: "Per person / year",
            rate: "$10.00",
          },
          {
            description: "Lost pass replacement",
            unit: "Per instance",
            rate: "$5.00",
          },
        ],
      },
    ],
    notes: [
      "Licenses must be renewed before expiry; late renewal fee = 10%.",
      "Temporary permits (≤1 month) charged 25% of annual rate.",
      "All passes are personal and non-transferable.",
      "Unauthorized use or forgery leads to license cancellation.",
    ],
  },
];
