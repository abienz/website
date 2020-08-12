const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        'sans-condensed': [
          'Open Sans Condensed',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: [
    // Docs: https://tailwindui.com/documentation
    require('@tailwindcss/ui')
  ]
}
