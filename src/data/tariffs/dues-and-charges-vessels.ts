export interface KeyFigure {
  label: string;
  value: string | number;
}

export interface DuesServiceCardType {
  title: string;
  description: string;
  keyFigures: KeyFigure[];
}

export const duesServicesData: DuesServiceCardType[] = [
  {
    title: "Port Dues",
    description:
      "Every vessel entering or leaving the port boundary is subject to port dues calculated on the vessel’s gross tonnage (GT). The charge applies once per entry, covering administrative, navigation, and port-infrastructure usage. Dues vary according to vessel type and purpose, with additional surcharges for dangerous goods or vessels at anchorage beyond the standard period.",
    keyFigures: [
      {
        label: "Standard ocean going vessel",
        value: "USD 0.306 per GT per entry",
      },
      { label: "Vessels under 100 GT", value: "600" },
      {
        label: "Tankers carrying hazardous cargo +25% surcharge",
        value: "+25%",
      },
      { label: "Idle or derelict vessels", value: "+50%" },
      {
        label: "Port entry clearance renewal fee for SOR request",
        value: "50",
      },
    ],
  },
  {
    title: "Pilotage Services",
    description:
      "Pilotage within Chittagong Port is compulsory for all foreign-going and large coastal vessels. Licensed pilots guide vessels through restricted channels, ensuring safe navigation. The fee structure depends on the vessel’s GT range, movement type (inward/outward), and operation time (day/night).",
    keyFigures: [
      { label: "Minimum pilotage fee per movement", value: "USD 800" },
      { label: "Vessels 10,000 - 20,000 GT USD 1.800 - 2,200", value: "" },
      { label: "Additional night operation", value: "25%" },
      { label: "Cancellation after pilot boarding 50% of fee", value: "" },
      { label: "Shifting between berths (flat rate)", value: "USD 400" },
    ],
  },
  {
    title: "Tug Assistance & Towage",
    description:
      "Port-operated tugs provide berthing and un-berthing support as well as towage for vessels within the outer and inner anchorages. Tug usage charges are based on the vessel’s tonnage, duration of service, and channel zone. Emergency or weather-related assistance incurs higher rates due to operational risks.",
    keyFigures: [
      { label: "10,000 - 20,000 GT vessels per tug", value: "USD 2,050" },
      {
        label: "Beyond 20,000 GT will be charged (per tug per move)",
        value: "USD 2,600",
      },
      { label: "Idle time of tug waiting", value: "USD 75 per hour" },
      { label: "Emergency tow outside harbor (minimum)", value: "USD 3,000" },
      { label: "Towage canceled after dispatch (penalty)", value: "USD 500" },
    ],
  },
  {
    title: "Berthing & Mooring Services",
    description:
      "Charges apply for occupying port jetties, buoys, or moorings. Fees are time-based and depend on vessel size and berth type. Overstaying beyond the permitted free hours results in penalties, while early departure rebates may be offered for efficient turnaround.",
    keyFigures: [
      { label: "Standard berth usage (per GT per hour)", value: "USD 0.028" },
      { label: "Minimum charge (per berthing session)", value: "USD 100" },
      {
        label: "Occupying berth (24 h beyond allocation) penalty",
        value: "+ 50%",
      },
      { label: "Mooring buoy usage fee (per Day)", value: "USD 120" },
      { label: "Berth shifting operation (per shift)", value: "USD 150" },
    ],
  },
  {
    title: "Fresh Water & Port Services",
    description:
      "Water barges supply fresh water and other utilities to vessels at anchor or berth. Rates are levied per ton of water supplied, inclusive of barge delivery and hose connection service. Additional service fees apply for waste removal or on-board assistance.",
    keyFigures: [
      { label: "Fresh water supply (per ton)", value: "USD 4.50" },
      { label: "Service barges stand-by charge (per hour)", value: "USD 60" },
      { label: "Garbage/waste collection (per trip)", value: "USD 80" },
      { label: "Lighting barges (per shift)", value: "USD 100" },
      { label: "Overtime crew surcharge (per hour)", value: "USD 25" },
    ],
  },
  {
    title: "Passenger & Small Craft Dues",
    description:
      "Passenger vessels, launches, and small craft using port facilities are assessed fixed charges per head or per trip. These dues contribute to terminal maintenance, customs facilities, and security operations at embarkation and disembarkation points.",
    keyFigures: [
      { label: "Passenger fee (per person)", value: "USD " },
      { label: "Coastal ferry dues (per GT)", value: "USD 0.15" },
      { label: "Small launch registration (per year)", value: "USD 50" },
      { label: "Crew boat landing permit (per trip)", value: "USD 20" },
      { label: "Harbor service badge (per member)", value: "USD 10" },
    ],
  },
];
