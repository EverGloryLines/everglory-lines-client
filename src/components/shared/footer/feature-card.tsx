import React from "react";

interface FeatureCardProps {
  mainText: string;
  bgText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ mainText, bgText }) => {
  return (
    <a
      href="#" // Use a real link in a production environment
      className="relative flex justify-between items-end p-4 h-full w-full bg-white transition-all duration-300 ease-in-out group hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
      aria-label={`${mainText} - Read more`}
    >
      {/* Large, Decorative Background Text */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full text-[120px] font-extrabold text-gray-300 opacity-5 leading-none select-none pointer-events-none p-4"
      >
        {bgText}
      </div>

      {/* Main Heading Text */}
      <h3 className="text-lg font-semibold text-gray-800 relative z-10 transition-all duration-300 ease-in-out">
        <span className="relative inline-block pb-0.5 group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-gray-800 after:origin-left after:transition-transform after:duration-300 after:scale-x-0">
          {mainText}
        </span>
      </h3>

      {/* Red Arrow Icon (Diagonal) */}
      <div className="text-red-600 text-2xl relative z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        <span aria-hidden="true" style={{ color: "#E60000" }}>
          &#x2197;
        </span>{" "}
        {/* Diagonal arrow icon */}
      </div>
    </a>
  );
};

export default FeatureCard;
