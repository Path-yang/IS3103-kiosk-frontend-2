import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Order, Screen, Language, PortionSize, SpiceLevel } from '../types';

interface OrderContextType {
  order: Order;
  language: Language;
  currentScreen: Screen;
  setLanguage: (lang: Language) => void;
  setCurrentScreen: (screen: Screen) => void;
  setPortionSize: (size: PortionSize) => void;
  setSoupBase: (soupId: string) => void;
  addIngredient: (ingredientId: string) => void;
  removeIngredient: (ingredientId: string) => void;
  updateIngredientQuantity: (ingredientId: string, quantity: number) => void;
  setSpiceLevel: (level: SpiceLevel) => void;
  toggleAddon: (addonId: string) => void;
  toggleDrink: (drinkId: string) => void;
  toggleSide: (sideId: string) => void;
  clearOrder: () => void;
  getTotalPrice: () => number;
  getIngredientQuantity: (ingredientId: string) => number;
  getTotalItems: () => number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const initialOrder: Order = {
  portionSize: null,
  soupBase: null,
  ingredients: [],
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

  // Idle timeout - return to welcome screen after 60 seconds
  const resetIdleTimer = () => {
    if (idleTimer) {
      clearTimeout(idleTimer);
    }
    const timer = setTimeout(() => {
      if (currentScreen !== 'welcome') {
        setCurrentScreen('welcome');
        clearOrder();
      }
    }, 60000); // 60 seconds
    setIdleTimer(timer);
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

  const setPortionSize = (size: PortionSize) => {
    setOrder((prev) => ({ ...prev, portionSize: size }));
  };

  const setSoupBase = (soupId: string) => {
    setOrder((prev) => ({ ...prev, soupBase: soupId }));
  };

  const addIngredient = (ingredientId: string) => {
    setOrder((prev) => {
      const existingIndex = prev.ingredients.findIndex((i) => i.id === ingredientId);
      if (existingIndex >= 0) {
        const updated = [...prev.ingredients];
        updated[existingIndex].quantity += 1;
        return { ...prev, ingredients: updated };
      }
      return {
        ...prev,
        ingredients: [...prev.ingredients, { id: ingredientId, quantity: 1 }],
      };
    });
  };

  const removeIngredient = (ingredientId: string) => {
    setOrder((prev) => {
      const existingIndex = prev.ingredients.findIndex((i) => i.id === ingredientId);
      if (existingIndex >= 0) {
        const updated = [...prev.ingredients];
        if (updated[existingIndex].quantity > 1) {
          updated[existingIndex].quantity -= 1;
          return { ...prev, ingredients: updated };
        }
        return {
          ...prev,
          ingredients: prev.ingredients.filter((i) => i.id !== ingredientId),
        };
      }
      return prev;
    });
  };

  const updateIngredientQuantity = (ingredientId: string, quantity: number) => {
    setOrder((prev) => {
      if (quantity <= 0) {
        return {
          ...prev,
          ingredients: prev.ingredients.filter((i) => i.id !== ingredientId),
        };
      }
      const existingIndex = prev.ingredients.findIndex((i) => i.id === ingredientId);
      if (existingIndex >= 0) {
        const updated = [...prev.ingredients];
        updated[existingIndex].quantity = quantity;
        return { ...prev, ingredients: updated };
      }
      return {
        ...prev,
        ingredients: [...prev.ingredients, { id: ingredientId, quantity }],
      };
    });
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
    // Import price data
    const portionPrices: Record<string, number> = {
      small: 12.95,
      regular: 18.95,
      large: 24.95,
      xlarge: 32.95,
    };

    let total = 0;

    // Add portion price
    if (order.portionSize) {
      total += portionPrices[order.portionSize] || 0;
    }

    // Add addon prices (would need to import actual prices)
    // Simplified for now - each addon ~$1
    total += order.addons.length * 1.0;

    // Add drink prices (~$4 each)
    total += order.drinks.length * 4.0;

    // Add side prices (~$5 each)
    total += order.sides.length * 5.0;

    return total;
  };

  const getIngredientQuantity = (ingredientId: string): number => {
    const ingredient = order.ingredients.find((i) => i.id === ingredientId);
    return ingredient ? ingredient.quantity : 0;
  };

  const getTotalItems = (): number => {
    return order.ingredients.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        language,
        currentScreen,
        setLanguage,
        setCurrentScreen,
        setPortionSize,
        setSoupBase,
        addIngredient,
        removeIngredient,
        updateIngredientQuantity,
        setSpiceLevel,
        toggleAddon,
        toggleDrink,
        toggleSide,
        clearOrder,
        getTotalPrice,
        getIngredientQuantity,
        getTotalItems,
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
