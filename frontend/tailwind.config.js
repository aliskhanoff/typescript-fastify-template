const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      Kanit: ['Kanit', 'Tahoma', 'sans-serif']
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
