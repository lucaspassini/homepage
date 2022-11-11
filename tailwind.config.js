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
        dark: '#111111',
        white: '#FFFFFF',
        grey: '#BDBDBD',
        lightText: '#333333',
        darkText: '#FFFFFF',
        greyText: '#BABABA',
        lightBorder: '#1A202C',
        darkBorder: '#A4A5A7'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
