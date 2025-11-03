export interface AgentInfo {
  point: string;
  agent: string;
  cell: string;
  email: string;
  portImg: string;
}

export interface Country {
  name: string;
  code: string;
  imgSrc: string;
  agents: AgentInfo[];
}

export const agentData: Country[] = [
  {
    name: "India",
    code: "IN",
    imgSrc: "/organogram/offices/india-map.svg",
    agents: [
      {
        point: "Kolkata",
        agent: "Regal Container Line Pvt Ltd",
        cell: "+91 983 022 3344",
        email: "sugata@regalcontainer.in",
        portImg: "/organogram/offices/kolkata-port.webp",
      },
      {
        point: "Haldia",
        agent: "Mags Impex (Shipping) Pvt Ltd",
        cell: "+91 983 685 2555",
        email: "as@magsgroup.co.in",
        portImg: "/organogram/offices/haldia-port.webp",
      },
      {
        point: "Nagpur",
        agent: "INBD Express Pvt Ltd",
        cell: "+91 997 136 6647",
        email: "sanjaysaga@hotmail.com",
        portImg: "/organogram/offices/nagpur-port.jpg",
      },
      {
        point: "Delhi-Gurgaon",
        agent: "INBD Express Pvt Ltd",
        cell: "+91 870 060 1613",
        email: "md.anas@inbdexpress.in",
        portImg: "/organogram/offices/gaurgaon-port.jpeg",
      },
      {
        point: "Ludhiana",
        agent: "PGA Shipping Services India Pvt Ltd",
        cell: "+91 771 956 3193",
        email: "roopak@pgass.com",
        portImg: "/organogram/offices/ludhiana-port.webp",
      },
      {
        point: "Mumbai",
        agent: "PGA Shipping Services India Pvt Ltd",
        cell: "+91 771 956 3193",
        email: "sanjay@pgass.com",
        portImg: "/organogram/offices/mumbai-port.webp",
      },
      {
        point: "Mundra",
        agent: "PGA Shipping Services India Pvt Ltd",
        cell: "+91 982 323 0050",
        email: "roopak@pgass.com",
        portImg: "/organogram/offices/mundra-port.png",
      },
    ],
  },
  {
    name: "Bangladesh",
    code: "BD",
    imgSrc: "/organogram/offices/bd-map.svg",
    agents: [
      {
        point: "Dhaka",
        agent: "River Edge Shipping Limited",
        cell: "+880 180 697 2734",
        email: "sales.dhaka@riveredgeship.com",
        portImg: "/organogram/offices/dhaka-port-img.webp",
      },
      {
        point: "Chittagong",
        agent: "River Edge Shipping Limited",
        cell: "+880 171 104 3544",
        email: "sales.chittagong@riveredgeship.com",
        portImg: "/organogram/offices/chittagong-port.webp",
      },
      {
        point: "Pangaon",
        agent: "River Edge Shipping Limited",
        cell: "+880 189 645 9540",
        email: "sales.pangaon@riveredgeship.com",
        portImg: "/organogram/offices/pangaon-port.jpg",
      },
      {
        point: "Mongla-Khulna",
        agent: "River Edge Shipping Limited",
        cell: "+880 189 645 9538",
        email: "sales.khulna@riveredgeship.com",
        portImg: "/organogram/offices/mongla-port.jpg",
      },
    ],
  },
  {
    name: "Nepal",
    code: "NP",
    imgSrc: "/organogram/offices/nepal-map.svg",
    agents: [
      {
        point: "Kathmandu",
        agent: "Kathmandu Container Line Pvt Ltd",
        cell: "+977 985 112 7611",
        email: "sales@kathmandulines.com",
        portImg: "/organogram/offices/nepal-port.jpg",
      },
    ],
  },
  {
    name: "Singapore",
    code: "SG",
    imgSrc: "/organogram/offices/singapore-map.svg",
    agents: [
      {
        point: "Singapore",
        agent: "New Era Shipping Pte Ltd",
        cell: "+65 9807 0464",
        email: "ayna@newara-shipping.com",
        portImg: "/organogram/offices/srilanka-port.jpg",
      },
    ],
  },
  {
    name: "Sri Lanka",
    code: "LK",
    imgSrc: "/organogram/offices/srilanka-map.svg",
    agents: [
      {
        point: "Colombo",
        agent: "Premier Shipping Pvt Ltd",
        cell: "+94 72 226 0520",
        email: "kadir@premierlk.com",
        portImg: "/organogram/offices/srilanka-port.jpg",
      },
    ],
  },
  {
    name: "UAE",
    code: "AE",
    imgSrc: "/organogram/offices/uae-map.svg",
    agents: [
      {
        point: "Dubai",
        agent: "INBD Alliance Shipping Services LLC",
        cell: "+971 4 666 7050",
        email: "info@inbdalliance.com",
        portImg: "/organogram/offices/jebel-ali-port.jpg",
      },
      {
        point: "Sharjah",
        agent: "River Edge Shipping Services LLC",
        cell: "+971 4 272 7147",
        email: "admin@riveredge.ae",
        portImg: "/organogram/offices/sharjah-port.jpeg",
      },
    ],
  },
  {
    name: "Malaysia",
    code: "MY",
    imgSrc: "/organogram/offices/malaysia-map.svg",
    agents: [
      {
        point: "Port Klang",
        agent: "Pasti Berjaya Sdn Bhd",
        cell: "+60 12 211 0506",
        email: "peter@pastiberjaya.com",
        portImg: "/organogram/offices/malaysia-port.jpeg",
      },
    ],
  },
  {
    name: "Vietnam",
    code: "VN",
    imgSrc: "/organogram/offices/vietnam.svg",
    agents: [
      {
        point: "Ho Chi Minh",
        agent: "Amasis Shipping Company",
        cell: "+84 908 226 999",
        email: "ha.chau@amss.com.vn",
        portImg: "/organogram/offices/vietnam-port.jpg",
      },
    ],
  },
];
