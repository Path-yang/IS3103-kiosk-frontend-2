import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Button } from '../components/Button';

export const WelcomeScreen: React.FC = () => {
  const { language, setLanguage, setCurrentScreen } = useOrder();

  const handleStartOrder = () => {
    setCurrentScreen('memberLogin');
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <div className="min-h-screen bg-[#FF6B2C] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center px-4">
        {/* Hero Image - Zhangliang Logo */}
        <div className="mb-6 sm:mb-8">
          <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-4 sm:mb-8">
            <img 
              src="/images/zhangliang-logo.jpg" 
              alt="Zhangliang Malatang Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">{translations.welcome[language]}</h1>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-8 sm:mb-12 drop-shadow-lg">
          {translations.restaurantName[language]}
        </h2>

        {/* Language Selection */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xl sm:text-2xl text-white mb-4 sm:mb-6 font-semibold">
            {translations.selectLanguage[language]}
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`
                  px-4 py-3 sm:px-8 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl transition-all duration-200
                  active:scale-95 min-h-touch min-w-[140px] sm:min-w-[200px] flex items-center justify-center gap-2 sm:gap-3
                  ${
                    language === lang.code
                      ? 'bg-white text-[#FF6B2C] shadow-2xl scale-105 sm:scale-110'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 backdrop-blur'
                  }
                `}
              >
                <span className="text-2xl sm:text-3xl">{lang.flag}</span>
                <span className="text-sm sm:text-base">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Start Order Button */}
        <div className="mb-6 sm:mb-8">
          <Button
            onClick={handleStartOrder}
            variant="success"
            size="xl"
            className="w-full sm:min-w-[400px] text-2xl sm:text-3xl py-6 sm:py-8 shadow-2xl"
          >
            {translations.startOrder[language]}
          </Button>
        </div>

        {/* Estimated Time */}
        <p className="text-base sm:text-xl text-white text-opacity-90">{translations.estimatedTime[language]}</p>
      </div>
    </div>
  );
};
