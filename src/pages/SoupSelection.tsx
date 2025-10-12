import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { soupBases } from '../data/soupBases';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { SoupBaseCard } from '../components/SoupBaseCard';

export const SoupSelection: React.FC = () => {
  const { order, language, setCurrentScreen, setSoupBase } = useOrder();

  const handleContinue = () => {
    if (order.soupBase) {
      setCurrentScreen('customization');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => setCurrentScreen('weighing')}
            variant="outline"
            size="md"
            className="mb-4 sm:mb-6"
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={2} totalSteps={5} />
          <h1 className="text-2xl sm:text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.selectSoup[language]}
          </h1>
        </div>

        {/* Soup Base Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {soupBases.map((soup) => (
            <SoupBaseCard
              key={soup.id}
              soup={soup}
              selected={order.soupBase === soup.id}
              onClick={() => setSoupBase(soup.id)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={!order.soupBase}
            variant="primary"
            size="xl"
            className="w-full sm:min-w-[400px]"
          >
            {translations.continue[language]}
          </Button>
        </div>
      </div>
    </div>
  );
};
