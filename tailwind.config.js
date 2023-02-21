module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans']
    },
    extend: {
      colors: {
        dark: '#1C1C1C',
        white: '#F2F2F2',
        grey: '#BDBDBD',
        lightText: '#333333',
        darkText: '#FFFFFF',
        greyText: '#E5E5E5',
        lightBorder: '#1A202C',
        darkBorder: '#A4A5A7',
        greyBorder: '#6f6f6f',
        lightCard: '#FFFF'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
