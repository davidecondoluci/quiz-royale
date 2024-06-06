/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains"', ...defaultTheme.fontFamily.sans],
        serif: ['"Mondwest"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        transparent: "transparent",
        black: "#000000",
        lightgray: "#EEEEEE",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
