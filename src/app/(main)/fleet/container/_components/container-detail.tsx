"use client";

import { SectionTitle } from "@/components/shared/text/section-title";
import { ContainerSpec } from "@/types";
import Image from "next/image";

interface ContainerDetailProps {
  container: ContainerSpec;
}

export function ContainerDetail({ container }: ContainerDetailProps) {
  const shouldShowDoorDimensions = !["flatrack", "platform"].some((type) =>
    container.category.includes(type)
  );

  const calculateItemsPerColumn = (totalItems: number, columnCount: number) => {
    return Math.ceil(totalItems / columnCount);
  };

  const distributeItemsIntoColumns = (
    items: (string | { text: string; nested?: string[] })[],
    columnCount: number
  ) => {
    const itemsPerColumn = calculateItemsPerColumn(items.length, columnCount);
    const columns: (string | { text: string; nested?: string[] })[][] =
      Array.from({ length: columnCount }, () => []);

    items.forEach((item, index) => {
      const columnIndex = Math.floor(index / itemsPerColumn);
      if (columnIndex < columnCount) {
        columns[columnIndex].push(item);
      }
    });

    return columns;
  };

  const descriptionColumns = distributeItemsIntoColumns(
    container.description,
    2
  );

  return (
    <div className="space-y-8">
      {/* Header and Core Specs */}
      <div>
        <SectionTitle className="mb-6">
          {container.title} Container Dimensions
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-64 md:h-80 bg-muted rounded-none overflow-hidden">
            <Image
              src={container.image || "/placeholder.svg"}
              alt={container.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-foreground mb-6">
              {container.title}
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  INSIDE LENGTH:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.insideLength.mm} mm (
                  {container.specs.insideLength.ft})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  INSIDE WIDTH:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.insideWidth.mm} mm (
                  {container.specs.insideWidth.ft})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  INSIDE HEIGHT:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.insideHeight.mm} mm (
                  {container.specs.insideHeight.ft})
                </span>
              </div>

              {shouldShowDoorDimensions && container.specs.doorWidth && (
                <div className="flex justify-between">
                  <span className="font-normal text-foreground">
                    DOOR WIDTH:
                  </span>
                  <span className="text-muted-foreground">
                    {container.specs.doorWidth.mm} mm (
                    {container.specs.doorWidth.ft})
                  </span>
                </div>
              )}

              {shouldShowDoorDimensions && container.specs.doorHeight && (
                <div className="flex justify-between">
                  <span className="font-normal text-foreground">
                    DOOR HEIGHT:
                  </span>
                  <span className="text-muted-foreground">
                    {container.specs.doorHeight.mm} mm (
                    {container.specs.doorHeight.ft})
                  </span>
                </div>
              )}

              {container.specs.maxStowHeight && (
                <div className="flex justify-between">
                  <span className="font-normal text-foreground">
                    MAX STOW HEIGHT:
                  </span>
                  <span className="text-muted-foreground">
                    {container.specs.maxStowHeight.mm} mm (
                    {container.specs.maxStowHeight.ft})
                  </span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t border-border">
                <span className="font-normal text-foreground">CAPACITY:</span>
                <span className="text-muted-foreground">
                  {container.specs.capacity.m3} m³
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  TARE WEIGHT:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.tareWeight.kg} Kgs (
                  {container.specs.tareWeight.lbs} lbs)
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  MAX CARGO WEIGHT:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.maxGrossWeight.kg} Kgs (
                  {container.specs.maxGrossWeight.lbs} lbs)
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-normal text-foreground">
                  MAX PAYLOAD:
                </span>
                <span className="text-muted-foreground">
                  {container.specs.maxPayload.kg} Kgs (
                  {container.specs.maxPayload.lbs} lbs)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description - Column Grid Layout */}
      <div>
        <h2 className="text-xl uppercase font-medium text-foreground mb-4">
          DESCRIPTION
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {descriptionColumns.map((column, colIndex) => (
            <ul
              key={colIndex}
              className="space-y-2 text-sm md:text-base text-muted-foreground"
            >
              {column.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {typeof item === "string" ? (
                    <div className="flex gap-3">
                      <span className="text-orange-500 font-bold flex-shrink-0">
                        ■
                      </span>
                      <span>{item}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <span className="text-orange-500 font-bold flex-shrink-0">
                          ■
                        </span>
                        <span>{item.text}</span>
                      </div>
                      {item.nested && item.nested.length > 0 && (
                        <ul className="ml-6 space-y-1 border-l-2 border-dashed border-orange-300 pl-3">
                          {item.nested.map((nestedItem, nestedIndex) => (
                            <li
                              key={nestedIndex}
                              className="flex gap-2 text-xs"
                            >
                              <span className="text-orange-400 flex-shrink-0">
                                –
                              </span>
                              <span>{nestedItem}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Real-world Images */}
      {container.realWorldImages.length > 0 && (
        <div>
          <h2 className="text-xl uppercase font-medium text-foreground mb-4">
            Real-World Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {container.realWorldImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 bg-muted rounded-none overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${container.title} example ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
