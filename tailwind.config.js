const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f5f5f5'
        }
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        'sans-condensed': [
          'Open Sans Condensed',
          ...defaultTheme.fontFamily.sans
        ]
      },
      boxShadow: {
        default: '0 2px 5px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: [
    // Docs: https://tailwindui.com/documentation
    require('@tailwindcss/ui')
  ]
}
