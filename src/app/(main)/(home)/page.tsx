import { heroSlides } from "@/data/home-hero-slides";
import { HeroSlider } from "./_components/hero";
import { WhyChooseUs } from "./_components/why-choose-us";
import NewsSection from "./_components/news";
import { featuredNews, newsList } from "@/data/home-news";
import { ServicesCarousel } from "./_components/services";
import { LogoTicker } from "./_components/logo-ticker";
import { IntraBayOfBengal } from "./_components/ibb";
import { LegSection } from "./_components/leg";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSlider slides={heroSlides} />
      <LogoTicker />
      <WhyChooseUs />
      <IntraBayOfBengal />
      <ServicesCarousel />
      <NewsSection featuredNews={featuredNews} newsList={newsList} />
      <LegSection />
    </div>
  );
}
