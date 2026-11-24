export type IconName =
  | "check"
  | "shield"
  | "snow"
  | "wrench"
  | "clock"
  | "arrow"
  | "menu"
  | "close"
  | "message"
  | "whatsapp"
  | "star"
  | "map-pin";

export interface ServiceItem {
  id: string;
  title: string;
  text: string;
  image: string;
  icon: IconName;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: string;
  brandHighlight: string;
  segment: string;
  city: string;
  regions: string[];
  address: string;
  openingHours: string;
  phoneFormatted: string;
  whatsapp: string;
  rating: number;
  reviewCount: number;
  instagram: string;
  email: string;
}
