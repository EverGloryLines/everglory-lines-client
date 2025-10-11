/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export function IntraBayOfBengal() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [magnifierSize, setMagnifierSize] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const updateMagnifierSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMagnifierSize(150);
      } else if (width < 1024) {
        setMagnifierSize(180);
      } else {
        setMagnifierSize(200);
      }
    };

    updateMagnifierSize();
    window.addEventListener("resize", updateMagnifierSize);

    return () => window.removeEventListener("resize", updateMagnifierSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
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

  const zoomLevel = 2;

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full py-8 md:py-16 2xl:py-24 px-4 bg-white"
    >
      <div className="container mx-auto">
        <div
          className={`text-center mb-4 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionTitle>Intra Bay of Bengal(IBB)</SectionTitle>
        </div>

        <div
          className={`text-center mb-8 md:mb-12 transition-all duration-800 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionDescription>
            A sea-rail combined feeder network connecting India and Bangladesh,
            streamlining container transportation across the Bay of Bengal
            region.
          </SectionDescription>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="bg-white rounded-none overflow-hidden">
            <div
              className="relative cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                ref={imageRef}
                src="/homepage/others/ibb-map-image.jpg"
                alt="Intra Bay of Bengal Route Map"
                className="w-full h-auto"
                draggable={false}
              />

              {showMagnifier && !isTouchDevice && imageRef.current && (
                <div
                  className="absolute pointer-events-none border-[3px] border-white rounded-full"
                  style={{
                    width: `${magnifierSize}px`,
                    height: `${magnifierSize}px`,
                    left: `${mousePosition.x - magnifierSize / 2}px`,
                    top: `${mousePosition.y - magnifierSize / 2}px`,
                    backgroundImage: `url(${imageRef.current.src})`,
                    backgroundSize: `${imageRef.current.width * zoomLevel}px ${
                      imageRef.current.height * zoomLevel
                    }px`,
                    backgroundPosition: `-${
                      mousePosition.x * zoomLevel - magnifierSize / 2
                    }px -${mousePosition.y * zoomLevel - magnifierSize / 2}px`,
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    transition: "left 0.1s ease-out, top 0.1s ease-out",
                    zIndex: 10,
                  }}
                />
              )}
            </div>
          </div>

          {isTouchDevice && (
            <p className="text-center text-sm text-[#4A5568] mt-4">
              Tap and pinch to zoom on the map
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
