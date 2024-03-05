// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              borderBottom: '1px dashed',
              transition: 'all .2s ease-in-out',
            },
            'a:hover': {
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
            blockquote: { color: colors.zinc[400] },
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
