const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              color: colors.sky[500],
              borderBottom: '1px dashed',
              transition: 'all .2s ease-in-out',
            },
            'a:hover': {
              color: colors.sky[700],
              borderBottomStyle: 'solid',
              transition: 'all .2s ease-in-out',
            },
          },
        },
        dark: {
          css: {
            color: 'white',
            a: { color: colors.sky[500] },
            'a:hover': {
              color: colors.sky[300],
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
