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

export const containerChargesCargoData: AccordionSection[] = [
  {
    id: "e1",
    title: "1 - Handling Charges (LOLO / Delivery / Reception)",
    subtitle:
      "Charges for lift-on/lift-off and yard movements of import/export containers",
    description:
      "Handling charges cover lift-on/lift-off, terminal delivery, and reception of containers within the port. These apply to all import, export, and transshipment containers under the cargo account.",
    tables: [
      {
        title: "Handling Rates (USD per Container)",
        rows: [
          {
            description: "Import Delivery (Lift Off + Gate Out)",
            unit: "20 ft / 40 ft",
            rate: "$68.00 / $102.00",
          },
          {
            description: "Export Reception (Gate In + Lift On)",
            unit: "20 ft / 40 ft",
            rate: "$60.00 / $90.00",
          },
          {
            description: "Transshipment Re-handling",
            unit: "20 ft / 40 ft",
            rate: "$75.00 / $115.00",
          },
          {
            description: "Empty Container Handling",
            unit: "20 ft / 40 ft",
            rate: "$34.00 / $51.00",
          },
          {
            description: "Reefer Container Handling",
            unit: "20 ft / 40 ft",
            rate: "$90.00 / $130.00",
          },
        ],
      },
    ],
    notes: [
      "Each movement represents one lift (import or export).",
      "Hazardous or out-of-gauge cargo → +100% surcharge.",
      "Night and holiday operations incur +25% additional charge.",
    ],
  },
  {
    id: "e2",
    title: "2 - Storage Charges (Cargo Account)",
    subtitle: "Rates for container storage beyond the free period",
    description:
      "Storage charges apply when containers remain in port premises after the free time expires. Rates differ for imports and exports based on size and duration.",
    tables: [
      {
        title: "Import Container Storage (USD per Day)",
        rows: [
          { description: "First 8 days (Free)", unit: "—", rate: "Free" },
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
        title: "Export Container Storage (USD per Day)",
        rows: [
          { description: "First 7 days (Free)", unit: "—", rate: "Free" },
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
      "Dangerous goods incur +300% surcharge.",
      "Reefer containers plug-in: $15 (20 ft) / $25 (40 ft) per day.",
      "Unclaimed cargo beyond 60 days subject to auction.",
    ],
  },
  {
    id: "e3",
    title: "3 - Delivery / Reception Service Fees",
    subtitle:
      "Terminal handling and documentation charges for delivery and reception",
    description:
      "These cover cargo release, paperwork, and yard-truck interface operations. Delivery applies to imports; reception to exports.",
    tables: [
      {
        title: "Delivery & Reception Charges (USD per Container)",
        rows: [
          {
            description: "Delivery to Importer (Yard → Truck)",
            unit: "20 ft / 40 ft",
            rate: "$65.00 / $95.00",
          },
          {
            description: "Reception from Exporter (Truck → Yard)",
            unit: "20 ft / 40 ft",
            rate: "$55.00 / $85.00",
          },
          {
            description: "Weekend Delivery Surcharge",
            unit: "20 ft / 40 ft",
            rate: "+$2.00 / +$3.00",
          },
          {
            description: "Holiday Delivery Surcharge",
            unit: "20 ft / 40 ft",
            rate: "+$3.00 / +$4.00",
          },
          {
            description: "Reefer Delivery Plug-in (per day)",
            unit: "20 ft / 40 ft",
            rate: "$15.00 / $25.00",
          },
        ],
      },
    ],
    notes: [
      "Delivery and reception charges apply separately.",
      "Advance booking (48 hours) required for weekend or holiday operations.",
      "Customs or transport agency fees not included.",
    ],
  },
  {
    id: "e4",
    title: "4 - Stuffing / Destuffing Operations",
    subtitle: "Rates for cargo packing or unpacking within port area",
    description:
      "Applies to manual or mechanical handling during container packing (stuffing) and unpacking (destuffing).",
    tables: [
      {
        title: "Stuffing / Destuffing Rates (USD per Container)",
        rows: [
          {
            description: "General Cargo (Manual or Forklift)",
            unit: "20 ft / 40 ft",
            rate: "$75.00 / $110.00",
          },
          {
            description: "Bulk or Bagged Cargo",
            unit: "20 ft / 40 ft",
            rate: "$65.00 / $95.00",
          },
          {
            description: "Heavy Lift Cargo (>10 tons)",
            unit: "20 ft / 40 ft",
            rate: "$90.00 / $135.00",
          },
          {
            description: "Hazardous Cargo",
            unit: "20 ft / 40 ft",
            rate: "+200%",
          },
          {
            description: "Reefer Stuffing / Destuffing",
            unit: "20 ft / 40 ft",
            rate: "$90.00 / $130.00",
          },
        ],
      },
    ],
    notes: [
      "Cargo owners must provide their own packing materials.",
      "CPA not responsible for manual handling damage.",
      "Overtime (after 1800 hrs) → +25% on rates.",
    ],
  },
  {
    id: "e5",
    title: "5 - Miscellaneous Surcharges & Conditions",
    subtitle: "Additional tariffs and operational rules under cargo account",
    description:
      "Covers all additional surcharges and regulations related to container handling under cargo account billing.",
    tables: [],
    notes: [
      "All rates are in USD and exclusive of VAT.",
      "Charges billed directly to importers or exporters.",
      "User-requested shifting → standard extra handling rate applies.",
      "Out-of-Gauge (OOG) handling → +100% base rate.",
      "Reefer connection/disconnection fee → $25 per operation.",
      "Damage to CPA equipment → repair cost +15% admin fee.",
    ],
  },
];
