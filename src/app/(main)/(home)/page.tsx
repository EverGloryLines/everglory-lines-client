import { heroSlides } from "@/data/home-hero-slides";
import { HeroSlider } from "./_components/hero";
import { WhyChooseUs } from "./_components/why-choose-us";
import NewsSection from "./_components/news";
import { featuredNews, newsList } from "@/data/home-news";
import { ServicesCarousel } from "./_components/services";
import { LogoTicker } from "./_components/logo-ticker";
import { IntraBayOfBengal } from "./_components/ibb";
import { LegSection } from "./_components/leg";
import { ContainerShowcase } from "./_components/container";
import { HeroModal } from "./_components/hero/_components/hero-modal/hero-modal";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSlider slides={heroSlides} />
      <div className="block lg:hidden">
        <HeroModal />
      </div>
      <LogoTicker />
      <WhyChooseUs />
      <IntraBayOfBengal />
      <ServicesCarousel />
      <ContainerShowcase />
      <NewsSection featuredNews={featuredNews} newsList={newsList} />
      <LegSection />
    </div>
  );
}
