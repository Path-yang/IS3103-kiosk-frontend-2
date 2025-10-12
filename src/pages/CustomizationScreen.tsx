import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { sauceAddons, drinks, sides } from '../data/addons';
import { soupBases } from '../data/soupBases';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { SpiceLevel } from '../types';

export const CustomizationScreen: React.FC = () => {
  const { order, language, setCurrentScreen, setSpiceLevel, toggleAddon, toggleDrink, toggleSide } =
    useOrder();

  const selectedSoup = soupBases.find((s) => s.id === order.soupBase);
  const isDryPot = selectedSoup?.isDryPot;

  const spiceLevels: { level: SpiceLevel; label: string; icon: string }[] = [
    { level: 'mild', label: translations.mild[language], icon: '🌶️' },
    { level: 'medium', label: translations.medium[language], icon: '🌶️🌶️' },
    { level: 'spicy', label: translations.spicy[language], icon: '🌶️🌶️🌶️' },
    { level: 'extra-spicy', label: translations.extraSpicy[language], icon: '🌶️🌶️🌶️🌶️' },
    { level: 'extreme', label: translations.extreme[language], icon: '🌶️🌶️🌶️🌶️🌶️' },
  ];

  const handleContinue = () => {
    setCurrentScreen('review');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => setCurrentScreen('soup')}
            variant="outline"
            size="md"
            className="mb-4 sm:mb-6"
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={3} totalSteps={5} />
          <h1 className="text-2xl sm:text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.customizeOrder[language]}
          </h1>
        </div>

        <div className="space-y-8">
          {/* Spice Level - Only for non-dry pot */}
          {!isDryPot && (
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
                {translations.adjustSpice[language]}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {spiceLevels.map((spice) => (
                  <button
                    key={spice.level}
                    onClick={() => setSpiceLevel(spice.level)}
                    className={`
                      p-6 rounded-xl border-4 transition-all duration-200 active:scale-95
                      ${
                        order.spiceLevel === spice.level
                          ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl'
                          : 'border-gray-300 bg-white hover:border-primary'
                      }
                    `}
                  >
                    <div className="text-2xl sm:text-4xl mb-2">{spice.icon}</div>
                    <div className="text-base font-semibold">{spice.label}</div>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Extra Toppings */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              {translations.extraToppings[language]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {sauceAddons.map((addon) => (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`
                    p-4 rounded-xl border-3 transition-all duration-200 active:scale-95 min-h-[120px]
                    ${
                      order.addons.includes(addon.id)
                        ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl ring-2 ring-primary'
                        : 'border-gray-300 bg-white hover:border-primary'
                    }
                  `}
                >
                  <img
                    src={addon.image}
                    alt={addon.name[language]}
                    className="w-full h-20 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-semibold">{addon.name[language]}</div>
                  <div className="text-primary font-bold">${addon.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Add a Drink */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              {translations.addDrink[language]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {drinks.map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => toggleDrink(drink.id)}
                  className={`
                    p-4 rounded-xl border-3 transition-all duration-200 active:scale-95
                    ${
                      order.drinks.includes(drink.id)
                        ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl ring-2 ring-primary'
                        : 'border-gray-300 bg-white hover:border-primary'
                    }
                  `}
                >
                  <img
                    src={drink.image}
                    alt={drink.name[language]}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-base font-semibold">{drink.name[language]}</div>
                  <div className="text-primary font-bold">${drink.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Add a Side */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              {translations.addSide[language]}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sides.map((side) => (
                <button
                  key={side.id}
                  onClick={() => toggleSide(side.id)}
                  className={`
                    p-4 rounded-xl border-3 transition-all duration-200 active:scale-95
                    ${
                      order.sides.includes(side.id)
                        ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl ring-2 ring-primary'
                        : 'border-gray-300 bg-white hover:border-primary'
                    }
                  `}
                >
                  <img
                    src={side.image}
                    alt={side.name[language]}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-base font-semibold">{side.name[language]}</div>
                  <div className="text-primary font-bold">${side.price.toFixed(2)}</div>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center mt-8">
          <Button onClick={handleContinue} variant="primary" size="xl" className="w-full sm:min-w-[400px]">
            {translations.proceedToCheckout[language]}
          </Button>
        </div>
      </div>
    </div>
  );
};
