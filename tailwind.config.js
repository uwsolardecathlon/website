/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'neutral-100': '#19191B',
      'neutral-200': '#61646B',
      'neutral-300': '#AFB1B6',
      'neutral-400': '#EFEFF0',
      white: '#FFFFFF',
      primary: '#4F6F52',
      'primary-dark': '#3A4D39',
      'primary-light': '#739072',
      secondary: '#ECE3CE',
      purple: '#32006e',
    },
    extend: {},
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  },
  plugins: [],
};
