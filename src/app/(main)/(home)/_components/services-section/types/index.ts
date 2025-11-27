export interface ServicesCarouselItem {
  id: string;
  serialNumber: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconSrc: string;
  image: string;
  link: string;
}

export interface CarouselControls {
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
  onDotClick: (index: number) => void;
}
