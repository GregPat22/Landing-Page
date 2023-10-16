/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./planets/*.html", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// npx tailwindcss -i ./landing_style/input.css -o ./dist/output.css --watch
