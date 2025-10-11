"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SubMenuItem } from "@/constants/nav-types";

interface NestedDropdownProps {
  item: SubMenuItem;
}

export function NestedDropdown({ item }: NestedDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  if (!item.hasNestedDropdown || !item.nestedSubMenu) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2.5 text-base text-white hover:bg-gray-700 transition-colors duration-150"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between px-4 py-2.5 text-base text-white hover:bg-gray-700 transition-colors duration-150 cursor-pointer">
        <span>{item.label}</span>
        <ChevronRight className="h-4 w-4 ml-2" />
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-full top-0 ml-1 min-w-[220px] bg-gray-900 rounded shadow-xl border border-gray-700 z-50"
          >
            {item.nestedSubMenu.map((nestedItem, index) => (
              <Link
                key={index}
                href={nestedItem.href}
                className="block px-4 py-2.5 text-base text-white hover:bg-gray-700 transition-colors duration-150 first:rounded-t last:rounded-b"
              >
                {nestedItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
