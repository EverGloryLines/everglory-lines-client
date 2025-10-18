import React from "react";

const icons = {
  // Global Shipping (World/Globe Icon)
  Global: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21.75c-5.166 0-9.375-3.957-9.375-8.834C2.625 7.084 7.234 3 12 3s9.375 4.084 9.375 8.834c0 4.877-4.209 8.833-9.375 8.833zM12 21.75V3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.625 13.5h18.75m-15 3h11.25m-11.25-6h11.25m-11.25-6h11.25"
      />
    </svg>
  ),
  // Multimodal Transport (Package/Truck/Ship Icon)
  Multimodal: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 10.5V6.75a2.25 2.25 0 012.25-2.25h4.5a2.25 2.25 0 012.25 2.25v2.25m-4.5 9.75l-4.5-4.5m4.5 4.5V11.25M17.25 19.5L12.75 15M17.25 19.5l4.5-4.5m-4.5 4.5H19.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25h-5.636a2.25 2.25 0 00-1.296.386l-2.73 1.911a2.25 2.25 0 00-1.296-.386H4.5A2.25 2.25 0 002.25 6.75v12.75A2.25 2.25 0 004.5 21h12.75"
      />
    </svg>
  ),
  // Feeder/Short-Sea Liner (Ship Icon)
  Feeder: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15v3.75m0 0a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 18v-3.75m18.75 0H2.25m18.75 0h.75m-20.25 0H2.25m0 0A2.25 2.25 0 014.5 13.5h15c1.243 0 2.25.996 2.25 2.25v-3.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v3.75"
      />
    </svg>
  ),
  // Bulk & Project Shipping (Crane/Heavy Lift Icon)
  BulkProject: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12h2.25m0 0a2.25 2.25 0 004.5 0m4.5 0a2.25 2.25 0 004.5 0M21.75 12h-2.25m-18 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75m-3 0a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75m-3 0V15m3-3V9m-6-3h12a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-4.5A2.25 2.25 0 016.75 6z"
      />
    </svg>
  ),
  // Cross-Trade & Logistics Management (Arrows/Flow Icon)
  LogisticsCrossTrade: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 4.5l5.25 5.25-5.25 5.25m7.5-6.75l-5.25-5.25 5.25-5.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 16.5l-5.25-5.25 5.25-5.25M6 4.5h12a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016 4.5z"
      />
    </svg>
  ),
  // Rail-Sea Combined Services (Train & Ship Icon)
  RailSea: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 16.5V3.75m0 0L3 9.75m10.5-6V9.75m0 0l10.5 5.25m-21 2.25l-.75.75m-.75 0h1.5a.75.75 0 00.75-.75V15h21v3.75c0 .414-.336.75-.75.75H13.5"
      />
    </svg>
  ),
};

const businessActivities = [
  {
    icon: icons.Global,
    title: "International Shipping & Container Liner",
    description:
      "Offering comprehensive global container liner services, connecting major ports and ensuring efficient, reliable, and secure transportation of standard and specialised containers across all oceans.",
  },
  {
    icon: icons.Multimodal,
    title: "Integrated Multimodal Transport",
    description:
      "Seamlessly combining various transport modes—sea, road, and rail—to provide door-to-door solutions that optimize supply chain efficiency and reduce overall transit time for your cargo.",
  },
  {
    icon: icons.Feeder,
    title: "Feeder & Short-Sea Liner Services",
    description:
      "Specialised regional and coastal transport services, acting as the crucial link between smaller ports and global hubs to facilitate the flow of international cargo to its final destination.",
  },
  {
    icon: icons.BulkProject,
    title: "Bulk, Breakbulk & Project Shipping",
    description:
      "Expert handling of non-containerised cargo, including large-volume commodities (bulk) and complex, oversized, or heavy-lift items (project cargo) requiring bespoke logistics planning and execution.",
  },
  {
    icon: icons.LogisticsCrossTrade,
    title: "Foreign Trade Linked Logistics & Cross-Trade",
    description:
      "Managing complex logistical requirements for international trade, including customs and documentation, and executing cross-trade shipments that move cargo directly between two foreign ports.",
  },
  {
    icon: icons.RailSea,
    title: "Rail-Sea Combined Feeder & Liner Services",
    description:
      "Utilising the efficiency of rail alongside sea transport to offer robust, eco-friendly, and cost-effective intermodal solutions, particularly for inland cargo connections to port terminals.",
  },
];

export function BusinessActivitySection() {
  return (
    <>
      {/* Initial Section Description */}
      <p className="mb-10 text-base lg:text-lg text-pretty leading-relaxed text-muted-foreground font-sans font-normal">
        As a leading player in maritime commerce and logistics, our core
        business is to provide a full spectrum of shipping and transportation
        solutions. We ensure the seamless and efficient movement of cargo
        globally, connecting your supply chain from origin to final destination
        through our diverse and specialised services.
      </p>

      {/* Card Layout for Business Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessActivities.map((activity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-none border border-border bg-card hover:scale-102 hover:shadow-md transition-all duration-300"
          >
            <div className="text-primary mb-4">{activity.icon}</div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              {activity.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans font-normal">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
