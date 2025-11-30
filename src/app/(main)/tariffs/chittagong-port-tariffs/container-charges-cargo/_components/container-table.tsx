import { TariffRow } from "@/data/tariffs/container-charges-cargo";

interface ContainerTableProps {
  rows: TariffRow[];
}

export function ContainerTable({ rows }: ContainerTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full font-sans font-normal text-sm border border-border">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-3 text-left text-base font-medium">
              Description
            </th>
            <th className="px-4 py-3 text-center text-base font-medium">
              Unit
            </th>
            <th className="px-4 py-3 text-right text-base font-medium">Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={`border-b border-blue-200 ${
                index % 2 === 0 ? "bg-white" : "bg-blue-50"
              } hover:bg-blue-100 transition-colors`}
            >
              <td className="px-4 py-3 text-blue-900">{row.description}</td>
              <td className="px-4 py-3 text-center text-blue-700">
                {row.unit}
              </td>
              <td className="px-4 py-3 text-right font-plus-jakarta-sans font-semibold text-blue-900">
                {row.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
