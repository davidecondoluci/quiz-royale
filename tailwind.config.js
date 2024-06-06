/** @type {import('tailwindcss').Config} */
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
        lightgray: "#eeeeee",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
