import { SoupBase } from '../types';

export const soupBases: SoupBase[] = [
  {
    id: 'bone-broth',
    name: {
      en: 'Classic Bone Broth',
      zh: '经典骨汤',
      ms: 'Sup Tulang Klasik',
    },
    description: {
      en: 'Mild, creamy & nutritious',
      zh: '温和，奶油般，营养丰富',
      ms: 'Lembut, berkrim & berkhasiat',
    },
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    price: 2.0,
    spiceLevel: 0,
  },
  {
    id: 'mala-spicy',
    name: {
      en: 'Signature Mala Spicy',
      zh: '招牌麻辣',
      ms: 'Mala Pedas Tandatangan',
    },
    description: {
      en: 'Numbing & spicy',
      zh: '麻辣鲜香',
      ms: 'Kebas & pedas',
    },
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    price: 2.5,
    spiceLevel: 4,
  },
  {
    id: 'tomato',
    name: {
      en: 'Tomato Soup',
      zh: '番茄浓汤',
      ms: 'Sup Tomato',
    },
    description: {
      en: 'Tangy & fresh',
      zh: '酸甜开胃',
      ms: 'Masam & segar',
    },
    image: 'https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=400&h=300&fit=crop',
    price: 2.0,
    spiceLevel: 0,
  },
  {
    id: 'mushroom',
    name: {
      en: 'Mushroom Soup',
      zh: '菌菇鲜汤',
      ms: 'Sup Cendawan',
    },
    description: {
      en: 'Umami & savory',
      zh: '鲜美浓郁',
      ms: 'Umami & gurih',
    },
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=400&h=300&fit=crop',
    price: 2.5,
    spiceLevel: 0,
  },
  {
    id: 'tom-yum',
    name: {
      en: 'Tom Yum Soup',
      zh: '冬阴功汤',
      ms: 'Sup Tom Yum',
    },
    description: {
      en: 'Sour & spicy',
      zh: '酸辣开胃',
      ms: 'Masam & pedas',
    },
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop',
    price: 3.0,
    spiceLevel: 3,
  },
  {
    id: 'dry-pot',
    name: {
      en: 'Dry Spicy Pot',
      zh: '麻辣香锅',
      ms: 'Periuk Kering Pedas',
    },
    description: {
      en: 'Stir-fried, no soup',
      zh: '干锅炒制',
      ms: 'Goreng kering, tanpa sup',
    },
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    price: 3.5,
    spiceLevel: 5,
    isDryPot: true,
  },
];
