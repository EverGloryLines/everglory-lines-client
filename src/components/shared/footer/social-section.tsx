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
      className="w-10 h-10 flex items-center justify-center bg-[#08236C] text-white font-bold rounded-none transition-colors duration-300 hover:bg-[#08236C]/90"
      aria-label={ariaLabel}
    >
      {iconContent}
    </a>
  );
};

const SocialSection: React.FC = () => {
  return (
    <div className="space-y-6 font-sans">
      <div className="space-y-3">
        <h3 className="text-base font-medium text-[#08236C]">Follow Us</h3>
        <div className="flex space-x-1">
          <SocialIcon platform="LinkedIn" ariaLabel="Follow ANL on LinkedIn" />
          <SocialIcon platform="X" ariaLabel="Follow ANL on X (Twitter)" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-medium text-[#08236C]">Join Us</h3>
        <button className="px-6 py-2 font-bold text-white uppercase rounded-none transition-colors duration-300 bg-[#E20402] hover:bg-[#E20402]/90 focus:outline-none focus:ring-4 min-w-[44px] min-h-[44px] cursor-pointer">
          ACT
        </button>
      </div>
    </div>
  );
};

export default SocialSection;
