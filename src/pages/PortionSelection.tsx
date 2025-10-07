import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { portionSizes } from '../data/portionSizes';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';
import { PortionSizeCard } from '../components/PortionSizeCard';

export const PortionSelection: React.FC = () => {
  const { order, language, setCurrentScreen, setPortionSize } = useOrder();

  const handleContinue = () => {
    if (order.portionSize) {
      setCurrentScreen('soup');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => setCurrentScreen('welcome')}
            variant="outline"
            size="md"
            className="mb-6"
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={1} totalSteps={6} />
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.selectPortion[language]}
          </h1>
        </div>

        {/* Portion Size Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portionSizes.map((portion) => (
            <PortionSizeCard
              key={portion.id}
              portion={portion}
              selected={order.portionSize === portion.id}
              onClick={() => setPortionSize(portion.id)}
            />
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={!order.portionSize}
            variant="primary"
            size="xl"
            className="min-w-[400px]"
          >
            {translations.continue[language]}
          </Button>
        </div>

        {/* Cart Preview */}
        {order.portionSize && (
          <div className="mt-8 text-center bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-xl text-gray-600">
              {translations.total[language]}:{' '}
              <span className="text-3xl font-bold text-primary ml-2">
                $
                {portionSizes.find((p) => p.id === order.portionSize)?.price.toFixed(2) || '0.00'}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
