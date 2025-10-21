import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Button } from '../components/Button';
import { Member } from '../types';

export const MemberLoginScreen: React.FC = () => {
  const { language, setCurrentScreen, setMember } = useOrder();
  const [showLogin, setShowLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock member database for demo purposes
  const mockMembers: Member[] = [
    {
      id: '1',
      name: 'John Doe',
      phoneNumber: '12345678',
      points: 1500,
    },
    {
      id: '2',
      name: '张伟',
      phoneNumber: '87654321',
      points: 2500,
    },
    {
      id: '3',
      name: 'Ali Rahman',
      phoneNumber: '98765432',
      points: 800,
    },
  ];

  const handleContinueAsGuest = () => {
    setMember(null);
    setCurrentScreen('weighing');
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const member = mockMembers.find((m) => m.phoneNumber === phoneNumber);

      if (member) {
        setMember(member);
        setCurrentScreen('weighing');
      } else {
        setError(translations.memberNotFound[language]);
      }
      setLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    setShowLogin(false);
    setPhoneNumber('');
    setError('');
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-red-900 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl w-full">
          {/* Back Button */}
          <Button
            onClick={handleBack}
            variant="outline"
            size="md"
            className="mb-6 bg-white bg-opacity-20 text-white border-white hover:bg-opacity-30"
          >
            ← {translations.back[language]}
          </Button>

          {/* Login Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-4xl sm:text-5xl">👤</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {translations.loginAsMember[language]}
              </h1>
              <p className="text-lg text-gray-600">{translations.enterPhoneNumber[language]}</p>
            </div>

            {/* Phone Number Input */}
            <div className="mb-6">
              <label className="block text-xl font-semibold text-gray-700 mb-3">
                {translations.phoneNumber[language]}
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                placeholder="12345678"
                maxLength={8}
                className="w-full px-6 py-5 text-2xl border-4 border-gray-300 rounded-2xl focus:border-primary focus:outline-none transition-colors"
              />
              <p className="text-sm text-gray-500 mt-2">Demo: Try 12345678, 87654321, or 98765432</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-xl">
                <p className="text-red-700 text-center">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <Button
              onClick={handleLogin}
              disabled={phoneNumber.length !== 8 || loading}
              variant="primary"
              size="xl"
              className="w-full mb-4"
            >
              {loading ? '⏳ Loading...' : `${translations.login[language]} →`}
            </Button>

            {/* Guest Option */}
            <button
              onClick={handleContinueAsGuest}
              className="w-full text-center text-lg text-gray-600 hover:text-gray-900 transition-colors py-3"
              disabled={loading}
            >
              {translations.continueAsGuest[language]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-red-900 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Back Button */}
        <Button
          onClick={() => setCurrentScreen('welcome')}
          variant="outline"
          size="md"
          className="mb-6 bg-white bg-opacity-20 text-white border-white hover:bg-opacity-30"
        >
          ← {translations.back[language]}
        </Button>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {translations.memberOrGuest[language]}
          </h1>
          <p className="text-xl sm:text-2xl text-white text-opacity-90">
            {translations.memberBenefits[language]}
          </p>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Member Login Card */}
          <button
            onClick={handleShowLogin}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 hover:scale-105 transition-transform duration-200 active:scale-95"
          >
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl sm:text-7xl">👤</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {translations.loginAsMember[language]}
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <p className="text-lg text-gray-700">
                    {language === 'en' && 'Earn points on every purchase'}
                    {language === 'zh' && '每次购买可赚取积分'}
                    {language === 'ms' && 'Dapatkan mata pada setiap pembelian'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <p className="text-lg text-gray-700">
                    {language === 'en' && 'Use points for discounts'}
                    {language === 'zh' && '使用积分享受折扣'}
                    {language === 'ms' && 'Guna mata untuk diskaun'}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <p className="text-lg text-gray-700">
                    {language === 'en' && 'Exclusive member offers'}
                    {language === 'zh' && '专属会员优惠'}
                    {language === 'ms' && 'Tawaran eksklusif ahli'}
                  </p>
                </div>
              </div>
            </div>
          </button>

          {/* Guest Card */}
          <button
            onClick={handleContinueAsGuest}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 hover:scale-105 transition-transform duration-200 active:scale-95"
          >
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl sm:text-7xl">🚶</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {translations.continueAsGuest[language]}
              </h2>
              <p className="text-xl text-gray-600">
                {language === 'en' && 'Quick checkout without registration'}
                {language === 'zh' && '快速结账，无需注册'}
                {language === 'ms' && 'Pembayaran pantas tanpa pendaftaran'}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

