/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: `class`,
  content: [
    "./planets/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  variants: {
    outline: ["focus"],
  },
  plugins: [require("flowbite/plugin")],
};

// npx tailwindcss -i ./landing_style/input.css -o ./dist/output.css --watch
