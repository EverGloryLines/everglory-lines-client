"use client";

import { motion, Variants } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { AccordionSection } from "@/data/tariffs/dues-and-charges-cargo";
import { GeneralServicesTable } from "./general-services-table";
import { GeneralServiesNotesBox } from "./general-services-notes-box";

interface CargoAccordionProps {
  sections: AccordionSection[];
}

export function GeneralServicesAccordion({ sections }: CargoAccordionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {sections.map((section) => (
          <motion.div key={section.id} variants={itemVariants}>
            <AccordionItem
              value={section.id}
              className="border border-blue-200 rounded-none overflow-hidden bg-white hover:border-blue-300 transition-colors"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="text-left">
                  <h2 className="text-lg md:text-xl font-plus-jakarta-sans font-medium text-[#001a3d]">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base font-sans font-normal text-muted-foreground mt-1">
                    {section.subtitle}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-blue-50">
                <div className="space-y-6">
                  {section.tables.map((table, tableIndex) => (
                    <div key={tableIndex}>
                      <h3 className="text-lg font-sans font-medium text-[#001a3d] mb-4">
                        {table.title}
                      </h3>
                      <GeneralServicesTable rows={table.rows} />
                    </div>
                  ))}
                  {section.notes.length > 0 && (
                    <GeneralServiesNotesBox notes={section.notes} />
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}
