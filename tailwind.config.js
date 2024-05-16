const colors = require("./assets/colors.js");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors,
    },
    fontFamily: {
      thin: "Lexend-Thin",
      extralight: "Lexend-ExtraLight",
      light: "Lexend-Light",
      regular: "Lexend-Regular",
      medium: "Lexend-Medium",
      semibold: "Lexend-SemiBold",
      bold: "Lexend-Bold",
      extrabold: "Lexend-ExtraBold",
      black: "Lexend-Black",
    },
    fontWeight: false,
  },
  plugins: [],
};
