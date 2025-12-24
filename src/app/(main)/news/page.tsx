import React from "react";
import { HeroNewsSlider } from "./_components/news-hero-slider/hero-news-slider";
import { NewsGrid } from "./_components/news-grid";
import { newsroomData } from "@/data/news-page-data";

export default function News() {
  return (
    <div className="min-h-screen w-full">
      <HeroNewsSlider />
      <NewsGrid data={newsroomData} />
    </div>
  );
}
