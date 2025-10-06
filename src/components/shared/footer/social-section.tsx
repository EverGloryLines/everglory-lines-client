import React from "react";

// Using simple characters/text for icon representation as full SVGs are omitted for brevity
const SocialIcon: React.FC<{ platform: string; ariaLabel: string }> = ({
  platform,
  ariaLabel,
}) => {
  const iconContent = platform === "LinkedIn" ? "in" : "X";
  return (
    <a
      href={`#${platform.toLowerCase()}`} // Replace with actual social link
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-blue-900 text-white font-bold rounded-sm transition-colors duration-300 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900"
      style={{ backgroundColor: "#003087" }}
      aria-label={ariaLabel}
    >
      {iconContent}
    </a>
  );
};

const SocialSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <h3 className="text-sm font-normal text-gray-800">Follow us</h3>
        <div className="flex space-x-2">
          <SocialIcon platform="LinkedIn" ariaLabel="Follow ANL on LinkedIn" />
          <SocialIcon platform="X" ariaLabel="Follow ANL on X (Twitter)" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800">Join #BetterWays !</h3>
        <button
          className="px-6 py-2 font-bold text-white uppercase rounded-sm transition-colors duration-300 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 min-w-[44px] min-h-[44px]"
          style={{ backgroundColor: "#E60000" }}
        >
          ACT
        </button>
      </div>
    </div>
  );
};

export default SocialSection;
