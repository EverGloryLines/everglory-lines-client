export interface Slide {
  id: string;
  tagline: string;
  title: string;
  backgroundText: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  phoneNumber: string;
}

export interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  transitionDuration?: number;
}

export interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
}
