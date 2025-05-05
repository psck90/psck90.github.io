// src/tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

