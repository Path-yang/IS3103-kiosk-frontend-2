export type Language = 'en' | 'zh' | 'ms';

export interface Translation {
  en: string;
  zh: string;
  ms: string;
}

export type Category = 'vegetable' | 'meat' | 'seafood' | 'tofu-noodles';

export interface Ingredient {
  id: string;
  name: Translation;
  category: Category;
  image: string;
  popular: boolean;
  allergens?: string[];
}

export interface SoupBase {
  id: string;
  name: Translation;
  description: Translation;
  image: string;
  spiceLevel: number; // 0-5
  isDryPot?: boolean;
}

export type PortionSize = 'small' | 'regular' | 'large' | 'xlarge';

export interface PortionOption {
  id: PortionSize;
  name: Translation;
  weight: string;
  price: number;
}

export interface Addon {
  id: string;
  name: Translation;
  price: number;
  image: string;
}

export type SpiceLevel = 'mild' | 'medium' | 'spicy' | 'extra-spicy' | 'extreme';

export interface OrderIngredient {
  id: string;
  quantity: number;
}

export interface Order {
  portionSize: PortionSize | null;
  soupBase: string | null;
  ingredients: OrderIngredient[];
  spiceLevel: SpiceLevel;
  addons: string[];
  drinks: string[];
  sides: string[];
}

export type Screen =
  | 'welcome'
  | 'portion'
  | 'soup'
  | 'ingredients'
  | 'customization'
  | 'review'
  | 'payment'
  | 'confirmation';

export interface PaymentMethod {
  id: string;
  name: Translation;
  icon: string;
}
