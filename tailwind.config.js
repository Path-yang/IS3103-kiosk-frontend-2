/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F',
          dark: '#B71C1C',
          light: '#EF5350',
        },
        accent: {
          DEFAULT: '#FFC107',
          dark: '#FFA000',
          light: '#FFECB3',
        },
      },
      fontSize: {
        'touch': '18px',
        'touch-lg': '20px',
        'touch-xl': '24px',
        'kiosk-header': '32px',
        'kiosk-title': '28px',
      },
      spacing: {
        'touch': '60px',
        'touch-sm': '48px',
      },
      minHeight: {
        'touch': '60px',
      },
      minWidth: {
        'touch': '60px',
      },
    },
  },
  plugins: [],
}
