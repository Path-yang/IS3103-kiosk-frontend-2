import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { ingredients } from '../data/ingredients';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { CategoryTabs } from '../components/CategoryTabs';
import { IngredientCard } from '../components/IngredientCard';
import { CartSidebar } from '../components/CartSidebar';
import { Category } from '../types';

export const IngredientSelection: React.FC = () => {
  const { language, setCurrentScreen } = useOrder();
  const [activeCategory, setActiveCategory] = useState<Category>('vegetable');

  const filteredIngredients = ingredients.filter((ing) => ing.category === activeCategory);

  const handleReviewOrder = () => {
    setCurrentScreen('customization');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <Button
                onClick={() => setCurrentScreen('soup')}
                variant="outline"
                size="md"
                className="mb-4"
              >
                ← {translations.back[language]}
              </Button>
              <ProgressBar currentStep={3} totalSteps={6} />
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.selectIngredients[language]}
              </h1>

              {/* Category Tabs */}
              <CategoryTabs
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Ingredient Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
              {filteredIngredients.map((ingredient) => (
                <IngredientCard key={ingredient.id} ingredient={ingredient} />
              ))}
            </div>
          </div>
        </div>

        {/* Cart Sidebar */}
        <div className="w-96 p-6 bg-gray-100 border-l border-gray-200">
          <CartSidebar showReviewButton onReview={handleReviewOrder} />
        </div>
      </div>

      {/* Floating Help Button */}
      <button className="fixed bottom-8 left-8 bg-accent text-gray-900 px-6 py-4 rounded-full shadow-2xl font-bold text-lg hover:bg-accent-dark transition-colors min-h-touch">
        ❓ {translations.needHelp[language]}
      </button>
    </div>
  );
};
