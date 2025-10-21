import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Button } from '../components/Button';
import { ProgressBar } from '../components/ProgressBar';

export const PaymentScreen: React.FC = () => {
  const { language, setCurrentScreen, getTotalPrice, getFinalPrice, getPointsDiscount, member, pointsToRedeem, setPointsToRedeem } = useOrder();
  const [processing, setProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [tempPoints, setTempPoints] = useState(0);

  const subtotal = getTotalPrice();
  const pointsDiscount = getPointsDiscount();
  const finalPrice = getFinalPrice();
  const total = finalPrice * 1.07; // Including tax
  const earnedPoints = Math.floor(finalPrice * 10); // Earn 10 points per dollar spent

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

  const handleApplyPoints = () => {
    setPointsToRedeem(tempPoints);
    setShowPointsModal(false);
  };

  const handleOpenPointsModal = () => {
    setTempPoints(pointsToRedeem);
    setShowPointsModal(true);
  };

  const maxPointsToUse = member ? Math.min(member.points, Math.floor(subtotal * 100)) : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={() => setCurrentScreen('review')}
            variant="outline"
            size="md"
            className="mb-4 sm:mb-6"
            disabled={processing}
          >
            ← {translations.back[language]}
          </Button>
          <ProgressBar currentStep={5} totalSteps={5} />
          <h1 className="text-2xl sm:text-3xl sm:text-5xl font-bold text-gray-900 text-center mb-4">
            {translations.selectPayment[language]}
          </h1>
        </div>

        {processing ? (
          // Processing State
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="inline-block animate-spin rounded-full h-24 w-24 border-8 border-gray-200 border-t-primary"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {translations.processing[language]}
            </h2>
            <p className="text-xl text-gray-600">{translations.securePayment[language]}</p>
          </div>
        ) : (
          <>
            {/* Member Info */}
            {member && (
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl p-6 mb-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xl mb-1">{translations.welcomeBack[language]}, {member.name}! 👋</p>
                    <p className="text-lg opacity-90">{translations.availablePoints[language]}: <span className="font-bold">{member.points.toLocaleString()}</span> {translations.pointsValue[language]}</p>
                  </div>
                </div>
                {member.points > 0 && (
                  <button
                    onClick={handleOpenPointsModal}
                    className="w-full bg-white text-purple-700 font-bold py-3 px-6 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">🎁</span>
                    {pointsToRedeem > 0 ? translations.pointsApplied[language] : translations.usePoints[language]}
                  </button>
                )}
              </div>
            )}

            {/* Total Amount */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-xl p-8 mb-8 text-white">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-xl">
                  <span>{translations.subtotal[language]}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {pointsDiscount > 0 && (
                  <div className="flex justify-between text-xl text-green-300">
                    <span>{translations.pointsDiscount[language]} ({pointsToRedeem.toLocaleString()} {translations.pointsValue[language]})</span>
                    <span>-${pointsDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl">
                  <span>{translations.tax[language]}</span>
                  <span>${(finalPrice * 0.07).toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t-2 border-white border-opacity-30 pt-4">
                <div className="flex justify-between items-center">
                  <p className="text-2xl">{translations.total[language]}</p>
                  <p className="text-6xl font-bold">${total.toFixed(2)}</p>
                </div>
              </div>
              {member && (
                <div className="mt-4 pt-4 border-t-2 border-white border-opacity-30 text-center">
                  <p className="text-lg opacity-90">
                    {translations.earnPoints[language]} <span className="font-bold text-accent">{earnedPoints}</span> {translations.pointsFromOrder[language]}
                  </p>
                </div>
              )}
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
              <div className="text-2xl sm:text-4xl">🔒</div>
              <p className="text-lg text-green-800">{translations.securePayment[language]}</p>
            </div>

            {/* Process Payment Button */}
            <div className="flex justify-center">
              <Button
                onClick={handlePayment}
                disabled={!selectedMethod}
                variant="success"
                size="xl"
                className="w-full sm:min-w-[500px]"
              >
                {translations.confirmAndPay[language]}
              </Button>
            </div>
          </>
        )}

        {/* Points Modal */}
        {showPointsModal && member && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {translations.usePoints[language]}
              </h2>

              <div className="mb-6 p-6 bg-purple-50 rounded-2xl">
                <div className="flex justify-between mb-3">
                  <span className="text-xl text-gray-700">{translations.availablePoints[language]}:</span>
                  <span className="text-xl font-bold text-purple-700">{member.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xl text-gray-700">Max to use (${subtotal.toFixed(2)}):</span>
                  <span className="text-xl font-bold text-purple-700">{maxPointsToUse.toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  {translations.pointsToUse[language]}
                </label>
                <input
                  type="number"
                  value={tempPoints || ''}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    setTempPoints(Math.min(Math.max(0, value), maxPointsToUse));
                  }}
                  min="0"
                  max={maxPointsToUse}
                  step="100"
                  className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                />
                <p className="text-lg text-gray-600 mt-2">100 {translations.pointsValue[language]} = $1.00</p>
              </div>

              {tempPoints > 0 && (
                <div className="mb-6 p-4 bg-green-50 rounded-xl">
                  <p className="text-xl text-center text-green-800">
                    {translations.pointsDiscount[language]}: <span className="font-bold">${(tempPoints / 100).toFixed(2)}</span>
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={() => {
                    setShowPointsModal(false);
                    setTempPoints(pointsToRedeem);
                  }}
                  variant="outline"
                  size="lg"
                  className="flex-1"
                >
                  {translations.cancel[language]}
                </Button>
                <Button
                  onClick={handleApplyPoints}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  {translations.applyPoints[language]}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
