/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { MobileMenuItem } from "./mobile-menu-item";
import { useClickOutside } from "@/hooks/use-click-outside";
import { navigationConfig } from "@/constants/nav-types";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef as any, () => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden bg-[#4c6faf] w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="relative h-12 w-32">
            <Image
              src="/logo/everglory-lines-logo.jpg"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-[#5a7ec4] rounded transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 overflow-y-auto shadow-2xl font-orbitron-medium"
              >
                <div className="sticky top-0 bg-[#4c6faf] px-6 py-4 flex items-center justify-between z-10">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-white hover:bg-[#5a7ec4] rounded transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav
                  className="py-2"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  {navigationConfig.map((item, index) => (
                    <MobileMenuItem
                      key={index}
                      item={item}
                      onClose={() => setIsOpen(false)}
                    />
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
