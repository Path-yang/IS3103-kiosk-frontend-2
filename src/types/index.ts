export type Language = 'en' | 'zh' | 'ms';

export interface Translation {
  en: string;
  zh: string;
  ms: string;
}

export interface SoupBase {
  id: string;
  name: Translation;
  description: Translation;
  image: string;
  spiceLevel: number; // 0-5
  price: number;
  isDryPot?: boolean;
}

export interface Addon {
  id: string;
  name: Translation;
  price: number;
  image: string;
}

export type SpiceLevel = 'mild' | 'medium' | 'spicy' | 'extra-spicy' | 'extreme';

export interface Order {
  weight: number | null; // Weight in kg
  soupBase: string | null;
  spiceLevel: SpiceLevel;
  addons: string[];
  drinks: string[];
  sides: string[];
}

export type Screen =
  | 'welcome'
  | 'weighing'
  | 'soup'
  | 'customization'
  | 'review'
  | 'payment'
  | 'confirmation';

export interface PaymentMethod {
  id: string;
  name: Translation;
  icon: string;
}
