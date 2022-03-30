const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindForms = require('@tailwindcss/forms')
const tailwindAspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindForms, tailwindAspectRatio],
}
