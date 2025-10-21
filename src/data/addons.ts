import { Addon } from '../types';

export const sauceAddons: Addon[] = [
  {
    id: 'sesame-sauce',
    name: {
      en: 'Sesame Sauce',
      zh: '芝麻酱',
      ms: 'Sos Bijan',
      ta: 'எள்ளு சாஸ்',
    },
    price: 1.5,
    image: '/images/photos/addons/sesame-sauce.jpg',
  },
  {
    id: 'peanut-sauce',
    name: {
      en: 'Peanut Sauce',
      zh: '花生酱',
      ms: 'Sos Kacang',
      ta: 'வேர்க்கடலை சாஸ்',
    },
    price: 1.5,
    image: '/images/photos/addons/peanut-sauce.jpg',
  },
  {
    id: 'extra-cilantro',
    name: {
      en: 'Extra Cilantro',
      zh: '额外香菜',
      ms: 'Daun Ketumbar Tambahan',
      ta: 'கூடுதல் கொத்தமல்லி',
    },
    price: 0.5,
    image: '/images/photos/addons/cilantro.jpg',
  },
  {
    id: 'extra-green-onions',
    name: {
      en: 'Extra Green Onions',
      zh: '额外葱花',
      ms: 'Daun Bawang Tambahan',
      ta: 'கூடுதல் வெங்காயத்தாள்',
    },
    price: 0.5,
    image: '/images/photos/addons/green-onions.jpg',
  },
  {
    id: 'crispy-garlic',
    name: {
      en: 'Crispy Garlic',
      zh: '蒜酥',
      ms: 'Bawang Putih Rangup',
      ta: 'முறுகுறுப்பான பூண்டு',
    },
    price: 1.0,
    image: '/images/photos/addons/crispy-garlic.jpg',
  },
];

export const drinks: Addon[] = [
  {
    id: 'milk-tea',
    name: {
      en: 'Milk Tea',
      zh: '奶茶',
      ms: 'Teh Susu',
      ta: 'பால்டீ',
    },
    price: 4.5,
    image: '/images/photos/drinks/milk-tea.jpg',
  },
  {
    id: 'brown-sugar-milk',
    name: {
      en: 'Brown Sugar Milk Tea',
      zh: '黑糖珍珠奶茶',
      ms: 'Teh Susu Gula Merah',
      ta: 'பழுப்பு சர்க்கரை பால்டீ',
    },
    price: 5.5,
    image: '/images/photos/drinks/brown-sugar-milk-tea.jpg',
  },
  {
    id: 'lemon-tea',
    name: {
      en: 'Lemon Tea',
      zh: '柠檬茶',
      ms: 'Teh Lemon',
      ta: 'எலுமிச்சை டீ',
    },
    price: 3.5,
    image: '/images/photos/drinks/lemon-tea.jpg',
  },
  {
    id: 'soda',
    name: {
      en: 'Soft Drink',
      zh: '汽水',
      ms: 'Minuman Ringan',
      ta: 'மென்மையான பானம்',
    },
    price: 2.5,
    image: '/images/photos/drinks/soft-drink.jpg',
  },
  {
    id: 'plum-juice',
    name: {
      en: 'Plum Juice',
      zh: '酸梅汤',
      ms: 'Jus Plum',
      ta: 'பிளம் ஜூஸ்',
    },
    price: 3.0,
    image: '/images/photos/drinks/plum-juice.jpg',
  },
  {
    id: 'herbal-tea',
    name: {
      en: 'Herbal Tea',
      zh: '凉茶',
      ms: 'Teh Herba',
      ta: 'மூலிகை டீ',
    },
    price: 3.5,
    image: '/images/photos/drinks/herbal-tea.jpg',
  },
];

export const sides: Addon[] = [
  {
    id: 'spring-rolls',
    name: {
      en: 'Spring Rolls (3pcs)',
      zh: '春卷 (3个)',
      ms: 'Popia (3 biji)',
      ta: 'ஸ்பிரிங் ரோல்ஸ் (3 துண்டுகள்)',
    },
    price: 5.0,
    image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=300&h=200&fit=crop&q=80',
  },
  {
    id: 'dumplings',
    name: {
      en: 'Pork Dumplings (5pcs)',
      zh: '猪肉饺子 (5个)',
      ms: 'Dumpling Daging Babi (5 biji)',
      ta: 'பன்றி டம்ப்ளிங்ஸ் (5 துண்டுகள்)',
    },
    price: 6.5,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop&q=80',
  },
  {
    id: 'fried-chicken',
    name: {
      en: 'Fried Chicken Wings (4pcs)',
      zh: '炸鸡翅 (4个)',
      ms: 'Sayap Ayam Goreng (4 biji)',
      ta: 'வறுத்த கோழி இறக்கைகள் (4 துண்டுகள்)',
    },
    price: 7.0,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&h=200&fit=crop&q=80',
  },
  {
    id: 'fried-tofu',
    name: {
      en: 'Crispy Tofu',
      zh: '脆皮豆腐',
      ms: 'Tauhu Rangup',
      ta: 'முறுகுறுப்பான தோஃபு',
    },
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&q=80',
  },
  {
    id: 'egg-tart',
    name: {
      en: 'Egg Tart',
      zh: '蛋挞',
      ms: 'Tat Telur',
      ta: 'முட்டை டார்ட்',
    },
    price: 3.0,
    image: '/images/photos/sides/egg-tart.jpg',
  },
];
