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

export interface VesselDescription {
  vesselName: string;
  vesselType: string;
  built: string;
  launch: string;
  yard: string;
  imoNumber: string;
  callSign: string;
  portOfRegistry: string;
  flag: string;
  classNotation: string;
}

export interface VesselMainParticulars {
  teuCapacity: string;
  loaLbpBeam: string;
  depthMoulded: string;
  grtNrt: string;
  draftFullContainer: string;
  draftLightContainer: string;
  draftBlastArrival: string;
  dwtScantling: string;
  numberOfHold: string;
  numberOfHatchCover: string;
  mainEngine: string;
}

export interface VesselContainerCapacities {
  onDeck: string;
  inHolds: string;
  total: string;
}

export interface VesselHomogenousLoading {
  "14tPerTeu": string;
}

export interface VesselCargoHatchCovers {
  type: string;
}

export interface Vessel {
  id: string;
  name: string;
  image: string;
  description: VesselDescription;
  mainParticulars: VesselMainParticulars;
  containerCapacities: VesselContainerCapacities;
  homogenousLoading: VesselHomogenousLoading;
  cargoHatchCovers: VesselCargoHatchCovers;
}
