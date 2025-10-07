# Zhangliang Malatang - Self-Ordering Kiosk 🍜

A modern, touchscreen-optimized self-ordering kiosk web application for Zhangliang Malatang restaurant, built with React, TypeScript, and Tailwind CSS.

![Kiosk Preview](https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800&h=400&fit=crop)

## 🌟 Features

### Multi-Language Support
- **English** 🇬🇧
- **简体中文** 🇨🇳
- **Bahasa Melayu** 🇲🇾

### Complete Ordering Flow
1. **Welcome Screen** - Language selection and welcoming interface
2. **Portion Size Selection** - Choose from Small, Regular, Large, or Extra Large
3. **Soup Base Selection** - 6 delicious soup options with spice level indicators
4. **Ingredient Selection** - Browse 90+ ingredients across 4 categories:
   - 🥬 Vegetables (40+ items)
   - 🥩 Meats (20+ items)
   - 🦐 Seafood (15+ items)
   - 🍜 Tofu & Noodles (15+ items)
5. **Customization** - Add extras, drinks, and sides
6. **Order Review** - Detailed summary with pricing breakdown
7. **Payment** - Multiple payment method support
8. **Confirmation** - Order number and estimated wait time

### Touch-Optimized Design
- **Minimum touch target size**: 60x60px (kiosk-optimized)
- **Large, readable fonts**: 18px minimum body text
- **High contrast colors** for excellent readability
- **Visual feedback** on all interactions
- **Generous spacing** between elements
- **Smooth animations** and transitions

### Smart Features
- 🔄 **Auto-idle timeout** - Returns to welcome screen after 60 seconds of inactivity
- 🛒 **Real-time cart tracking** - Always visible cart with live updates
- ⭐ **Popular items** - Customer favorites highlighted
- 🌶️ **Spice level indicators** - Visual spice ratings for all soup bases
- 💰 **Live price calculation** - Including tax breakdown
- 🎨 **Allergen indicators** - Clear warnings for shellfish and peanuts
- ⏱️ **Estimated prep time** - 8-12 minutes preparation time display
- 🔢 **Auto-redirect** - Returns to welcome after order confirmation (30s)

## 🚀 Tech Stack

- **Framework**: React 18.2
- **Language**: TypeScript 5.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **State Management**: React Context API
- **No External Dependencies**: All data stored in memory (no localStorage/sessionStorage)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/IS3103-kiosk-frontend-2.git

# Navigate to project directory
cd IS3103-kiosk-frontend-2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── CartSidebar.tsx
│   ├── CategoryTabs.tsx
│   ├── IngredientCard.tsx
│   ├── PortionSizeCard.tsx
│   ├── ProgressBar.tsx
│   └── SoupBaseCard.tsx
├── context/            # State management
│   └── OrderContext.tsx
├── data/              # Mock data and translations
│   ├── addons.ts
│   ├── ingredients.ts
│   ├── portionSizes.ts
│   ├── soupBases.ts
│   └── translations.ts
├── pages/             # Screen components
│   ├── WelcomeScreen.tsx
│   ├── PortionSelection.tsx
│   ├── SoupSelection.tsx
│   ├── IngredientSelection.tsx
│   ├── CustomizationScreen.tsx
│   ├── ReviewScreen.tsx
│   ├── PaymentScreen.tsx
│   └── ConfirmationScreen.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#D32F2F` - Main brand color
- **Accent Yellow**: `#FFC107` - Call-to-action and highlights
- **Background**: `#F9FAFB` - Light gray for main background
- **Text**: `#1F2937` - Dark gray for readability

### Typography
- **Body Text**: 18px minimum (enhanced readability for kiosks)
- **Headers**: 24px+ for clear hierarchy
- **Buttons**: 18-24px for easy reading at distance

### Touch Targets
- **Minimum Size**: 60x60px (exceeds standard 44px for kiosk use)
- **Button Height**: 60-80px for primary actions
- **Spacing**: Generous padding and margins to prevent mis-taps

## 🎯 Usage

### Development
```bash
npm run dev
# Open http://localhost:5173 in your browser
```

### Production Build
```bash
npm run build
# Output will be in the 'dist' directory
```

### Type Checking
```bash
npm run lint
```

## 📱 Recommended Display Settings

- **Resolution**: 1080x1920px (portrait orientation)
- **Scale**: 100% (no browser zoom)
- **Browser**: Chrome/Edge in kiosk mode
- **Touch**: Capacitive touchscreen recommended

### Kiosk Mode Setup (Chrome)
```bash
# Windows
chrome.exe --kiosk "http://localhost:5173"

# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --kiosk "http://localhost:5173"

# Linux
google-chrome --kiosk "http://localhost:5173"
```

## 🔧 Configuration

### Idle Timeout
Edit `src/context/OrderContext.tsx` to change the idle timeout duration (default: 60 seconds):
```typescript
const timer = setTimeout(() => {
  // ...
}, 60000); // Change this value (in milliseconds)
```

### Auto-Redirect on Confirmation
Edit `src/pages/ConfirmationScreen.tsx` to change the countdown (default: 30 seconds):
```typescript
const [countdown, setCountdown] = useState(30); // Change this value
```

### Pricing
Edit `src/data/portionSizes.ts`, `src/data/addons.ts` to update prices.

### Tax Rate
Edit `src/pages/ReviewScreen.tsx` and `src/pages/PaymentScreen.tsx`:
```typescript
const tax = subtotal * 0.07; // Change 0.07 to your tax rate
```

## 🌐 Adding More Languages

1. Add language code to `src/types/index.ts`:
```typescript
export type Language = 'en' | 'zh' | 'ms' | 'your-lang';
```

2. Update all Translation objects in `src/data/translations.ts` and data files with your language key.

3. Add language button to `src/pages/WelcomeScreen.tsx`.

## 📊 Performance

- **Build Size**: ~203KB JS (gzipped: ~61KB)
- **CSS Size**: ~23KB (gzipped: ~5KB)
- **Load Time**: <1 second on modern hardware
- **No External API Calls**: All data is local

## 🚧 Future Enhancements

- [ ] Backend API integration for real-time inventory
- [ ] Payment gateway integration
- [ ] Order tracking system
- [ ] Analytics dashboard
- [ ] Nutritional information display
- [ ] Dietary restriction filters
- [ ] Loyalty program integration
- [ ] Kitchen display system (KDS) integration

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Path-yang**
- GitHub: [@Path-yang](https://github.com/Path-yang)

## 🙏 Acknowledgments

- Images sourced from [Unsplash](https://unsplash.com)
- Design inspired by modern kiosk UX best practices
- Built with ❤️ for Zhangliang Malatang
- Special thanks to the React and Tailwind CSS communities

---

**Note**: This is a demo/prototype application. For production use, integrate with a proper backend API for inventory management, payment processing, and order fulfillment.
