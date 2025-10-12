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
    image: '/images/soups/bone-broth.svg',
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
    image: '/images/soups/mala-spicy.svg',
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
    image: '/images/soups/tomato.svg',
    price: 2.0,
    spiceLevel: 0,
  },
  {
    id: 'collagen',
    name: {
      en: 'Collagen Soup',
      zh: '胶原蛋白汤',
      ms: 'Sup Kolagen',
    },
    description: {
      en: 'Rich collagen, silky mouthfeel',
      zh: '富含胶原，口感顺滑',
      ms: 'Kaya kolagen, tekstur licin',
    },
    image: '/images/soups/collagen.svg',
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
    image: '/images/soups/tom-yum.svg',
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
    image: '/images/soups/dry-pot.svg',
    price: 3.5,
    spiceLevel: 5,
    isDryPot: true,
  },
];
