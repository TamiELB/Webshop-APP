/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4A150', // Primary Color
          dark: '#A9773B',
          light: '#E3BE85',
          muted: '#C29A48',
        },
        burgundy: {
          DEFAULT: '#9B1B30', // Secondary Color
          dark: '#7A1525',
          light: '#B03B4A',
          muted: '#85232F',
        },
        roseGold: {
          DEFAULT: '#B76E79', // Accent Color
          dark: '#8F515C',
          light: '#D49A9F',
          muted: '#A8606A',
        },
      },
    },
  },
  plugins: [],
}

