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

export const boatsMiscData: AccordionSection[] = [
  {
    id: "f1",
    title: "F1.1 - Licenses for Passenger Boats",
    subtitle:
      "Surveying, registration and licensing charges for passenger boats",
    description:
      "Passenger boat licenses cover surveying, registration, issuance and renewals of certificates required to operate passenger vessels within port limits. Licenses are payable per vessel and for the person in charge where applicable.",
    tables: [
      {
        title: "Passenger Boat License Fees (Tk)",
        rows: [
          {
            description: "Survey / Registration / License (new or renewal)",
            unit: "Per license",
            rate: "11.50 Tk",
          },
          {
            description: "License for person in charge (new/renewal/duplicate)",
            unit: "Per license",
            rate: "5.75 Tk",
          },
          {
            description: "Endorsement of owner on Register and License",
            unit: "Per license",
            rate: "11.50 Tk",
          },
        ],
      },
    ],
    notes: [
      "Fees apply to each vessel license and to each person in charge requiring a license.",
      "Duplicate licenses carry the same fee as renewals (5.75 Tk for person in charge).",
      "Endorsement fee applies when owners details are changed on the register.",
    ],
  },
  {
    id: "f2",
    title: "F1.2 - Licenses for Cargo Boats",
    subtitle: "Surveying and licensing charges for cargo-carrying boats",
    description:
      "Cargo boats (small freight launches, lighters, coasters) require surveying and licensing. Charges are calculated per ton or part thereof with a minimum fee to ensure small craft contribute fairly to administration costs.",
    tables: [
      {
        title: "Cargo Boat License Fees (Tk)",
        rows: [
          {
            description: "Survey / Registration / License",
            unit: "Per ton or part (min)",
            rate: "2.30 Tk per ton (minimum 10.00 Tk)",
          },
          {
            description: "License for person in charge (new/renewal/duplicate)",
            unit: "Per license",
            rate: "5.75 Tk",
          },
          {
            description: "Endorsement of owner on Register and License",
            unit: "Per license",
            rate: "11.50 Tk",
          },
        ],
      },
    ],
    notes: [
      "Minimum charge of 10.00 Tk applies irrespective of tonnage for small cargo boats.",
      "Owner endorsement fee (11.50 Tk) applies when registering or transferring ownership.",
      "License for person in charge must be carried and produced on demand.",
    ],
  },
  {
    id: "f3",
    title: "F1.3 - Hire of Licensed Boats (Passenger Transit)",
    subtitle:
      "Charges for use of licensed boats for transit within port limits",
    description:
      "Licensed boat hire for passenger transit within port limits is charged per passenger. Rates are designed for short transfers such as shore-to-ship or short port transits and include base fares, plus defined extra charges for luggage and night operations.",
    tables: [
      {
        title: "Passenger Boat Hire & Extras (Tk)",
        rows: [
          {
            description: "Transit within port limits (base fare)",
            unit: "Per passenger",
            rate: "1.15 Tk",
          },
          {
            description: "Excess luggage charge (over 9 kg)",
            unit: "Per 37 kg or part",
            rate: "+50%",
          },
          {
            description: "Night hire surcharge (19:00–05:00)",
            unit: "Multiplier",
            rate: "+100%",
          },
        ],
      },
    ],
    notes: [
      "Base fare (1.15 Tk) is charged per passenger for transit within port limits.",
      "Excess luggage is calculated per 37 kg or part thereof, at +50% of base baggage unit charge.",
      "Night surcharge doubles the base fare for services between 19:00 and 05:00.",
    ],
  },
  {
    id: "f4",
    title: "F1.4 - Discounts & Special Cases",
    subtitle:
      "Permitted discounts and reduced fares for certain passengers and routes",
    description:
      "Certain passenger categories and transit types qualify for discounts. These reductions are intended for children and short shore-to-mooring transits, supporting affordability and operational efficiency for routine port movements.",
    tables: [
      {
        title: "Discounts & Special Transit (Tk)",
        rows: [
          {
            description: "Passengers under 12 years",
            unit: "Per passenger",
            rate: "-50%",
          },
          {
            description: "Transit between shore and steamers/boats at moorings",
            unit: "Per passenger",
            rate: "-50%",
          },
        ],
      },
    ],
    notes: [
      "Discounts are applied at the time of fare calculation and must be supported by age identification where required.",
      "Shore-to-steamer discounts apply only when the boat delivers passengers directly to the moored vessel.",
    ],
  },
  {
    id: "f5",
    title: "F1.5 - Miscellaneous Small-Craft Fees",
    subtitle: "Other small-boat related administrative and occasional charges",
    description:
      "This section captures minor but commonly used fees including duplicate license replacement, endorsements, and occasional regulatory charges that cargo or passenger boats may incur while operating under port jurisdiction.",
    tables: [
      {
        title: "Miscellaneous Fees (Tk)",
        rows: [
          {
            description: "Duplicate / replacement license (person in charge)",
            unit: "Per license",
            rate: "5.75 Tk",
          },
          {
            description: "Endorsement of owner on register/license",
            unit: "Per license",
            rate: "11.50 Tk",
          },
          {
            description:
              "Minimum cargo boat license (applies when tonnage small)",
            unit: "Minimum",
            rate: "10.00 Tk",
          },
        ],
      },
    ],
    notes: [
      "All licenses and endorsement fees are payable on issue or renewal.",
      "Failure to display a valid license may result in enforcement action and additional fines.",
      "These small-craft fees are set in BDT (Tk) and are separate from larger vessel tariffs denominated in USD.",
    ],
  },
];
