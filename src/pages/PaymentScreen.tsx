import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';

export const PaymentScreen: React.FC = () => {
  const { language, setCurrentScreen, getTotalPrice } = useOrder();
  const [processing, setProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const total = getTotalPrice() * 1.07; // Including tax

  const paymentMethods = [
    {
      id: 'card',
      name: translations.creditCard[language],
      icon: '💳',
      description: 'Visa, Mastercard, Amex',
    },
    {
      id: 'mobile',
      name: translations.mobilePayment[language],
      icon: '📱',
      description: 'Apple Pay, Google Pay, GrabPay',
    },
    {
      id: 'cash',
      name: translations.cash[language],
      icon: '💵',
      description: 'Call staff for assistance',
    },
  ];

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setCurrentScreen('confirmation');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={() => setCurrentScreen('review')}
            variant="outline"
            size="md"
            className="mb-6"
            disabled={processing}
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={6} totalSteps={6} />
          <h1 className="text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.selectPayment[language]}
          </h1>
        </div>

        {processing ? (
          // Processing State
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="mb-8">
              <div className="inline-block animate-spin rounded-full h-24 w-24 border-8 border-gray-200 border-t-primary"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {translations.processing[language]}
            </h2>
            <p className="text-xl text-gray-600">{translations.securePayment[language]}</p>
          </div>
        ) : (
          <>
            {/* Total Amount */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 mb-8 text-white text-center">
              <p className="text-2xl mb-2">{translations.total[language]}</p>
              <p className="text-6xl font-bold">${total.toFixed(2)}</p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4 mb-8">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`
                    w-full p-8 rounded-2xl border-4 transition-all duration-200
                    active:scale-98 flex items-center justify-between
                    ${
                      selectedMethod === method.id
                        ? 'border-primary bg-primary-light bg-opacity-10 shadow-xl'
                        : 'border-gray-300 bg-white hover:border-primary hover:shadow-lg'
                    }
                  `}
                >
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">{method.icon}</div>
                    <div className="text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{method.name}</h3>
                      <p className="text-lg text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  {selectedMethod === method.id && (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Security Notice */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-8 flex items-center gap-4">
              <div className="text-4xl">🔒</div>
              <p className="text-lg text-green-800">{translations.securePayment[language]}</p>
            </div>

            {/* Process Payment Button */}
            <div className="flex justify-center">
              <Button
                onClick={handlePayment}
                disabled={!selectedMethod}
                variant="success"
                size="xl"
                className="min-w-[500px]"
              >
                {translations.confirmAndPay[language]}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
