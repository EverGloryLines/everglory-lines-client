import React from "react";
import FeatureCard from "./feature-card";
import NavigationLinks from "./navigation-links";
import SocialSection from "./social-section";
import FooterBottom from "./footer-bottom";
import Image from "next/image";

// Data Definitions
const featureCardsData = [
  { mainText: "CMA CGM'S GROUP VISION", bgText: "CMA" },
  { mainText: "SUSTAINABILITY & INNOVATION", bgText: "SUST" },
  { mainText: "JOIN US", bgText: "JOIN" },
  { mainText: "NEWS & MEDIA", bgText: "NEWS" },
];

const navigationData = [
  {
    title: "Group 1",
    links: [
      { label: "Shipping", href: "#" },
      { label: "End-to-End Solutions", href: "#" },
      { label: "News", href: "#" },
      { label: "My ANL", href: "#" },
    ],
  },
  {
    title: "Group 2",
    links: [
      { label: "Find your local offices", href: "#" },
      { label: "To our corporate website", href: "#" },
      { label: "My Customer Service", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full bg-[#F4F5F7] text-[#374A8B] font-sans"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      {/* SECTION 1: Main Footer Content (Responsive Grid) */}
      <div className="container mx-auto pt-6 pb-16 px-4">
        {/*
          Layout:
          Desktop (lg): 3-column grid
          Tablet (md): 2-column layout (C1 full width, C2 & C3 side-by-side) -> Modified for better stacking: C1 full, C2 & C3 stacked
          Mobile (default): Single column
        */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16 xl:gap-24">
          {/* Column 1: Brand & Feature Cards (Full width on md/lg to contain the 2x2 grid) */}
          <div className="lg:col-span-2">
            {/* ANL Logo */}
            <div className="mb-4">
              <Image
                src="/everglory-OG-image.png"
                alt="Company Logo"
                width={280}
                height={80}
              />
            </div>

            {/* Feature Cards (2x2 grid on desktop/tablet, 1-column on small mobile for touch-friendliness) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureCardsData.map((card) => (
                <div
                  key={card.mainText}
                  className="col-span-1 xs:col-span-1 min-h-[120px]"
                >
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-1 lg:mt-12">
            <NavigationLinks linkGroups={navigationData} />
          </div>

          {/* Column 3: Social & CTA */}
          <div className="lg:col-span-1 lg:mt-12">
            <SocialSection />
          </div>
        </div>
      </div>

      {/* SECTION 2: Footer Bottom (Legal & Copyright) */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
