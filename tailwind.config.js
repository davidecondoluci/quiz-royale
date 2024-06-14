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
        lightgray: "#D1D7E0",
        midgray: "#A4B0BC",
        darkgray: "#525E6C",
        white: "#ffffff",
        red: "#E83B3B",
        darkred: "#AE2334",
        green: "#9CC242",
        darkgreen: "#599323",
        cyan: "#9FD8E9",
        blue: "#60A0DA",
        darkblue: "#4183BE",
        purple: "#A08AC5",
        darkpurple: "#6A548C",
      },
    },
  },
  plugins: [],
};
