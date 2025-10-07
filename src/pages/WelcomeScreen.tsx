import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';
import { Language } from '../types';
import { Button } from '../components/Button';

export const WelcomeScreen: React.FC = () => {
  const { language, setLanguage, setCurrentScreen } = useOrder();

  const handleStartOrder = () => {
    setCurrentScreen('portion');
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ms', label: 'Bahasa Melayu', flag: '🇲🇾' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-red-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Hero Image */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl mb-8">
            <span className="text-8xl">🍜</span>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl font-bold text-white mb-4">{translations.welcome[language]}</h1>
        <h2 className="text-6xl font-extrabold text-accent mb-12 drop-shadow-lg">
          {translations.restaurantName[language]}
        </h2>

        {/* Language Selection */}
        <div className="mb-12">
          <p className="text-2xl text-white mb-6 font-semibold">
            {translations.selectLanguage[language]}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`
                  px-8 py-5 rounded-2xl font-bold text-xl transition-all duration-200
                  active:scale-95 min-h-touch min-w-[200px] flex items-center justify-center gap-3
                  ${
                    language === lang.code
                      ? 'bg-accent text-gray-900 shadow-2xl scale-110'
                      : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30 backdrop-blur'
                  }
                `}
              >
                <span className="text-3xl">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Start Order Button */}
        <div className="mb-8">
          <Button
            onClick={handleStartOrder}
            variant="success"
            size="xl"
            className="min-w-[400px] text-3xl py-8 shadow-2xl"
          >
            {translations.startOrder[language]}
          </Button>
        </div>

        {/* Estimated Time */}
        <p className="text-xl text-white text-opacity-90">{translations.estimatedTime[language]}</p>
      </div>
    </div>
  );
};
