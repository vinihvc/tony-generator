/* eslint-disable @typescript-eslint/no-var-requires */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...defaultTheme.colors,
      twitter: {
        500: '#1da1f2',
        600: '#1A91DA'
      },
      like: {
        500: '#E0245E'
      },
      retweet: {
        500: '#00ba7c'
      }
    }
  },
  variants: {},
  plugins: []
}
