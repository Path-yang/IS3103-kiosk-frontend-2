import React from 'react';
import { OrderProvider, useOrder } from './context/OrderContext';
import { WelcomeScreen } from './pages/WelcomeScreen';
import { WeighingScreen } from './pages/WeighingScreen';
import { SoupSelection } from './pages/SoupSelection';
import { CustomizationScreen } from './pages/CustomizationScreen';
import { ReviewScreen } from './pages/ReviewScreen';
import { PaymentScreen } from './pages/PaymentScreen';
import { ConfirmationScreen } from './pages/ConfirmationScreen';

const AppContent: React.FC = () => {
  const { currentScreen } = useOrder();

  return (
    <div className="min-h-screen">
      {currentScreen === 'welcome' && <WelcomeScreen />}
      {currentScreen === 'weighing' && <WeighingScreen />}
      {currentScreen === 'soup' && <SoupSelection />}
      {currentScreen === 'customization' && <CustomizationScreen />}
      {currentScreen === 'review' && <ReviewScreen />}
      {currentScreen === 'payment' && <PaymentScreen />}
      {currentScreen === 'confirmation' && <ConfirmationScreen />}
    </div>
  );
};

function App() {
  return (
    <OrderProvider>
      <AppContent />
    </OrderProvider>
  );
}

export default App;
