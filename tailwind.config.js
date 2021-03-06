const colors = require("tailwindcss/colors")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.sky,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    // debugScreens: {
    //   position: ["top", "left"],
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  // plugins: [require("tailwindcss-debug-screens")],
}
