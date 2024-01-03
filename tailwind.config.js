/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Audiowide: ['Audiowide,sans-serif'],
        jakarta: ['Plus jakarta sans'],
      },
      screens: {
        xs: '480px',
        xmd: '990px',
      },
      colors: {
        primary: '#909090',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
