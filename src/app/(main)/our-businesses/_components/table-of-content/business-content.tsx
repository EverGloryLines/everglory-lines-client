import React from "react";
import { BusinessObjectiveSection } from "./_components/business-objective";
import { OtherSegmentsSection } from "./_components/other-segments";
import { BusinessActivitySection } from "./_components/business-activity";

interface Section {
  id: string;
  title: string;
  number: number;
}

interface AboutContentProps {
  sections: Section[];
}

export function AboutContent({ sections }: AboutContentProps) {
  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case "business-objective":
        return <BusinessObjectiveSection />;
      case "business-activity":
        return <BusinessActivitySection />;
      case "other-segments":
        return <OtherSegmentsSection />;
      default:
        return (
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>Content for {sectionId} goes here.</p>
            <p>
              This is a placeholder. Please implement the specific component for
              this section.
            </p>
          </div>
        );
    }
  };

  return (
    <main className="space-y-16">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-8 rounded-none border border-border bg-[#FDFDFD] py-5 lg:py-6 px-6 lg:px-10"
        >
          <h2 className="text-xl md:text-3xl 2xl:text-5xl font-plus-jakarta-sans font-medium tracking-[-0.02em] bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] mb-4 md:mb-6">
            {section.title}
          </h2>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {renderSectionContent(section.id)}
          </div>
        </section>
      ))}
    </main>
  );
}
