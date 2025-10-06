"use client";

import { navigationConfig } from "@/constants/nav-types";
import { NavItem } from "./nav-item";

export function DesktopNav() {
  return (
    <nav className="hidden lg:block bg-[#485FA3] w-full" role="navigation" aria-label="Main navigation">
      <div className="section-layout">
        <div className="flex items-center justify-between">
          {navigationConfig.map((item, index) => (
            <NavItem key={index} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}