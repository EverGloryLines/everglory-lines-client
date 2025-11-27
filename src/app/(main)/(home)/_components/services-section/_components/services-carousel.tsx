"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Truck, Plane, Ship, Train } from "lucide-react";
import { ServicesCarouselItem } from "../types";
import { SectionHeader } from "./section-header";
import { ServiceCard } from "./service-card";
import { CarouselNavigation } from "./carousel-navigation";

const services: ServicesCarouselItem[] = [
  {
    id: "1",
    serialNumber: "01",
    title: "Land Transportation",
    description: "Reliable road freight for efficient transportation.",
    icon: Truck,
    iconSrc: "/homepage/services/road-icon.png",
    image:
     "/homepage/services/land-freight.jpg",
    link: "/homepage/services/land-transportation",
  },
  {
    id: "2",
    serialNumber: "02",
    title: "Air Freight",
    description: "Intermodal shipping for seamless transport.",
    icon: Plane,
    iconSrc: "/homepage/services/air-plane-icon.png",
    image:
      "/homepage/services/air-frieght.jpg",
    link: "/homepage/services/air-frieght.jpg",
  },
  {
    id: "3",
    serialNumber: "03",
    title: "Ocean Freight",
    description:
      "Smooth sailing is an idiom to explain how easy and flawless an activity can be. However,",
    icon: Ship,
    iconSrc: "/homepage/services/ship-icon.png",
    image:
      "/homepage/services/ocean-freight.jpg",
    link: "/services/ocean-freight",
  },
  {
    id: "4",
    serialNumber: "04",
    title: "Rail Transport",
    description:
      "Cost-effective and eco-friendly rail logistics for bulk cargo across continents.",
    icon: Train,
    iconSrc: "/homepage/services/rail-icon.png",
    image:
      "/homepage/services/rail-freight.jpg",
    link: "/services/rail-transport",
  },
//   {
//     id: "5",
//     serialNumber: "05",
//     title: "Warehousing",
//     description:
//       "Secure storage solutions with advanced inventory management systems.",
//     icon: Package,
//     image:
//       "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     link: "/services/warehousing",
//   },
//   {
//     id: "6",
//     serialNumber: "06",
//     title: "Global Logistics",
//     description:
//       "End-to-end supply chain management with worldwide coverage and tracking.",
//     icon: Globe,
//     image:
//       "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1200",
//     link: "/services/global-logistics",
//   },
];

export function ServicesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return services.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <section className="py-8 lg:py-16 2x:py-24 px-4 bg-gradient-to-b from-[#FFF6F0] to-[#faeee6]">
      <div className="container mx-auto">
        <SectionHeader
          title="Transportation Services"
          description="Comprehensive logistics solutions tailored to meet your shipping needs across all major transportation modes"
        />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {getCurrentServices().map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <CarouselNavigation
          currentIndex={currentSlide}
          totalSlides={totalSlides}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onDotClick={handleDotClick}
          showArrows={true}
        />
      </div>
    </section>
  );
}
