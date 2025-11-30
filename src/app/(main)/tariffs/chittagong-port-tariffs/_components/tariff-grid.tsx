"use client";

import { TariffCard } from "./tariff-card";

const TARIFF_CARDS = [
  {
    id: 1,
    icon: "Ship",
    title: "Dues & Charges on Vessels",
    description:
      "Covers all vessel-related fees like port dues, pilotage charges, and more.",
    pageLink: "/dues-and-charges-vessels",
  },
  {
    id: 2,
    icon: "Anchor",
    title: "Dues & Charges on Conventional Cargo",
    description:
      "Defines handling, storage, wharfage, and delivery rates for non-containerized cargo",
    pageLink: "/dues-and-charges-cargo",
  },
  {
    id: 3,
    icon: "Cog",
    title: "Charges for General Services",
    description:
      "Includes hire charges for port equipment, emergency services, and licensing",
    pageLink: "/charges-for-general-services",
  },
  {
    id: 4,
    icon: "Container",
    title: "Container Charges (Vessel Account)",
    description:
      "Specifies loading, storage, and extra-handling rates for containers",
    pageLink: "/container-charges-vessel",
  },
  {
    id: 5,
    icon: "Truck",
    title: "Container Charges (Cargo Account)",
    description:
      "Outlines dues, delivery, and reception rates for shippers or consignees",
    pageLink: "/container-charges-cargo",
  },
  {
    id: 6,
    icon: "Waves",
    title: "Miscellaneous Charges & Boats",
    description:
      "Lists small boat and related service charges, including inland craft dues",
    pageLink: "/boats-and-miscellaneous",
  },
];

export function TariffGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {TARIFF_CARDS.map((card, index) => (
        <TariffCard key={card.id} card={card} index={index} />
      ))}
    </div>
  );
}
