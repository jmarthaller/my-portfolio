module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'letterboxd': '#00C02F',
        'letterboxd-hover': '#03A11C',
        'letterboxd-outline': '#03C74D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}