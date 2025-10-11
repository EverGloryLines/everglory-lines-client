/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LegId } from "@/constants/leg-slides";
import Image from "next/image"; // Changed import from NextImage to standard Image

interface LegMapProps {
  legId: LegId;
  mapImage: string;
  label: string;
}

export const LegMap: React.FC<LegMapProps> = ({ legId, mapImage, label }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [magnifierSize, setMagnifierSize] = useState(200);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLImageElement>(null); // Ref for the actual image element

  const zoomLevel = 2.5; // Increased zoom level for better effect

  // --- Effect to determine touch device and set initial magnifier size ---
  useEffect(() => {
    // Check for touch device
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    // Set responsive magnifier size
    const updateMagnifierSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMagnifierSize(100);
      } else if (width < 1024) {
        setMagnifierSize(150);
      } else {
        setMagnifierSize(200);
      }
    };

    updateMagnifierSize();
    window.addEventListener("resize", updateMagnifierSize);

    return () => window.removeEventListener("resize", updateMagnifierSize);
  }, []);

  // --- Preload adjacent images ---
  useEffect(() => {
    const preloadImages = [legId - 1, legId + 1]
      .filter((id) => id >= 1 && id <= 12)
      .map((id) => `/maps/leg-${id}.png`);

    preloadImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [legId]);

  // --- Handlers for Magnifier effect ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !mapRef.current) return;

    const rect = mapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setShowMagnifier(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div
      ref={imageContainerRef}
      className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-none bg-transparent aspect-[4/3]" // Added aspect ratio for better sizing control
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={legId}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            opacity: { duration: 0.4, ease: "easeInOut" },
            scale: { duration: 0.4, ease: "easeInOut" },
          }}
          className="w-full h-full relative"
          style={{ willChange: "opacity, transform" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        
          <Image
            ref={mapRef as React.RefObject<HTMLImageElement>}
            src={mapImage}
            alt={`Map for ${label}`}
            fill
            priority={true}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain"
            draggable={false}
            onLoad={(e) => {
              // Workaround to ensure mapRef.current points to the actual <img> DOM element
              const imgElement = e.currentTarget;
              if (mapRef.current) {
                (mapRef.current as any) = imgElement;
              }
            }}
          />

          {/* Magnifying Glass Overlay */}
          {showMagnifier && !isTouchDevice && mapRef.current && (
            <div
              className="absolute pointer-events-none border-[3px] border-white rounded-full"
              style={{
                width: `${magnifierSize}px`,
                height: `${magnifierSize}px`,
                left: `${mousePosition.x - magnifierSize / 2}px`,
                top: `${mousePosition.y - magnifierSize / 2}px`,
                backgroundImage: `url(${mapImage})`,
                // Calculate background size and position based on the rendered image dimensions
                backgroundSize: `${mapRef.current.clientWidth * zoomLevel}px ${
                  mapRef.current.clientHeight * zoomLevel
                }px`,
                backgroundPosition: `-${
                  mousePosition.x * zoomLevel - magnifierSize / 2
                }px -${mousePosition.y * zoomLevel - magnifierSize / 2}px`,
                backgroundRepeat: "no-repeat",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
                transition: "left 0.05s linear, top 0.05s linear", // Faster transition for a smoother feel
                zIndex: 10,
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      {isTouchDevice && (
        <p className="text-center text-sm text-gray-600 mt-2 absolute bottom-2 left-0 right-0">
          Touch device detected. Tap and pinch to zoom on the map.
        </p>
      )}
    </div>
  );
};
