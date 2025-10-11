import React from "react";

interface FeatureCardProps {
  mainText: string;
  bgText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ mainText, bgText }) => {
  return (
    <a
      href="#" // Use a real link in a production environment
      className="relative flex justify-between items-end p-4 h-full w-full bg-[#f6f7fa] transition-all duration-300 ease-in-out group hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-200 rounded-none overflow-hidden"
      aria-label={`${mainText} - Read more`}
    >
      {/* Large, Decorative Background Text */}
      <div
        aria-hidden="true"
        className="absolute top-4 -right-10 w-full h-full text-[#08236C] text-7xl font-orbitron-light opacity-5 leading-none select-none pointer-events-none p-4"
      >
        {bgText}
      </div>

      {/* Main Heading Text */}
      <h3 className="text-lg font-normal text-[#08236C] relative z-10 transition-all duration-300 ease-in-out">
        <span className="relative inline-block pb-0.5 group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#08236C] after:origin-left after:transition-transform after:duration-300 after:scale-x-0">
          {mainText}
        </span>
      </h3>

      {/* Red Arrow Icon (Diagonal) */}
      <div className="text-[#E20402] text-2xl relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        <span aria-hidden="true" style={{ color: "#E60000" }}>
          &#x2197;
        </span>{" "}
        {/* Diagonal arrow icon */}
      </div>
    </a>
  );
};

export default FeatureCard;
