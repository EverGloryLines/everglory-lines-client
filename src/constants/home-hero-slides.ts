export const COLORS = {
  primaryOrange: "#FF7336",
  primaryGreen: "#1AA864",
  white: "#FFFFFF",
  darkOverlay: "rgba(0, 0, 0, 0.10)",
  contentGradient:
    "radial-gradient(ellipse 850px 650px at bottom left, rgba(13, 71, 161, 0.85) 0%, rgba(21, 101, 192, 0.55) 35%, transparent 70%)",
  sliderBackground: "#0d2a3d",
} as const;

export const ANIMATION_TIMINGS = {
  autoPlayInterval: 7000,
  transitionDuration: 0.7,
  backgroundZoomDuration: 2,
  taglineDelay: 0.2,
  backgroundTextDelay: 0.3,
  titleDelay: 0.4,
  descriptionDelay: 0.6,
  ctaDelay: 0.8,
  buttonFillDuration: 0.55,
} as const;

export const BREAKPOINTS = {
  mobile: 768,
} as const;
