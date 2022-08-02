module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'letterboxd': '#00C02F',
        'letterboxd-hover': '#03A11C',
        'letterboxd-outline': '#03C74D',
        'twitter-blue': '#1DA1F2',
        'twitter-blue-hover': '#0b7bc1',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '74%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}