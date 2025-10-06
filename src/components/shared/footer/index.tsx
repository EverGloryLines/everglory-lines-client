import React from "react";
import FeatureCard from "./feature-card";
import NavigationLinks from "./navigation-links";
import SocialSection from "./social-section";
import FooterBottom from "./footer-bottom";

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
      className="w-full bg-gray-50 text-gray-800 font-sans"
      style={{ backgroundColor: "#F5F5F7" }}
    >
      {/* SECTION 1: Main Footer Content (Responsive Grid) */}
      <div className="container mx-auto py-12 px-4 sm:px-8 lg:px-12">
        {/*
          Layout:
          Desktop (lg): 3-column grid
          Tablet (md): 2-column layout (C1 full width, C2 & C3 side-by-side) -> Modified for better stacking: C1 full, C2 & C3 stacked
          Mobile (default): Single column
        */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16 xl:gap-24">
          {/* Column 1: Brand & Feature Cards (Full width on md/lg to contain the 2x2 grid) */}
          <div className="lg:col-span-1">
            {/* ANL Logo */}
            <div className="mb-8">
              <span
                className="flex items-center text-4xl font-bold text-red-600"
                style={{ color: "#E60000" }}
              >
                <span
                  className="w-0 h-0 border-l-[18px] border-l-transparent border-b-[30px] border-b-red-600 border-r-[18px] border-r-transparent mr-2"
                  style={{ borderBottomColor: "#E60000" }}
                ></span>
                ANL
              </span>
            </div>

            {/* Feature Cards (2x2 grid on desktop/tablet, 1-column on small mobile for touch-friendliness) */}
            <div className="grid grid-cols-2 gap-4">
              {featureCardsData.map((card) => (
                <div
                  key={card.mainText}
                  className="col-span-2 xs:col-span-1 min-h-[120px]"
                >
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-1">
            <NavigationLinks linkGroups={navigationData} />
          </div>

          {/* Column 3: Social & CTA */}
          <div className="lg:col-span-1">
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
