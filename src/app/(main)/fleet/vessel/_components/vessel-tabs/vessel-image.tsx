import Image from "next/image";

interface VesselImageProps {
  src: string;
  alt: string;
}

export function VesselImage({ src, alt }: VesselImageProps) {
  return (
    <div className="relative w-full h-56 md:h-72 rounded-none overflow-hidden shadow-lg">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
