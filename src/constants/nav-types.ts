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
      // {
      //   label: "Service Maps",
      //   //href: "/our-services/service-maps"
      //   href: "/work-in-progress",
      // },
      {
        label: "Sailing Schedule",
        href: "/our-services/sailing-schedule",
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
      }
    ],
  },
  {
    label: "Fleet",
    href: "/fleet",
    hasDropdown: true,
    subMenu: [
      { label: "Vessel", href: "/fleet/vessel" },
      { label: "Container", href: "/fleet/container" },
      {
        label: "Train",
        href: "/work-in-progress",
        // href: "/fleet/train"
      },
      {
        label: "Trailer",
        href: "/work-in-progress",
        // href: "/fleet/trailer"
      },
      {
        label: "Truck",
        href: "/work-in-progress",
        // href: "/fleet/truck"
      },
    ],
  },
  {
    label: "Tariffs",
    href: "/tariffs",
    hasDropdown: true,
    subMenu: [
      {
        label: "Our Tariffs",
        href: "/work-in-progress",
        //href: "/tariffs/our-tariffs",
      },
      {
        label: "Chittagong Port Tariffs",
        href: "/tariffs/chittagong-port-tariffs",
      },
    ],
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Organogram",
    href: "/organogram",
    hasDropdown: true,
    subMenu: [
      { label: "Offices", href: "/organogram/offices" },
      { label: "Booking Agents", href: "/organogram/booking-agents" },
    ],
  },
  {
    label: "Schedule",
    href: "/sailing-schedule",
  },
  {
    label: "Contact",
    //href: "/career",
    href: "/contact",
  },
  {
    label: "Career",
    href: "/career",
  },
];

export const taglines = [
  "All Water and Combined Container Liner Service Direct To Dhaka",
  "Not 60 Days, Only 6 Days Transit Time From All Inland Points/ICDs of India via Haldia to Pangaon, Dhaka",
  "Connecting Continents Through Reliable Maritime Solutions",
  "Your Trusted Partner in Global Shipping and Logistics",
];
