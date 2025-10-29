interface VesselInfoSectionProps {
  title: string;
  data: Record<string, string>;
}

export function VesselInfoSection({ title, data }: VesselInfoSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm md:font-base font-semibold text-[#4c6faf] border-b-2 border-[#4c6faf] pb-2 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between text-sm">
            <span className="font-sans font-semibold text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1").trim()}:
            </span>
            <span className="text-gray-600 capitalize">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
