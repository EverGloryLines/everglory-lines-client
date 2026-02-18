"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

type SocialPlatform = "facebook" | "instagram" | "linkedin";

interface SocialLink {
  platform: SocialPlatform;
  url: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/everglory-container-lines-plc-6b85083a9/",
    ariaLabel: "Follow Everglory Container Lines on LinkedIn",
  },
  {
    platform: "facebook",
    url: "https://www.facebook.com/profile.php?id=61586084924432",
    ariaLabel: "Follow Everglory Container Lines on Facebook",
  },
  {
    platform: "instagram",
    url: "https://www.instagram.com/everglory_container_lines_plc/",
    ariaLabel: "Follow Everglory Container Lines on Instagram",
  },
];

const SocialIcon: React.FC<SocialLink> = ({ platform, url, ariaLabel }) => {
  const getIcon = () => {
    switch (platform) {
      case "facebook":
        return <FaFacebookF className="w-5 h-5" />;
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedinIn className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-[#08236C] text-white rounded-none transition-colors duration-300 hover:bg-[#08236C]/90"
      aria-label={ariaLabel}
    >
      {getIcon()}
    </a>
  );
};

const SocialSection: React.FC = () => {
  return (
    <div className="space-y-6 font-sans">
      {/* Follow Us Section */}
      <div className="space-y-3">
        <h3 className="text-base font-medium text-[#08236C]">Follow Us</h3>
        <div className="flex space-x-1">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.platform}
              platform={social.platform}
              url={social.url}
              ariaLabel={social.ariaLabel}
            />
          ))}
        </div>
      </div>

      {/* Join Us Section */}
      <div className="space-y-3">
        <h3 className="text-base font-medium text-[#08236C]">Ready to Ship?</h3>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="px-6 py-2 font-bold text-white uppercase rounded-none transition-colors duration-300 bg-[#E20402] hover:bg-[#E20402]/90 focus:outline-none focus:ring-4 min-w-[44px] min-h-[44px] cursor-pointer"
        >
          GET QUOTE
        </button>
      </div>

      {/* Contact Information Section */}
      <div className="space-y-3">
        <h3 className="text-base font-medium text-[#08236C]">Contact Info</h3>

        {/* Email */}
        <a
          href="mailto:info@everglorycontainerlines.com"
          className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#08236C] transition-colors duration-300"
        >
          <MdEmail className="w-5 h-5 text-[#08236C] flex-shrink-0 mt-0.5" />
          <span>info@everglorycontainerlines.com</span>
        </a>

        {/* Phone */}
        <a
          href="tel:+880 1334-98912"
          className="flex items-start gap-3 text-sm text-gray-700 hover:text-[#08236C] transition-colors duration-300"
        >
          <MdPhone className="w-5 h-5 text-[#08236C] flex-shrink-0 mt-0.5" />
          <span>+880 1334-98912</span>
        </a>

        {/* Address */}
        <div className="flex items-start gap-3 text-sm text-gray-700">
          <MdLocationOn className="w-5 h-5 text-[#08236C] flex-shrink-0 mt-0.5" />
          <span>
            Suite 7A, 6th Floor, <br />
            22 Kemal Ataturk Avenue,
            <br />
            Banani, Dhaka-1212 <br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
