"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { containerData } from "@/data/container-data";
import { SidebarNav } from "./_components/sidebar-nav";
import { ContainerDetail } from "./_components/container-detail";
import { ContainerGrid } from "./_components/container-grid";
import { SectionTitle } from "@/components/shared/text/section-title";


export default function Container() {
  const [selectedContainerId, setSelectedContainerId] = useState<string | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectedContainer = containerData.find(
    (c) => c.id === selectedContainerId
  );

  return (
    <div className="flex w-full container mx-auto px-4 py-8 min-h-screen bg-background">
      {/* Sidebar */}
      <SidebarNav
        containers={containerData}
        selectedId={selectedContainerId}
        onSelect={setSelectedContainerId}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-30">
          <h1 className="text-lg font-semibold text-foreground">
            Container Dimensions
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            {sidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Content Area */}
        <div className="py-4 md:py-6 pl-4 w-full">
          {selectedContainer ? (
            <ContainerDetail container={selectedContainer} />
          ) : (
            <>
              <SectionTitle className="mb-0">Container Dimensions</SectionTitle>
              <p className="text-muted-foreground font-sans font-normal text-base mb-8">
                Select a container type to view detailed specifications
              </p>

              <ContainerGrid
                containers={containerData}
                onSelectContainer={setSelectedContainerId}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
