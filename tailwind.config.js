module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twitter: {
          500: '#4A99E9',
          600: '#428AD2',
        },
        like: {
          500: '#E0245E',
        },
        retweet: {
          500: '#00ba7c',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
