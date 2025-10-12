"use client";

import { motion } from "motion/react";
import { NestedDropdown } from "./nested-dropdown";
import { SubMenuItem } from "@/constants/nav-types";

interface DropdownProps {
  items: SubMenuItem[];
}

export function Dropdown({ items }: DropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="absolute top-full left-0 mt-1 min-w-[240px] bg-gray-900 rounded shadow-xl border border-gray-700 z-50"
    >
      {items.map((item, index) => (
        <NestedDropdown key={index} item={item} />
      ))}
    </motion.div>
  );
}
