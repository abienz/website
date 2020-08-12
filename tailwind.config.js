const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      backgroundColor: {

      },
    }
  },
  plugins: [
    // Docs: https://tailwindui.com/documentation
    require('@tailwindcss/ui')
  ]
}
