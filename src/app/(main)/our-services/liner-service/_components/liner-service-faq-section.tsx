"use client";

import { motion, Variants } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { Button } from "@/components/ui";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function LinerServiceFAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showMore, setShowMore] = useState(false);

  const faqs: FAQItem[] = [
    {
      question: "What routes does Everglory Liner Service cover?",
      answer:
        "Everglory Liner Service currently operates on the India-Bangladesh trade route, connecting major ports including Kolkata, Haldia, and Chittagong. We offer regular scheduled sailings with reliable departure and arrival times to ensure your cargo reaches its destination on time.",
    },
    {
      question: "What are the transit times for India-Bangladesh shipments?",
      answer:
        "Transit times vary depending on the specific route and port combination. Typically, shipments between Kolkata and Chittagong take 2-4 days. We provide detailed schedules and vessel tracking to give you complete visibility of your shipment throughout its journey.",
    },
    {
      question: "What container types are available on your liner services?",
      answer:
        "We offer a comprehensive range of container types including 20ft and 40ft standard dry containers, high cube containers, open top containers, and flat rack containers. We can also accommodate refrigerated containers (reefers) and special equipment based on your cargo requirements.",
    },
    {
      question: "How do I book space on an Everglory liner service?",
      answer:
        "You can book space through our online booking portal, by contacting our customer service team directly, or through your freight forwarder. We recommend booking in advance to secure space, especially during peak seasons. Our team will provide you with booking confirmation and all necessary documentation.",
    },
    {
      question: "Do you offer door-to-door delivery services?",
      answer:
        "Yes, through our integrated Intermodal and Multimodal services, we can provide complete door-to-door delivery solutions. This includes inland transportation via truck, rail, or barge to transport your containers from origin to our port facilities and from destination port to your final delivery location.",
    },
  ];

  const displayedFaqs = showMore ? faqs : faqs.slice(0, 3);

  const titleVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-slate-700" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Frequently asked questions (FAQs)
          </h2>
        </div>
      </motion.div>

      {/* Accordion */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <Accordion type="single" collapsible className="w-full space-y-3">
          {displayedFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              custom={index}
              variants={itemVariants}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 data-[state=open]:bg-slate-50"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-slate-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* More FAQs Button */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => setShowMore(!showMore)}
          className="border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          {showMore ? "Show Less" : "More FAQs"}
        </Button>
      </motion.div>
    </section>
  );
}
