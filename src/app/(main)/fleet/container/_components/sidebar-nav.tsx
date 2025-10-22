"use client";

import { cn } from "@/lib/utils";
import { ContainerSpec } from "@/types";

interface SidebarNavProps {
  containers: ContainerSpec[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SidebarNav({
  containers,
  selectedId,
  onSelect,
  isOpen,
  onClose,
}: SidebarNavProps) {
  const categories = Array.from(new Set(containers.map((c) => c.category)));

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <nav
        className={cn(
          "fixed md:relative md:w-64 w-64 text-sm font-sans font-normal min-h-screen bg-background border-r border-border overflow-y-auto transition-transform duration-300 z-50 md:z-0 mt-6",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 space-y-0">
          {/* List of All Container Types */}
          <button
            onClick={() => {
              onSelect(null);
              onClose();
            }}
            className={cn(
              "w-full text-left px-4 uppercase py-3 rounded-md transition-colors border-l-4 font-medium cursor-pointer",
              selectedId === null
                ? "bg-blue-50 text-[#485FA3] border-l-[#485FA3] font-medium"
                : "border-l-transparent text-foreground hover:bg-muted"
            )}
          >
            All Container Types
          </button>

          {/* Container Types by Category */}
          {categories.map((category) => (
            <div key={category} className="mt-4">
              <h3 className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {category.replace("-", " ")}
              </h3>
              <div className="space-y-0">
                {containers
                  .filter((c) => c.category === category)
                  .map((container) => (
                    <button
                      key={container.id}
                      onClick={() => {
                        onSelect(container.id);
                        onClose();
                      }}
                      className={cn(
                        "w-full text-left px-4 py-1.5 rounded-md transition-colors border-l-4 text-sm cursor-pointer",
                        selectedId === container.id
                          ? "bg-blue-50 text-[#485FA3] border-l-[#485FA3] font-medium"
                          : "border-l-transparent text-foreground hover:bg-muted"
                      )}
                    >
                      {container.title}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
