/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import { DesktopNav } from "./desktop-nav";
import { LogoBanner } from "./logo-banner";
import { TaglineSlider } from "./tagline-slider";
import { MobileNav } from "./mobile-nav";

export function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && navRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const navOffsetTop = navRef.current.offsetTop;

        if (window.scrollY > navOffsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header ref={headerRef} className="w-full overflow-hidden">
        <LogoBanner />
        <TaglineSlider />
        <div ref={navRef} className={isSticky ? "h-[52px] md:h-[48px]" : ""}>
          <div
            className={`${
              isSticky
                ? "fixed top-0 left-0 right-0 z-40 shadow-lg"
                : "relative z-40"
            } transition-shadow duration-300`}
          >
            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
