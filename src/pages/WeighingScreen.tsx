import React, { useState, useEffect } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';

export const WeighingScreen: React.FC = () => {
  const { language, setCurrentScreen, setWeight } = useOrder();
  const [currentWeight, setCurrentWeight] = useState<number>(0);
  const [isWeighing, setIsWeighing] = useState<boolean>(true);

  // Simulate weight reading (in a real implementation, this would come from a scale API)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuating weight reading
      const randomWeight = Math.random() * 0.1; // Faster accumulation to finish in 1.5s
      setCurrentWeight((prev) => {
        const newWeight = prev + randomWeight;
        return Math.min(newWeight, 2.5); // Max 2.5kg
      });
    }, 100);

    // Stop weighing after 1.5 seconds
    const timeout = setTimeout(() => {
      setIsWeighing(false);
      clearInterval(interval);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleConfirmWeight = () => {
    setWeight(currentWeight);
    setCurrentScreen('soup');
  };

  const handleReweigh = () => {
    setCurrentWeight(0);
    setIsWeighing(true);
    setTimeout(() => setIsWeighing(false), 1500);
  };

  // Price display removed per request; weighing screen focuses on weight only

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => setCurrentScreen('welcome')}
            variant="outline"
            size="md"
            className="mb-4 sm:mb-6"
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={1} totalSteps={5} />
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.weighYourFood[language]}
          </h1>
          <p className="text-xl text-gray-600 text-center">
            {translations.placeOnScale[language]}
          </p>
        </div>

        {/* Scale Display */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-8">
          <div className="text-center mb-8">
            {/* Scale Icon */}
            <div className="inline-block mb-6">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-8xl">⚖️</span>
              </div>
            </div>

            {/* Weight Display */}
            <div className="mb-6">
              <div className="text-gray-600 text-2xl mb-2">{translations.weight[language]}</div>
              <div className="text-8xl font-bold text-primary mb-4">
                {currentWeight.toFixed(2)}
                <span className="text-4xl ml-2">kg</span>
              </div>
              {isWeighing && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-lg text-green-600">{translations.weighing[language]}</span>
                </div>
              )}
            </div>

            {/* Price estimate removed */}

            {/* Weight Guidelines */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl">ℹ️</span>
                <h3 className="text-xl font-bold text-blue-900">
                  {translations.weightGuideline[language]}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600">{translations.lightMeal[language]}</div>
                  <div className="text-2xl font-bold text-primary">0.3-0.5 kg</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600">{translations.regularMeal[language]}</div>
                  <div className="text-2xl font-bold text-primary">0.6-1.0 kg</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600">{translations.largeMeal[language]}</div>
                  <div className="text-2xl font-bold text-primary">1.1-2.0 kg</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleReweigh}
            variant="outline"
            size="xl"
            className="sm:min-w-[250px]"
            disabled={isWeighing}
          >
            🔄 {translations.reweigh[language]}
          </Button>
          <Button
            onClick={handleConfirmWeight}
            variant="success"
            size="xl"
            className="sm:min-w-[350px]"
            disabled={isWeighing || currentWeight < 0.1}
          >
            {translations.confirmWeight[language]}
          </Button>
        </div>

        {/* Help Text */}
        {currentWeight < 0.1 && !isWeighing && (
          <div className="mt-6 text-center">
            <p className="text-lg text-red-600">{translations.noWeightDetected[language]}</p>
          </div>
        )}
      </div>
    </div>
  );
};
