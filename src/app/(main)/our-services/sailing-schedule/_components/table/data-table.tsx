/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; 

// --- FIX STARTS HERE ---
// We extend the module to tell TypeScript that 'headerClassName' is allowed in meta
import "@tanstack/react-table"; // Ensure the original module is imported

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData, TValue> {
    headerClassName?: string;
  }
}
// --- FIX ENDS HERE ---

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border border-gray-300 overflow-hidden mb-8">
      <Table className="border-collapse">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-transparent">
              {headerGroup.headers.map((header) => {
                // Now TypeScript knows 'headerClassName' exists!
                const bgColor = header.column.columnDef.meta?.headerClassName;
                
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    className={`border border-gray-300 text-center font-plus-jakarta-sans font-semibold text-black h-10 px-2 ${bgColor || "bg-gray-100"}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="border border-gray-300 text-center py-2 text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}