// src/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Mono"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
],
};

