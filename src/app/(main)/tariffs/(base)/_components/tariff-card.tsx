"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { TariffIcon } from "./tariff-icon";
import Link from "next/link";

interface TariffCardProps {
  card: {
    id: number;
    icon: string;
    title: string;
    description: string;
    pageLink: string;
  };
  index: number;
}

export function TariffCard({ card, index }: TariffCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const delay = index * 160;

  return (
    <div
      ref={cardRef}
      className="bg-card border border-border rounded-none p-6 transition-all duration-200 ease-out hover:shadow-md hover:border-[#485FA3]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <TariffIcon iconName={card.icon} />
        <h3 className="text-lg font-plus-jakarta-sans font-medium text-foreground">
          {card.title}
        </h3>
      </div>

      <p className="text-base font-sans font-normal text-muted-foreground leading-relaxed mb-6">
        {card.description}
      </p>

      <Link href={`/tariffs/${card.pageLink}`}>
        <Button
          variant="default"
          className="text-base font-medium w-full rounded-none bg-[#485FA3] hover:bg-[#485FA3]/90 text-white cursor-pointer"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
