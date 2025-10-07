import React from 'react';
import { Category } from '../types';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  const { language } = useOrder();

  const categories: { id: Category; label: string; icon: string }[] = [
    { id: 'vegetable', label: translations.vegetables[language], icon: '🥬' },
    { id: 'meat', label: translations.meat[language], icon: '🥩' },
    { id: 'seafood', label: translations.seafood[language], icon: '🦐' },
    { id: 'tofu-noodles', label: translations.tofuNoodles[language], icon: '🍜' },
  ];

  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`
            flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg
            transition-all duration-200 whitespace-nowrap min-h-touch-sm
            ${
              activeCategory === cat.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
            }
          `}
        >
          <span className="text-2xl">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};
