export interface TariffRow {
  description: string;
  unit: string;
  rate: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tables: {
    title: string;
    rows: TariffRow[];
  }[];
  notes: string[];
}

export const containerChargesData: AccordionSection[] = [
  {
    id: "d1",
    title: "1 - Wharfage Charges",
    subtitle:
      "Rates for FCL, LCL, and empty containers handled via vessel account",
    description:
      "Wharfage is levied on full, less-than-full, and empty containers for movement between vessel and yard. It includes lifting, handling, and port documentation fees, varying by container size and cargo type.",
    tables: [
      {
        title: "Wharfage Rate Table (USD per Container)",
        rows: [
          {
            description: "FCL (Full Container Load)",
            unit: "20 ft",
            rate: "$68.00",
          },
          {
            description: "FCL (Full Container Load)",
            unit: "40 ft",
            rate: "$102.00",
          },
          {
            description: "LCL (Less-than-Container Load)",
            unit: "20 ft",
            rate: "$75.00",
          },
          {
            description: "LCL (Less-than-Container Load)",
            unit: "40 ft",
            rate: "$112.00",
          },
          {
            description: "Empty Container",
            unit: "20 ft / 40 ft",
            rate: "$34.00 / $51.00",
          },
          {
            description: "Reefer Container",
            unit: "20 ft / 40 ft",
            rate: "$90.00 / $130.00",
          },
          {
            description: "Transshipment Container",
            unit: "20 ft / 40 ft",
            rate: "$80.00 / $120.00",
          },
        ],
      },
    ],
    notes: [
      "Charged per lift (discharge or loading).",
      "Out-of-Gauge (OOG) or dangerous containers incur +100–200% surcharge.",
      "Lashing/unlashing not included; charged separately if performed by CPA.",
    ],
  },
  {
    id: "d2",
    title: "2 - Storage Charges",
    subtitle:
      "Daily storage fees after expiry of free time for import/export containers",
    description:
      "Storage charges are levied per container per day after the free storage period expires. Rates differ for import and export containers and depend on container size and duration.",
    tables: [
      {
        title: "Import Container Storage Rates (USD per Day)",
        rows: [
          {
            description: "Up to 8 days (Free Period)",
            unit: "—",
            rate: "Free",
          },
          {
            description: "9 – 20 days",
            unit: "20 ft / 40 ft",
            rate: "$13.80 / $27.60",
          },
          {
            description: "21 – 30 days",
            unit: "20 ft / 40 ft",
            rate: "$27.60 / $55.20",
          },
          {
            description: "Beyond 30 days",
            unit: "20 ft / 40 ft",
            rate: "$41.40 / $82.80",
          },
        ],
      },
      {
        title: "Export Container Storage Rates (USD per Day)",
        rows: [
          {
            description: "Up to 7 days (Free Period)",
            unit: "—",
            rate: "Free",
          },
          {
            description: "8 – 15 days",
            unit: "20 ft / 40 ft",
            rate: "$9.20 / $18.40",
          },
          {
            description: "16 – 30 days",
            unit: "20 ft / 40 ft",
            rate: "$18.40 / $36.80",
          },
          {
            description: "Beyond 30 days",
            unit: "20 ft / 40 ft",
            rate: "$27.60 / $55.20",
          },
        ],
      },
    ],
    notes: [
      "Dangerous cargo containers → +300% surcharge.",
      "Reefer containers incur plug-in fee: $15 (20 ft) / $25 (40 ft) per day.",
      "Public holidays count once free period expires.",
    ],
  },
  {
    id: "d3",
    title: "3 - Extra Handling & Miscellaneous Charges",
    subtitle:
      "Charges for shifting, restacking, stuffing, and special handling",
    description:
      "Additional handling services beyond normal wharfage operations are chargeable. These include yard shifting, restacking, stuffing, and dangerous or out-of-gauge cargo handling.",
    tables: [
      {
        title: "Extra Handling Charges (USD per Container)",
        rows: [
          {
            description: "Shifting within yard",
            unit: "20 ft / 40 ft",
            rate: "$34.00 / $51.00",
          },
          {
            description: "Shifting vessel to vessel",
            unit: "20 ft / 40 ft",
            rate: "$68.00 / $102.00",
          },
          {
            description: "Restacking / Unstacking",
            unit: "20 ft / 40 ft",
            rate: "$20.00 / $30.00",
          },
          {
            description: "Stuffing or Destuffing",
            unit: "20 ft / 40 ft",
            rate: "$75.00 / $110.00",
          },
          {
            description: "Dangerous Cargo Surcharge",
            unit: "—",
            rate: "+200%",
          },
          {
            description: "Out-of-Gauge (OOG) Container",
            unit: "—",
            rate: "+100%",
          },
          {
            description: "Reefer Monitoring & Plug-in",
            unit: "20 ft / 40 ft",
            rate: "$15 / $25 per day",
          },
        ],
      },
    ],
    notes: [
      "‘Per move’ means a single lifting or repositioning operation.",
      "Night shifts (after 18:00) → +25% on handling rates.",
      "Emergency handling incurs $50 flat service fee.",
      "CPA may impose penalties for unreported movements.",
    ],
  },
  {
    id: "d4",
    title: "4 - Other Applicable Conditions",
    subtitle: "General rules and additional surcharges under vessel account",
    description:
      "These conditions outline how vessel account container charges are applied and invoiced by the port authority.",
    tables: [],
    notes: [
      "All rates are in USD and exclusive of VAT.",
      "Charges billed to the vessel’s shipping line or agent.",
      "Multi-terminal handling is treated as separate chargeable events.",
      "Reefer overtime connection fee → $25 per connection.",
      "CPA gear damage or misuse → repair cost +15% administrative fee.",
      "Oversized or overheight containers → 2× base rate.",
    ],
  },
];
