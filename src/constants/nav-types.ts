export interface SubMenuItem {
  label: string;
  href: string;
  hasNestedDropdown?: boolean;
  nestedSubMenu?: SubMenuItem[];
}

export interface MenuItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  subMenu?: SubMenuItem[];
}

export const navigationConfig: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Businesses",
    href: "/our-businesses",
  },
  {
    label: "Our Services",
    href: "/our-services",
    hasDropdown: true,
    subMenu: [
      { label: "Service Maps", href: "/our-services/service-maps" },
      {
        label: "Logistics Solutions",
        href: "/our-services/logistics-solutions",
      },
      { label: "Operations", href: "/our-services/operations" },
      { label: "Freight Forwarding", href: "/our-services/freight-forwarding" },
      { label: "Other Services", href: "/our-services/other-services" },
    ],
  },
  {
    label: "Fleet",
    href: "/fleet",
    hasDropdown: true,
    subMenu: [
      { label: "Vessel", href: "/fleet/vessel" },
      { label: "Container", href: "/fleet/container" },
      { label: "Train", href: "/fleet/train" },
      { label: "Trailer", href: "/fleet/trailer" },
      { label: "Truck", href: "/fleet/truck" },
    ],
  },
  {
    label: "Tariffs",
    href: "/tariffs",
    hasDropdown: true,
    subMenu: [
      { label: "Tariffs", href: "/tariffs" },
      { label: "Schedule Of Charges", href: "/tariffs/schedule-of-charges" },
    ],
  },
  {
    label: "News",
    href: "/news",
    hasDropdown: true,
    subMenu: [
      { label: "Historic News", href: "/news/historic-news" },
      { label: "External News", href: "/news/external-news" },
      { label: "Press Release", href: "/news/press-release" },
      { label: "In House News", href: "/news/in-house-news" },
      { label: "Academic News", href: "/news/academic-news" },
      {
        label: "Trade Information",
        href: "/news/trade-information",
        hasNestedDropdown: true,
        nestedSubMenu: [
          { label: "Terms", href: "/news/trade-information/terms" },
          { label: "Incoterms", href: "/news/trade-information/incoterms" },
          {
            label: "Trading Terms",
            href: "/news/trade-information/trading-terms",
          },
          {
            label: "Bill Of Ladding Terms",
            href: "/news/trade-information/bill-of-ladding-terms",
          },
          {
            label: "admiralty terms",
            href: "/news/trade-information/admiralty-terms",
          },
        ],
      },
      { label: "Views Related", href: "/news/views-related" },
      { label: "Reader's Opinion", href: "/news/readers-opinion" },
    ],
  },
  {
    label: "Export",
    href: "/export",
    hasDropdown: true,
    subMenu: [
      { label: "Quote", href: "/export/quote" },
      { label: "Other Information", href: "/export/other-information" },
    ],
  },
  {
    label: "Track",
    href: "/track",
  },
  {
    label: "Organogram",
    href: "/organogram",
    hasDropdown: true,
    subMenu: [
      { label: "Network", href: "/organogram/network" },
      { label: "Headquarters", href: "/organogram/headquarters" },
      { label: "Regional Offices", href: "/organogram/regional-offices" },
      { label: "Offices", href: "/organogram/offices" },
      { label: "General Agents", href: "/organogram/general-agents" },
      { label: "Port Agents", href: "/organogram/port-agents" },
      { label: "Booking Agents", href: "/organogram/booking-agents" },
    ],
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const taglines = [
  "All Water and Combined Container Liner Service Direct To Dhaka",
  "Not 60 Days, Only 6 Days Transit Time From All Inland Points/ICDs of India via Haldia to Pangaon, Dhaka",
  "Connecting Continents Through Reliable Maritime Solutions",
  "Your Trusted Partner in Global Shipping and Logistics",
];
