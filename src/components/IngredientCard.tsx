import React from 'react';
import { Ingredient } from '../types';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';

interface IngredientCardProps {
  ingredient: Ingredient;
}

export const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  const { language, getIngredientQuantity, addIngredient, removeIngredient } = useOrder();
  const quantity = getIngredientQuantity(ingredient.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={ingredient.image}
          alt={ingredient.name[language]}
          className="w-full h-full object-cover"
        />
        {ingredient.popular && (
          <div className="absolute top-2 left-2 bg-accent text-gray-900 text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <span className="mr-1">⭐</span>
            {translations.customerFavorite[language]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h4 className="text-base font-semibold mb-2 text-gray-800 line-clamp-2">
          {ingredient.name[language]}
        </h4>

        {/* Allergens */}
        {ingredient.allergens && ingredient.allergens.length > 0 && (
          <div className="mb-2 text-xs text-orange-600 flex flex-wrap gap-1">
            {ingredient.allergens.map((allergen) => (
              <span key={allergen} className="bg-orange-100 px-2 py-0.5 rounded">
                {allergen === 'shellfish' && '🦐'}
                {allergen === 'peanuts' && '🥜'}
                {allergen}
              </span>
            ))}
          </div>
        )}

        {/* Quantity Controls */}
        <div className="mt-auto flex items-center justify-between">
          {quantity === 0 ? (
            <button
              onClick={() => addIngredient(ingredient.id)}
              className="w-full bg-primary text-white font-bold py-3 rounded-lg active:scale-95 transition-transform min-h-touch-sm"
            >
              + Add
            </button>
          ) : (
            <div className="w-full flex items-center justify-between bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => removeIngredient(ingredient.id)}
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary text-2xl font-bold active:scale-95 transition-transform shadow"
              >
                −
              </button>
              <span className="text-xl font-bold text-gray-800 px-2">{quantity}</span>
              <button
                onClick={() => addIngredient(ingredient.id)}
                className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-2xl font-bold active:scale-95 transition-transform shadow"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
