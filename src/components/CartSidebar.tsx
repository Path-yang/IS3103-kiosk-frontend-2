import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { ingredients } from '../data/ingredients';
import { portionSizes } from '../data/portionSizes';
import { soupBases } from '../data/soupBases';

interface CartSidebarProps {
  showReviewButton?: boolean;
  onReview?: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  showReviewButton = false,
  onReview,
}) => {
  const { order, language, getTotalPrice, clearOrder } = useOrder();

  const getPortionName = () => {
    if (!order.portionSize) return '-';
    const portion = portionSizes.find((p) => p.id === order.portionSize);
    return portion ? `${portion.name[language]} (${portion.weight})` : '-';
  };

  const getSoupBaseName = () => {
    if (!order.soupBase) return '-';
    const soup = soupBases.find((s) => s.id === order.soupBase);
    return soup ? soup.name[language] : '-';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{translations.yourCart[language]}</h2>
        {order.ingredients.length > 0 && (
          <button
            onClick={clearOrder}
            className="text-sm text-red-600 hover:text-red-700 underline"
          >
            {translations.clearAll[language]}
          </button>
        )}
      </div>

      {/* Portion & Soup */}
      <div className="mb-4 pb-4 border-b border-gray-200">
        <div className="mb-2">
          <span className="text-sm text-gray-600">{translations.portionSize[language]}:</span>
          <p className="text-base font-semibold">{getPortionName()}</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">{translations.soupBase[language]}:</span>
          <p className="text-base font-semibold">{getSoupBaseName()}</p>
        </div>
      </div>

      {/* Ingredients */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">
          {translations.ingredients[language]} ({order.ingredients.length})
        </h3>
        {order.ingredients.length === 0 ? (
          <p className="text-gray-400 text-center py-4">{translations.emptyCart[language]}</p>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {order.ingredients.map((item) => {
              const ingredient = ingredients.find((i) => i.id === item.id);
              if (!ingredient) return null;
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center text-sm bg-gray-50 rounded-lg p-2"
                >
                  <span className="flex-1 truncate">{ingredient.name[language]}</span>
                  <span className="text-primary font-semibold ml-2">×{item.quantity}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t-2 border-gray-200 pt-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-gray-800">{translations.total[language]}</span>
          <span className="text-2xl font-bold text-primary">${getTotalPrice().toFixed(2)}</span>
        </div>
      </div>

      {/* Review Button */}
      {showReviewButton && onReview && (
        <button
          onClick={onReview}
          disabled={!order.portionSize || !order.soupBase || order.ingredients.length === 0}
          className="w-full mt-4 bg-accent text-gray-900 font-bold py-4 rounded-xl text-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-touch active:scale-95 transition-transform"
        >
          {translations.reviewOrder[language]}
        </button>
      )}
    </div>
  );
};
