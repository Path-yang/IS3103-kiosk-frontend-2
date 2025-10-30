import React from 'react';
import { useOrder } from '../context/OrderContext';
import { translations } from '../data/translations';

export const PriceSidebar: React.FC = () => {
  const { language, getTotalPrice } = useOrder();
  const subtotal = getTotalPrice();
  const serviceCharge = subtotal * 0.10; // 10% service charge
  const tax = subtotal * 0.09; // 9% tax
  const total = subtotal + serviceCharge + tax;

  return (
    <aside
      className="hidden lg:block fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl z-40"
    >
      <div className="p-5 flex flex-col h-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{translations.orderSummary[language]}</h2>

        <div className="mt-2 space-y-3 text-lg">
          <div className="flex justify-between">
            <span className="text-gray-600">{translations.subtotal[language]}</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{translations.serviceCharge[language]}</span>
            <span className="font-semibold">${serviceCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{translations.tax[language]}</span>
            <span className="font-semibold">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t">
            <span className="text-xl font-bold">{translations.total[language]}</span>
            <span className="text-xl font-bold text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-auto text-xs text-gray-400">
          <p>Prices update in real-time</p>
        </div>
      </div>
    </aside>
  );
};

