import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { ingredients } from '../data/ingredients';
import { portionSizes } from '../data/portionSizes';
import { soupBases } from '../data/soupBases';
import { sauceAddons, drinks, sides } from '../data/addons';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';

export const ReviewScreen: React.FC = () => {
  const { order, language, setCurrentScreen, getTotalPrice } = useOrder();

  const portionInfo = portionSizes.find((p) => p.id === order.portionSize);
  const soupInfo = soupBases.find((s) => s.id === order.soupBase);

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const handleConfirmAndPay = () => {
    setCurrentScreen('payment');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => setCurrentScreen('customization')}
            variant="outline"
            size="md"
            className="mb-4 sm:mb-6"
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={5} totalSteps={6} />
          <h1 className="text-2xl sm:text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.orderSummary[language]}
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {/* Portion Size */}
          <section className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {translations.portionSize[language]}
                </h3>
                <p className="text-lg text-gray-600">
                  {portionInfo?.name[language]} ({portionInfo?.weight})
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">${portionInfo?.price.toFixed(2)}</p>
                <button
                  onClick={() => setCurrentScreen('portion')}
                  className="text-sm text-blue-600 hover:underline mt-1"
                >
                  {translations.edit[language]}
                </button>
              </div>
            </div>
          </section>

          {/* Soup Base */}
          <section className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {translations.soupBase[language]}
                </h3>
                <p className="text-lg text-gray-600">{soupInfo?.name[language]}</p>
                <p className="text-sm text-gray-500">{soupInfo?.description[language]}</p>
              </div>
              <button
                onClick={() => setCurrentScreen('soup')}
                className="text-sm text-blue-600 hover:underline"
              >
                {translations.edit[language]}
              </button>
            </div>
          </section>

          {/* Ingredients */}
          <section className="mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {translations.ingredients[language]} ({order.ingredients.length})
              </h3>
              <button
                onClick={() => setCurrentScreen('ingredients')}
                className="text-sm text-blue-600 hover:underline"
              >
                {translations.edit[language]}
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {order.ingredients.map((item) => {
                const ingredient = ingredients.find((i) => i.id === item.id);
                if (!ingredient) return null;
                return (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-3 flex justify-between">
                    <span className="text-gray-700">{ingredient.name[language]}</span>
                    <span className="text-primary font-semibold">×{item.quantity}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Add-ons */}
          {(order.addons.length > 0 || order.drinks.length > 0 || order.sides.length > 0) && (
            <section className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {translations.addons[language]}
                </h3>
                <button
                  onClick={() => setCurrentScreen('customization')}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {translations.edit[language]}
                </button>
              </div>
              <div className="space-y-2">
                {order.addons.map((addonId) => {
                  const addon = sauceAddons.find((a) => a.id === addonId);
                  if (!addon) return null;
                  return (
                    <div
                      key={addonId}
                      className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-gray-700">{addon.name[language]}</span>
                      <span className="text-primary font-semibold">
                        ${addon.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
                {order.drinks.map((drinkId) => {
                  const drink = drinks.find((d) => d.id === drinkId);
                  if (!drink) return null;
                  return (
                    <div
                      key={drinkId}
                      className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-gray-700">{drink.name[language]}</span>
                      <span className="text-primary font-semibold">
                        ${drink.price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
                {order.sides.map((sideId) => {
                  const side = sides.find((s) => s.id === sideId);
                  if (!side) return null;
                  return (
                    <div
                      key={sideId}
                      className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
                    >
                      <span className="text-gray-700">{side.name[language]}</span>
                      <span className="text-primary font-semibold">${side.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Totals */}
          <section>
            <div className="space-y-3">
              <div className="flex justify-between text-xl">
                <span className="text-gray-600">{translations.subtotal[language]}</span>
                <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl">
                <span className="text-gray-600">{translations.tax[language]}</span>
                <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-3xl pt-4 border-t-2 border-gray-300">
                <span className="font-bold text-gray-900">{translations.total[language]}</span>
                <span className="font-bold text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Estimated Prep Time */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">{translations.estimatedPrepTime[language]}</p>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleConfirmAndPay}
            variant="success"
            size="xl"
            className="w-full sm:min-w-[500px]"
          >
            {translations.confirmAndPay[language]}
          </Button>
        </div>
      </div>
    </div>
  );
};
