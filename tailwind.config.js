const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.js',
    './pages/**/*.js',
    './pages/**/*.tsx',
    './pages/**/*.mdx',
    './components/**/*.mdx',
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      ...defaultTheme.colors,
      ...colors,
      gray: colors.blueGray,
      cc: {
        green1: '#5CC6BC',
        green2: '#15A9BF',
        blueDark: '#2264AA',
        blueSoft: '#3DA5D9',
        orange: '#FAA917',
      },
    },
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      fontSize: {
        // Set in Major Third typescale (1.25)
        base: '1em',
        lg: '1.25em',
        xl: '1.563em',
        '2xl': '1.953em',
        '3xl': '2.441em',
        '4xl': '3.052em',
        '5xl': '3.815em',
      },
      lineHeight: {
        tighter: 1.1,
      },
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
    padding: ['responsive', 'first', 'last'],
    scale: ['hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/custom-forms'),
  ],
}
