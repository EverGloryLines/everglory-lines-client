"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Dropdown } from "./dropdown";
import { MenuItem } from "@/constants/nav-types";

interface NavItemProps {
  item: MenuItem;
}

export function NavItem({ item }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive =
    item.href === pathname || pathname.startsWith(item.href + "/");

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (item.hasDropdown) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href || "#"}
        className={`px-4 py-3 text-white hover:bg-[#5a7ec4] transition-colors duration-150 text-base lg:text-lg font-plus-jakarta-sans font-semibold ${
          isActive ? "bg-[#5a7ec4] border-b-2 border-white" : ""
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative h-full text-base lg:text-lg font-plus-jakarta-sans font-semibold"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-2 py-3 h-full text-white hover:bg-[#5a7ec4] transition-colors duration-150 ${
          isActive ? "bg-[#5a7ec4] border-b-2 border-white" : ""
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence mode="wait">
        {isOpen && item.subMenu && <Dropdown items={item.subMenu} />}
      </AnimatePresence>
    </div>
  );
}
