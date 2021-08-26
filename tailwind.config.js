const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      ...defaultTheme.colors,
      twitter: {
        500: '#1da1f2',
        600: '#1A91DA'
      },
      like: '#E0245E'
    }
  },
  variants: {},
  plugins: []
}
