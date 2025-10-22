export interface ContainerSpec {
  id: string;
  title: string;
  category:
    | "standard"
    | "high-cube"
    | "open-top"
    | "flatrack"
    | "platform"
    | "refrigerated"
    | "bulk"
    | "tank"
    | "pallet-wide";
  image: string;
  realWorldImages: string[];
  specs: {
    insideLength: { mm: number; ft: string };
    insideWidth: { mm: number; ft: string };
    insideHeight: { mm: number; ft: string };
    doorWidth?: { mm: number; ft: string };
    doorHeight?: { mm: number; ft: string };
    maxStowHeight?: { mm: number; ft: string };
    capacity: { m3: number };
    tareWeight: { kg: number; lbs: number };
    maxGrossWeight: { kg: number; lbs: number };
    maxPayload: { kg: number; lbs: number };
  };
  description: (string | { text: string; nested?: string[] })[];
}

export type ContainerCategory = ContainerSpec["category"];
