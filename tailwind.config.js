/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: `class`,
  content: [
    "./planets/*.{html,js}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {
    outline: ["focus"],
  },
  plugins: [require("flowbite/plugin")],
};

// npx tailwindcss -i ./landing_style/input.css -o ./dist/output.css --watch
