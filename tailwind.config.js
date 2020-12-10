module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
     './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: [
          'Playfair Display'
        ],
        sans: [
          'Lato'
        ],
        mono: [
          'monospace',
        ],
      },
      // colors: {
      //   blue: {
      //     '100': '#f5f5f5',
      //     '200': '#eeeeee',
      //     '300': '#e0e0e0',
      //     '400': '#bdbdbd',
      //     '500': '#9e9e9e',
      //     '600': '#757575',
      //     '700': '#616161',
      //     '800': '#424242',
      //     '900': '#212121',
      //   }
      // }
    },
  },
  variants: {
    borderRadius: ['responsive', 'focus'],
    borderWidth: ['responsive', 'active', 'focus'],
    width: ['responsive', 'focus']
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-fast': {
          transition: 'all .2s ease-out',
        },
        '.transition': {
          transition: 'all .5s ease-out',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}
