/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      colors: {
        pink: "#e28797", // direct use: text-pink, bg-pink
        brand: {
          pink: "#e28797", // use: bg-brand-pink, text-brand-pink
          offwhite: "#fff8f1",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animate-glow': {
          animation: 'glow 1.5s ease-in-out infinite alternate',
        },
        '@keyframes glow': {
          '0%': { opacity: 0.2 },
          '100%': { opacity: 1 },
        },
      });
    }),
  ],
};
