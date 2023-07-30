const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderColor: colors.grey,
      textColor: {
        white: '#fff'
      },
    },
    colors: {
      blue: "#009EE2",
      "blue-dark": '#253B7E',
      gray: colors.gray,
      yellow: colors.yellow,
      red: colors.red,
      green: colors.green,
    }
  },
  plugins: [],
}

