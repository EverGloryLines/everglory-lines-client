import Image from "next/image";

export function VesselHeader() {
  return (
    <div className="border-2 border-black p-4 mb-6 bg-white flex items-center justify-between">
      <div className="w-24 h-16 sm:w-40 sm:h-24 flex-shrink-0">
        <Image
          src="/logo/BIWTC-Logo.jpg"
          alt="BIWTC Logo"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-24 h-16 sm:w-40 sm:h-24 flex-shrink-0">
        <Image
          src="/logo/everglory-container-lines.png"
          alt="Everglory Container Lines Logo"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
