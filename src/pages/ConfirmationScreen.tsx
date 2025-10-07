import React, { useState, useEffect } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Button } from '../components/Button';

export const ConfirmationScreen: React.FC = () => {
  const { language, setCurrentScreen, clearOrder, getTotalPrice } = useOrder();
  const [countdown, setCountdown] = useState(30);
  const [waitTime, setWaitTime] = useState(10);

  const orderNumber = `A${Math.floor(Math.random() * 900 + 100)}`;
  const total = getTotalPrice() * 1.07;

  useEffect(() => {
    // Countdown timer for auto-redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          handleNewOrder();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Wait time countdown
    const waitTimer = setInterval(() => {
      setWaitTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // Every minute

    return () => {
      clearInterval(timer);
      clearInterval(waitTimer);
    };
  }, []);

  const handleNewOrder = () => {
    clearOrder();
    setCurrentScreen('welcome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-green-700 mb-4">
            {translations.orderConfirmed[language]}
          </h1>
          <p className="text-2xl text-gray-700">{translations.thankYou[language]}</p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
          {/* Order Number */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <p className="text-2xl text-gray-600 mb-3">{translations.orderNumber[language]}</p>
            <p className="text-8xl font-bold text-primary">{orderNumber}</p>
          </div>

          {/* Status */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gray-200">
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              {translations.preparingOrder[language]}
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div
                className="w-4 h-4 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-4 h-4 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
            <div className="bg-accent-light rounded-xl p-6">
              <p className="text-xl text-gray-700 mb-2">
                {translations.estimatedWait[language]}
              </p>
              <p className="text-5xl font-bold text-primary">
                {waitTime} {translations.minutes[language]}
              </p>
            </div>
          </div>

          {/* Total Amount */}
          <div className="text-center">
            <p className="text-2xl text-gray-600 mb-2">{translations.total[language]}</p>
            <p className="text-5xl font-bold text-gray-900">${total.toFixed(2)}</p>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
              <div className="text-6xl">📱</div>
            </div>
            <p className="text-lg text-gray-600">Scan to track your order</p>
          </div>
        </div>

        {/* Start New Order Button */}
        <div className="text-center">
          <Button onClick={handleNewOrder} variant="primary" size="xl" className="min-w-[400px]">
            {translations.startNewOrder[language]}
          </Button>
          <p className="text-lg text-gray-600 mt-4">
            Auto-redirecting in {countdown} seconds...
          </p>
        </div>
      </div>
    </div>
  );
};
