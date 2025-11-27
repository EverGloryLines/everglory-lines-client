import React from "react";
import { heroSlides } from "@/data/home-hero-slides";
import { HeroSlider } from "./_components/hero-section";
import { WhyChooseUs } from "./_components/why-choose-us-section";
import NewsSection from "./_components/news-section";
import { featuredNews, newsList } from "@/data/home-news";
// import { ServicesCarousel } from "./_components/services";
import { LogoTicker } from "./_components/logo-ticker-section";
import { IntraBayOfBengal } from "./_components/ibb-section";
import { LegSection } from "./_components/leg-section";
import { ContainerShowcase } from "./_components/container-section";
import { HeroModal } from "./_components/hero-section/_components/hero-modal/hero-modal";
import VesselTrackingMaps from "./_components/map-tracking-section/vessel-tracking-maps";
import { ClassificationSection } from "./_components/classification-section/classification-section";
import { AffiliationSection } from "./_components/affiliation-section/affiliation-section";
import { RouteMap } from "./_components/route-map-section";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSlider slides={heroSlides} />
      <div className="block lg:hidden">
        <HeroModal />
      </div>
      <LogoTicker />
      <WhyChooseUs />
      <RouteMap />
      <ClassificationSection />
      {/* <EmailBanner /> */}
      <IntraBayOfBengal />
      {/* <ServicesCarousel /> */}
      <ContainerShowcase />
      <VesselTrackingMaps />
      <NewsSection featuredNews={featuredNews} newsList={newsList} />
      <AffiliationSection />
      <LegSection />
    </div>
  );
}
