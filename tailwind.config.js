/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          450: '#BA55D3',
          600: '#8B008B',
        },
        primary: {
          400: '#9370DB',
          500: '#9400D3',
        },
      },
      fontWeight: {
        bold: '900',
      },
    },
  },
  plugins: [],
};
