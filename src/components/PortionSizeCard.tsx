import React from 'react';
import { PortionOption } from '../types';
import { useOrder } from '../context/OrderContext';

interface PortionSizeCardProps {
  portion: PortionOption;
  selected: boolean;
  onClick: () => void;
}

export const PortionSizeCard: React.FC<PortionSizeCardProps> = ({
  portion,
  selected,
  onClick,
}) => {
  const { language } = useOrder();

  return (
    <button
      onClick={onClick}
      className={`
        relative p-8 rounded-2xl border-4 transition-all duration-200
        active:scale-95 min-h-[200px] flex flex-col items-center justify-center
        ${
          selected
            ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl'
            : 'border-gray-300 bg-white hover:border-primary hover:shadow-lg'
        }
      `}
    >
      {/* Selection indicator */}
      {selected && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Bowl size illustration */}
      <div className="mb-4">
        <div
          className={`
          rounded-full bg-gradient-to-br from-primary to-primary-dark
          ${portion.id === 'small' ? 'w-16 h-16' : ''}
          ${portion.id === 'regular' ? 'w-20 h-20' : ''}
          ${portion.id === 'large' ? 'w-24 h-24' : ''}
          ${portion.id === 'xlarge' ? 'w-28 h-28' : ''}
        `}
        />
      </div>

      <h3 className="text-2xl font-bold mb-2 text-gray-800">{portion.name[language]}</h3>
      <p className="text-lg text-gray-600 mb-3">{portion.weight}</p>
      <p className="text-3xl font-bold text-primary">${portion.price.toFixed(2)}</p>
    </button>
  );
};
