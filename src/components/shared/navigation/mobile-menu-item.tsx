"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileAccordionItem } from "./mobile-accordion-item";
import { MenuItem } from "@/constants/nav-types";

interface MobileMenuItemProps {
  item: MenuItem;
  onClose: () => void;
}

export function MobileMenuItem({ item, onClose }: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href || "#"}
        onClick={onClose}
        className="block py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors border-b border-gray-200"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-6 text-lg font-medium text-gray-800 hover:bg-gray-100 active:bg-gray-200 transition-colors"
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && item.subMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-white"
          >
            {item.subMenu.map((subItem, index) => (
              <MobileAccordionItem
                key={index}
                item={subItem}
                onClose={onClose}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
