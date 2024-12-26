
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    colors: {
      "primary-light": "#23b863",
      primary: "#1a894b",
      "primary-dark": "#0b532b",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};