const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              color: colors.black,
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
            color: '#bbb',
            'a:not(.no-link)': { color: colors.white },
            'h1, h2, h3, h4, h5, h6': { color: colors.white },
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
