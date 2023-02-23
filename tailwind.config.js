/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-base': '#29b363',
        'blue-base': '#2c7edb',
        'gray-base': '#969696',
        'grey-dark-1': '#646464',
      },
    },
  },
  plugins: [],
};
