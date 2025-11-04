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
    label: "Businesses",
    href: "/our-businesses",
  },
  {
    label: "Services",
    href: "/our-services",
    hasDropdown: true,
    subMenu: [
      { label: "Service Maps", 
        //href: "/our-services/service-maps" 
         href: "/work-in-progress"
      },
      {
        label: "Liner Service",
        href: "/our-services/liner-service",
      },
      {
        label: "Feeder Service",
        href: "/our-services/feeder-service",
      },
      {
        label: "Multimodal Transport",
        href: "/our-services/multimodal-transport",
      },
      {
        label: "Intermodal Transport",
        href: "/our-services/intermodal-transport",
      },
      {
        label: "Terminal Operations",
        //href: "/our-services/terminal-operations",
         href: "/work-in-progress"
      },
      {
        label: "Freight Forwarding",
        href: "/our-services/freight-forwarding",
        hasNestedDropdown: true,
        nestedSubMenu: [
          { label: "Sea",
             //href: "/our-services/sea"
              href: "/work-in-progress" 
            },
          {
            label: "Rail",
            //href: "/our-services/rail",
             href: "/work-in-progress"
          },
          {
            label: "Air",
            //href: "/our-services/air",
             href: "/work-in-progress"
          },
          {
            label: "Road",
            //href: "/our-services/road",
             href: "/work-in-progress"
          },
        ],
      },
      {
        label: "Warehousing",
        //href: "/our-services/warehousing",
         href: "/work-in-progress"
      },
      {
        label: "Other Services",
        //href: "/our-services/other-services",
         href: "/work-in-progress"
      },
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
      { label: "Tariffs", 
        href: "/tariffs" 
        //href: "/work-in-progress"
      },
      { label: "Schedule Of Charges", 
        //href: "/tariffs/schedule-of-charges" 
       href: "/work-in-progress"
      },
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
        //href: "/news/trade-information",
         href: "/work-in-progress",
        hasNestedDropdown: true,
        nestedSubMenu: [
          { label: "Terms",
             //href: "/news/trade-information/terms" 
             href: "/work-in-progress"
            },
          { label: "Incoterms", 
            //href: "/news/trade-information/incoterms" 
           href: "/work-in-progress"
          },
          {
            label: "Trading Terms",
            //href: "/news/trade-information/trading-terms",
             href: "/work-in-progress"
          },
          {
            label: "Bill Of Ladding Terms",
            //href: "/news/trade-information/bill-of-ladding-terms",
             href: "/work-in-progress"
          },
          {
            label: "admiralty terms",
            //href: "/news/trade-information/admiralty-terms",
             href: "/work-in-progress"
          },
        ],
      },
      { label: "Views Related", 
        //href: "/news/views-related" 
       href: "/work-in-progress"
      },
      { label: "Reader's Opinion", 
        //href: "/news/readers-opinion" 
       href: "/work-in-progress"
      },
    ],
  },
  {
    label: "Export",
    href: "/export",
    hasDropdown: true,
    subMenu: [
      { label: "Quote", 
        //href: "/export/quote" 
       href: "/work-in-progress"
      },
      { label: "Other Information",
         //href: "/export/other-information" 
         href: "/work-in-progress"
        },
    ],
  },
  {
    label: "Track",
    //href: "/track",
     href: "/work-in-progress"
  },
  {
    label: "Organogram",
    href: "/organogram",
    hasDropdown: true,
    subMenu: [
      { label: "Network", 
        //href: "/organogram/network" 
         href: "/work-in-progress"
      },
      { label: "Headquarters", 
        //href: "/organogram/headquarters" 
         href: "/work-in-progress"
      },
      { label: "Regional Offices", 
       // href: "/organogram/regional-offices" 
       href: "/work-in-progress"
      },
      { label: "Offices", 
        href: "/organogram/offices" 
      },
      { label: "General Agents",
         //href: "/organogram/general-agents"
         href: "/work-in-progress"
        },
      { label: "Port Agents", 
        //href: "/organogram/port-agents" 
       href: "/work-in-progress"
      },
      { label: "Booking Agents", href: "/organogram/booking-agents" },
    ],
  },
  {
    label: "Career",
    //href: "/career",
     href: "/work-in-progress"
  },
  {
    label: "Contact",
    //href: "/contact",
     href: "/work-in-progress"
  },
];

export const taglines = [
  "All Water and Combined Container Liner Service Direct To Dhaka",
  "Not 60 Days, Only 6 Days Transit Time From All Inland Points/ICDs of India via Haldia to Pangaon, Dhaka",
  "Connecting Continents Through Reliable Maritime Solutions",
  "Your Trusted Partner in Global Shipping and Logistics",
];
