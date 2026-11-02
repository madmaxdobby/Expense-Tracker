/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#FFFCF7',
        blue: {
          50: '#FCF4EE',
          100: '#F8E7D9',
          200: '#F0CCB4',
          300: '#E5A981',
          400: '#D7865B',
          500: '#C56843',
          600: '#AE5133',
          700: '#8E4029',
          800: '#713524',
          900: '#5D3024',
          950: '#351C16',
        },
        gray: {
          50: '#FAF8F4',
          100: '#F4EEE6',
          200: '#E7DCCE',
          300: '#D5C7B7',
          400: '#B7A898',
          500: '#958678',
          600: '#77685B',
          700: '#62554A',
          800: '#4F443A',
          900: '#3B322B',
          950: '#29221C',
        },
        slate: {
          50: '#FAF8F5',
          100: '#F4EFE9',
          200: '#E8DED3',
          300: '#D6C9BC',
          400: '#BAAA9A',
          500: '#998777',
          600: '#7A695A',
          700: '#635347',
          800: '#4C3F35',
          900: '#382E27',
          950: '#241C17',
        },
        // Light mode colors
        light: {
          bg: '#FFFCF7',
          bg_secondary: '#F6F0E8',
          text: '#342820',
          text_secondary: '#76685C',
          border: '#E7DCCE',
          card: '#FFFCF7',
        },
        // Dark mode colors
        dark_mode: {
          bg: '#17110D',
          bg_secondary: '#241B15',
          text: '#F8F1E8',
          text_secondary: '#D6C8B8',
          border: '#44352A',
          card: '#2D221A',
        },
        // Brand colors
        midnight: '#17110D',
        primary: '#AE5133',
        gold: '#D6A75D',
        dark: '#17110D',
        card: '#241B15',
        border: '#44352A'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'sm-light': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md-light': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'lg-light': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'sm-dark': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'md-dark': '0 4px 6px rgba(0, 0, 0, 0.5)',
        'lg-dark': '0 10px 15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
