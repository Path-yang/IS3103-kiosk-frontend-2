import React from 'react';
import { SoupBase } from '../types';
import { useOrder } from '../context/OrderContext';

interface SoupBaseCardProps {
  soup: SoupBase;
  selected: boolean;
  onClick: () => void;
}

export const SoupBaseCard: React.FC<SoupBaseCardProps> = ({ soup, selected, onClick }) => {
  const { language } = useOrder();

  const renderSpiceLevel = () => {
    const chilis = '🌶️'.repeat(soup.spiceLevel);
    return soup.spiceLevel > 0 ? chilis : '✨';
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-200
        active:scale-95 min-h-[280px] flex flex-col
        ${
          selected
            ? 'ring-4 ring-primary shadow-2xl'
            : 'ring-2 ring-gray-300 hover:ring-primary hover:shadow-xl'
        }
      `}
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img src={soup.image} alt={soup.name[language]} className="w-full h-full object-cover" />
        {selected && (
          <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-white flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{soup.name[language]}</h3>
        <p className="text-base text-gray-600 mb-3 flex-1">{soup.description[language]}</p>
        <div className="flex items-center justify-center text-2xl">{renderSpiceLevel()}</div>
      </div>
    </button>
  );
};
