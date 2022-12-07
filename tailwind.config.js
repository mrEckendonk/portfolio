/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
        // margin: {
        //   '60vh': '60vh',
        // },
    // colors: {
    //   brown: '#3c3a39',
    // },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', 'sans-serif', ...defaultTheme.fontFamily.sans],
        popins: ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
