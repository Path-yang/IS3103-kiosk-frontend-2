import { PortionOption } from '../types';

export const portionSizes: PortionOption[] = [
  {
    id: 'small',
    name: {
      en: 'Small',
      zh: '小份',
      ms: 'Kecil',
    },
    weight: '0.5 kg',
    price: 12.95,
  },
  {
    id: 'regular',
    name: {
      en: 'Regular',
      zh: '中份',
      ms: 'Biasa',
    },
    weight: '0.75 kg',
    price: 18.95,
  },
  {
    id: 'large',
    name: {
      en: 'Large',
      zh: '大份',
      ms: 'Besar',
    },
    weight: '1 kg',
    price: 24.95,
  },
  {
    id: 'xlarge',
    name: {
      en: 'Extra Large',
      zh: '特大份',
      ms: 'Sangat Besar',
    },
    weight: '1.5 kg',
    price: 32.95,
  },
];
