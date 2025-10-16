"use client";

import type React from "react";

interface Section {
  id: string;
  title: string;
  number: number;
}

interface TableOfContentsProps {
  sections: Section[];
  activeSection: string;
}

export function TableOfContents({
  sections,
  activeSection,
}: TableOfContentsProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="rounded-none border border-border bg-[#FDFDFD] p-6 shadow-sm"
      aria-label="Table of contents"
    >
      <h2 className="text-base md:text-lg lg:text-xl font-plus-jakarta-sans font-medium tracking-[-0.02em] bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] mb-4">
        Table of Contents
      </h2>
      <ol className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={`group flex items-start gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                activeSection === section.id
                  ? "border-l-2 border-[#3457ab] bg-accent font-medium text-foreground"
                  : "border-l-2 border-transparent text-muted-foreground hover:border-muted hover:bg-muted hover:text-foreground"
              }`}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
            >
              <span className="flex-shrink-0 text-sm md:text-base font-medium">
                {section.number}.
              </span>
              <span className="text-balance text-sm md:text-base">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
