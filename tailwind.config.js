const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindForms = require('@tailwindcss/forms')
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio')
const tailwindTypography = require('@tailwindcss/typography')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red: colors.red,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindForms, tailwindAspectRatio, tailwindTypography],
}
