import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Order, Screen, Language, SpiceLevel } from '../types';
import { sauceAddons, drinks, sides } from '../data/addons';
import { soupBases } from '../data/soupBases';

interface OrderContextType {
  order: Order;
  language: Language;
  currentScreen: Screen;
  setLanguage: (lang: Language) => void;
  setCurrentScreen: (screen: Screen) => void;
  setWeight: (weight: number) => void;
  setSoupBase: (soupId: string) => void;
  setSpiceLevel: (level: SpiceLevel) => void;
  toggleAddon: (addonId: string) => void;
  toggleDrink: (drinkId: string) => void;
  toggleSide: (sideId: string) => void;
  clearOrder: () => void;
  getTotalPrice: () => number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const initialOrder: Order = {
  weight: null,
  soupBase: null,
  spiceLevel: 'mild',
  addons: [],
  drinks: [],
  sides: [],
};

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [order, setOrder] = useState<Order>(initialOrder);
  const [language, setLanguage] = useState<Language>('en');
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [idleTimer, setIdleTimer] = useState<number | null>(null);

  // Configurable idle timeout (0 disables auto-reset)
  const idleTimeoutMs = 0; // disabled per request

  // Idle timeout - return to welcome screen after configured delay
  const resetIdleTimer = () => {
    if (idleTimer) clearTimeout(idleTimer);
    if (idleTimeoutMs > 0) {
      const timer = setTimeout(() => {
        if (currentScreen !== 'welcome') {
          setCurrentScreen('welcome');
          clearOrder();
        }
      }, idleTimeoutMs);
      setIdleTimer(timer);
    }
  };

  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, [currentScreen]);

  // Reset timer on any interaction
  useEffect(() => {
    const handleInteraction = () => resetIdleTimer();
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [idleTimer]);

  const setWeight = (weight: number) => {
    setOrder((prev) => ({ ...prev, weight }));
  };

  const setSoupBase = (soupId: string) => {
    setOrder((prev) => ({ ...prev, soupBase: soupId }));
  };

  const setSpiceLevel = (level: SpiceLevel) => {
    setOrder((prev) => ({ ...prev, spiceLevel: level }));
  };

  const toggleAddon = (addonId: string) => {
    setOrder((prev) => {
      const exists = prev.addons.includes(addonId);
      return {
        ...prev,
        addons: exists
          ? prev.addons.filter((id) => id !== addonId)
          : [...prev.addons, addonId],
      };
    });
  };

  const toggleDrink = (drinkId: string) => {
    setOrder((prev) => {
      const exists = prev.drinks.includes(drinkId);
      return {
        ...prev,
        drinks: exists
          ? prev.drinks.filter((id) => id !== drinkId)
          : [...prev.drinks, drinkId],
      };
    });
  };

  const toggleSide = (sideId: string) => {
    setOrder((prev) => {
      const exists = prev.sides.includes(sideId);
      return {
        ...prev,
        sides: exists
          ? prev.sides.filter((id) => id !== sideId)
          : [...prev.sides, sideId],
      };
    });
  };

  const clearOrder = () => {
    setOrder(initialOrder);
  };

  const getTotalPrice = (): number => {
    const pricePerKg = 25.0; // $25 per kg
    let total = 0;

    // Add weight-based price
    if (order.weight) {
      total += order.weight * pricePerKg;
    }

    // Add soup base price
    if (order.soupBase) {
      const soup = soupBases.find((s) => s.id === order.soupBase);
      if (soup) total += soup.price;
    }

    // Add addon prices
    order.addons.forEach((addonId) => {
      const addon = sauceAddons.find((a) => a.id === addonId);
      if (addon) total += addon.price;
    });

    // Add drink prices
    order.drinks.forEach((drinkId) => {
      const drink = drinks.find((d) => d.id === drinkId);
      if (drink) total += drink.price;
    });

    // Add side prices
    order.sides.forEach((sideId) => {
      const side = sides.find((s) => s.id === sideId);
      if (side) total += side.price;
    });

    return total;
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        language,
        currentScreen,
        setLanguage,
        setCurrentScreen,
        setWeight,
        setSoupBase,
        setSpiceLevel,
        toggleAddon,
        toggleDrink,
        toggleSide,
        clearOrder,
        getTotalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
