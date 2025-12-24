"use client";

import type { NewsGridSection } from "@/data/news-page-data";
import { NewsGridHeader } from "./news-grid-header";
import { NewsCard } from "./news-card";

interface NewsGridProps {
  data: NewsGridSection;
}

export function NewsGrid({ data }: NewsGridProps) {
  return (
    <section className="w-full px-6 py-20 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <NewsGridHeader title={data.title} description={data.description} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, index) => (
            <NewsCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
