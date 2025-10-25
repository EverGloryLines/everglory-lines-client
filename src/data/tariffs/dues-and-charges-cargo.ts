export interface TariffRow {
  description: string;
  unit: string;
  rate: string;
}

export interface AccordionSection {
  id: string;
  title: string;
  subtitle: string;
  tables: {
    title: string;
    rows: TariffRow[];
  }[];
  notes: string[];
}

export const duesAndChargesCargo: AccordionSection[] = [
  {
    id: "b1",
    title: "1 - Cargo Dues",
    subtitle: "Charges for handling and processing conventional cargo",
    tables: [
      {
        title: "General Cargo Dues",
        rows: [
          { description: "Per ton of cargo", unit: "Ton", rate: "$12.50" },
          {
            description: "Minimum charge per shipment",
            unit: "Shipment",
            rate: "$250.00",
          },
          {
            description: "Break bulk cargo surcharge",
            unit: "Ton",
            rate: "$2.50",
          },
          {
            description: "Heavy lift surcharge (>50 tons)",
            unit: "Ton",
            rate: "$5.00",
          },
        ],
      },
      {
        title: "Special Cargo Categories",
        rows: [
          {
            description: "Breakbulk general cargo",
            unit: "Ton",
            rate: "$13.75",
          },
          { description: "Project cargo", unit: "Ton", rate: "$18.50" },
          { description: "Hazardous materials", unit: "Ton", rate: "$22.00" },
          { description: "Perishable goods", unit: "Ton", rate: "$15.25" },
        ],
      },
    ],
    notes: [
      "Cargo dues are calculated based on the actual weight or volume, whichever is greater.",
      "Minimum charges apply to all shipments regardless of size.",
      "Surcharges are cumulative and apply in addition to base rates.",
    ],
  },
  {
    id: "b2",
    title: "2 - Wharfage Charges",
    subtitle: "Fees for use of wharf facilities and berth space",
    tables: [
      {
        title: "Wharfage Rates",
        rows: [
          { description: "Per ton of cargo", unit: "Ton", rate: "$8.75" },
          { description: "Per vessel per day", unit: "Day", rate: "$1,500.00" },
          {
            description: "Berth occupancy (per 24 hours)",
            unit: "24hrs",
            rate: "$2,000.00",
          },
          {
            description: "Overtime charges (after 18:00)",
            unit: "Hour",
            rate: "$150.00",
          },
        ],
      },
      {
        title: "Vessel Size Categories",
        rows: [
          {
            description: "Small vessels (0-5,000 DWT)",
            unit: "Day",
            rate: "$1,200.00",
          },
          {
            description: "Medium vessels (5,001-15,000 DWT)",
            unit: "Day",
            rate: "$1,800.00",
          },
          {
            description: "Large vessels (15,001-40,000 DWT)",
            unit: "Day",
            rate: "$2,500.00",
          },
          {
            description: "Very large vessels (>40,000 DWT)",
            unit: "Day",
            rate: "$3,500.00",
          },
        ],
      },
    ],
    notes: [
      "Wharfage charges are based on the greater of weight or volume.",
      "Vessel size charges are per 24-hour period or part thereof.",
      "Overtime charges apply to operations conducted outside standard working hours.",
    ],
  },
  {
    id: "b3",
    title: "3 - Storage Charges",
    subtitle: "Fees for cargo storage on port premises",
    tables: [
      {
        title: "Storage Rates (Per Ton Per Day)",
        rows: [
          { description: "Days 1-5", unit: "Ton/Day", rate: "$0.50" },
          { description: "Days 6-15", unit: "Ton/Day", rate: "$0.75" },
          { description: "Days 16-30", unit: "Ton/Day", rate: "$1.00" },
          { description: "Days 31+", unit: "Ton/Day", rate: "$1.50" },
        ],
      },
      {
        title: "Storage by Cargo Type",
        rows: [
          { description: "General breakbulk", unit: "Ton/Day", rate: "$0.50" },
          { description: "Heavy machinery", unit: "Ton/Day", rate: "$1.25" },
          {
            description: "Hazardous materials",
            unit: "Ton/Day",
            rate: "$2.00",
          },
          { description: "Refrigerated cargo", unit: "Ton/Day", rate: "$3.50" },
        ],
      },
    ],
    notes: [
      "Storage charges commence 24 hours after vessel discharge.",
      "Minimum storage charge per shipment is $100.00 per day.",
      "Hazardous materials require specialized storage facilities with additional fees.",
    ],
  },
  {
    id: "4",
    title: "4 - Delivery & Reception Charges",
    subtitle: "Fees for cargo delivery and reception services",
    tables: [
      {
        title: "Delivery Charges",
        rows: [
          { description: "Per ton of cargo", unit: "Ton", rate: "$6.50" },
          {
            description: "Minimum charge per shipment",
            unit: "Shipment",
            rate: "$150.00",
          },
          {
            description: "Weekend delivery surcharge",
            unit: "Ton",
            rate: "$2.00",
          },
          {
            description: "Holiday delivery surcharge",
            unit: "Ton",
            rate: "$3.00",
          },
        ],
      },
      {
        title: "Reception Charges",
        rows: [
          { description: "Per ton of cargo", unit: "Ton", rate: "$5.75" },
          {
            description: "Minimum charge per shipment",
            unit: "Shipment",
            rate: "$125.00",
          },
          {
            description: "Weekend reception surcharge",
            unit: "Ton",
            rate: "$1.75",
          },
          {
            description: "Holiday reception surcharge",
            unit: "Ton",
            rate: "$2.50",
          },
        ],
      },
    ],
    notes: [
      "Delivery and reception charges are separate and both apply to cargo movements.",
      "Weekend and holiday surcharges apply to operations on Saturdays, Sundays, and public holidays.",
      "Advance notice of 48 hours is required for weekend and holiday operations.",
    ],
  },
];
