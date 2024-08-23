const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
  'components/**/*.{vue,js,ts}',
  'layouts/**/*.vue',
  'pages/**/*.vue',
  'composables/**/*.{js,ts}',
  'plugins/**/*.{js,ts}',
  'App.{js,ts,vue}',
  'app.{js,ts,vue}',
  'Error.{js,ts,vue}',
  'error.{js,ts,vue}',
  'content/**/*.md'
],
  theme: { 
       screens: {
      'tablet': '450px',
      ...defaultTheme.screens, 
    },
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  }, 
  plugins: [
    // ...
  ], 
};