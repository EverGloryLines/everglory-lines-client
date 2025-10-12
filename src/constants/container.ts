export interface Container {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ContainerCardProps {
  container: Container;
  index: number;
}

export interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export interface ContainerGridProps {
  containers: Container[];
}

export const CONTAINERS: Container[] = [
  {
    id: "dry-cargo",
    title: "Dry Cargo Containers",
    description:
      "Suitable for any general cargo and come in the size of 20ft and 40 ft. Corner casting for movement with cargo. Forklift to move the empty unit.",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "Blue dry cargo shipping container",
  },
  {
    id: "high-cube",
    title: "High Cube Containers",
    description:
      "High-cube containers are similar in structure to standard containers, but taller. Suitable for all types general cargo (dry cargo).",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "High cube shipping container",
  },
  {
    id: "refrigerated",
    title: "Refrigerated Containers",
    description:
      "Reefer containers are, simply put, large fridges carried by containerships to move temperature-sensitive goods.",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "White refrigerated container",
  },
  {
    id: "open-top",
    title: "Open Top Containers",
    description:
      "The open-top container is usually used to export or import goods that do not fit in regular containers due to their sizes.",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "Open top container with yellow tarp",
  },
  {
    id: "flat-rack",
    title: "Flat Rack Containers",
    description:
      "Flat rack containers are designed for heavy loads and oversized cargo that cannot fit into standard containers.",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "Flat rack container for oversized cargo",
  },
  {
    id: "tank",
    title: "Tank Containers",
    description:
      "Tank containers are used for transporting liquids, gases, and powdered products in bulk quantities safely and efficiently.",
    imageUrl: "/homepage/container/container.png",
    imageAlt: "Tank container for liquid transport",
  },
];
