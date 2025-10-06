import React from "react";

interface LinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

interface NavigationLinksProps {
  linkGroups: LinkGroup[];
}

const NavLink: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-gray-800 text-sm py-1 inline-block relative group transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      <span className="relative inline-block group-hover:after:scale-x-100 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-gray-600 after:origin-left after:transition-transform after:duration-300 after:scale-x-0">
        {label}
      </span>
    </a>
  </li>
);

const NavigationLinks: React.FC<NavigationLinksProps> = ({ linkGroups }) => {
  const [firstGroup, secondGroup] = linkGroups;

  return (
    <nav className="space-y-6" aria-label="ANL Navigation Links">
      {/* First Group */}
      <ul className="space-y-2">
        {firstGroup.links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </ul>

      {/* Red Horizontal Divider */}
      <hr
        className="w-1/2 border-t-[2px] border-red-600 mx-0"
        style={{ borderColor: "#E60000" }}
      />

      {/* Second Group */}
      <ul className="space-y-2">
        {secondGroup.links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
