import { Vessel } from "@/types";
import { VesselHeader } from "./vessel-header";
import { VesselInfoSection } from "./vessel-info-section";

interface VesselDetailsProps {
  vessel: Vessel;
}

export function VesselDetails({ vessel }: VesselDetailsProps) {
  return (
    <div className="space-y-4">
      <VesselHeader />

      {/* Vessel Title */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-sans font-bold text-[#4c6faf]">
          {vessel.description.vesselName}
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-semibold">
          {vessel.description.vesselType} | {vessel.mainParticulars.teuCapacity}
        </p>
      </div>

      {/* Vessel Description */}
      <VesselInfoSection
        title="Vessel Description"
        data={{
          vesselName: vessel.description.vesselName,
          vesselType: vessel.description.vesselType,
          built: vessel.description.built,
          launch: vessel.description.launch,
          yard: vessel.description.yard,
          imoNumber: vessel.description.imoNumber,
          callSign: vessel.description.callSign,
          portOfRegistry: vessel.description.portOfRegistry,
          flag: vessel.description.flag,
          classNotation: vessel.description.classNotation,
        }}
      />

      {/* Main Particulars */}
      <VesselInfoSection
        title="Main Particulars"
        data={{
          teuCapacity: vessel.mainParticulars.teuCapacity,
          loaLbpBeam: vessel.mainParticulars.loaLbpBeam,
          depthMoulded: vessel.mainParticulars.depthMoulded,
          grtNrt: vessel.mainParticulars.grtNrt,
          draftFullContainer: vessel.mainParticulars.draftFullContainer,
          draftLightContainer: vessel.mainParticulars.draftLightContainer,
          draftBlastArrival: vessel.mainParticulars.draftBlastArrival,
          dwtScantling: vessel.mainParticulars.dwtScantling,
          numberOfHold: vessel.mainParticulars.numberOfHold,
          numberOfHatchCover: vessel.mainParticulars.numberOfHatchCover,
          mainEngine: vessel.mainParticulars.mainEngine,
        }}
      />

      {/* Container Capacities */}
      <VesselInfoSection
        title="Container Capacities"
        data={{
          onDeck: vessel.containerCapacities.onDeck,
          inHolds: vessel.containerCapacities.inHolds,
          total: vessel.containerCapacities.total,
        }}
      />

      {/* Homogenous Loading Capacities */}
      <VesselInfoSection
        title="Homogenous Loading Capacities"
        data={{
          "14tPerTeu": vessel.homogenousLoading["14tPerTeu"],
        }}
      />

      {/* Cargo Hatch Covers */}
      <VesselInfoSection
        title="Cargo Hatch Covers"
        data={{
          type: vessel.cargoHatchCovers.type,
        }}
      />
    </div>
  );
}
