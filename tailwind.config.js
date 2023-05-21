/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      boxShadow: {
        inner: "0 2px 19px -3px #69bae0",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
