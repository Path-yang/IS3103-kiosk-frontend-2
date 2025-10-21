import { SoupBase } from '../types';

export const soupBases: SoupBase[] = [
  {
    id: 'bone-broth',
    name: {
      en: 'Classic Bone Broth',
      zh: '经典骨汤',
      ms: 'Sup Tulang Klasik',
      ta: 'பாரம்பரிய எலும்புச் சூப்',
    },
    description: {
      en: 'Mild, creamy & nutritious',
      zh: '温和，奶油般，营养丰富',
      ms: 'Lembut, berkrim & berkhasiat',
      ta: 'மிதமானது, கிரீமி & சத்தானது',
    },
    image: '/images/photos/soups/bone-broth.jpg',
    price: 2.0,
    spiceLevel: 0,
  },
  {
    id: 'mala-spicy',
    name: {
      en: 'Signature Mala Spicy',
      zh: '招牌麻辣',
      ms: 'Mala Pedas Tandatangan',
      ta: 'சிக்னேச்சர் மாலா கார சூப்',
    },
    description: {
      en: 'Numbing & spicy',
      zh: '麻辣鲜香',
      ms: 'Kebas & pedas',
      ta: 'மயக்கும் மற்றும் காரமானது',
    },
    image: '/images/photos/soups/mala-hotpot.jpg',
    price: 2.5,
    spiceLevel: 4,
  },
  {
    id: 'tomato',
    name: {
      en: 'Tomato Soup',
      zh: '番茄浓汤',
      ms: 'Sup Tomato',
      ta: 'தக்காளி சூப்',
    },
    description: {
      en: 'Tangy & fresh',
      zh: '酸甜开胃',
      ms: 'Masam & segar',
      ta: 'சற்றே புளிப்பும் புதியதும்',
    },
    image: '/images/photos/soups/tomato-soup.jpg',
    price: 2.0,
    spiceLevel: 0,
  },
  {
    id: 'collagen',
    name: {
      en: 'Collagen Soup',
      zh: '胶原蛋白汤',
      ms: 'Sup Kolagen',
      ta: 'கொள்ளாஜன் சூப்',
    },
    description: {
      en: 'Rich collagen, silky mouthfeel',
      zh: '富含胶原，口感顺滑',
      ms: 'Kaya kolagen, tekstur licin',
      ta: 'நிறைந்த கொள்ளாஜன், மென்மையான உணர்வு',
    },
    image: '/images/photos/soups/seolleongtang.jpg',
    price: 2.5,
    spiceLevel: 0,
  },
  {
    id: 'tom-yum',
    name: {
      en: 'Tom Yum Soup',
      zh: '冬阴功汤',
      ms: 'Sup Tom Yum',
      ta: 'டாம் யம் சூப்',
    },
    description: {
      en: 'Sour & spicy',
      zh: '酸辣开胃',
      ms: 'Masam & pedas',
      ta: 'புளிப்பும் காரமும்',
    },
    image: '/images/photos/soups/tom-yum.jpg',
    price: 3.0,
    spiceLevel: 3,
  },
  {
    id: 'dry-pot',
    name: {
      en: 'Dry Spicy Pot',
      zh: '麻辣香锅',
      ms: 'Periuk Kering Pedas',
      ta: 'உலர் கார பாத்திரம்',
    },
    description: {
      en: 'Stir-fried, no soup',
      zh: '干锅炒制',
      ms: 'Goreng kering, tanpa sup',
      ta: 'வறுத்து தயாரிப்பு, சூப் இல்லை',
    },
    image: '/images/photos/soups/mala-xiangguo.jpg',
    price: 3.5,
    spiceLevel: 5,
    isDryPot: true,
  },
];
