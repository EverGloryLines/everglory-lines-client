import { Vessel } from "@/types";
import { VesselImage } from "./vessel-image";
import { VesselDetails } from "./vessel-details";

interface VesselCardProps {
  vessel: Vessel;
}

export function VesselCard({ vessel }: VesselCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
      {/* Left Column - Image */}
      <div>
        <VesselImage src={vessel.image} alt={vessel.name} />
      </div>

      {/* Right Column - Details */}
      <div className="overflow-y-auto max-h-[600px] pr-4">
        <VesselDetails vessel={vessel} />
      </div>
    </div>
  );
}
