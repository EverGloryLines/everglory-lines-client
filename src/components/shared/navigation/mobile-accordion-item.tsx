"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SubMenuItem } from "@/constants/nav-types";

interface MobileAccordionItemProps {
  item: SubMenuItem;
  onClose: () => void;
}

export function MobileAccordionItem({
  item,
  onClose,
}: MobileAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.hasNestedDropdown || !item.nestedSubMenu) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-3 px-6 text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-6 text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
      >
        <span>{item.label}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-gray-50"
          >
            {item.nestedSubMenu.map((nestedItem, index) => (
              <Link
                key={index}
                href={nestedItem.href}
                onClick={onClose}
                className="flex items-center gap-2 py-2.5 px-8 text-sm text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
              >
                <ChevronRight className="h-3 w-3" />
                {nestedItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
