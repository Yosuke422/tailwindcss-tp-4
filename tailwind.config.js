/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          "body": "#E8F1FA",
          "white": "#ffffff",
          "primary": "#F8F1F1",
        },
      }
  },
  plugins: [],
  darkMode: "class",
  
};