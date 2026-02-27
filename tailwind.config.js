/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        roboto: ["Roboto Condensed", "ui-sans-serif", "system-ui", "sans-serif"],
        anton: ["Anton", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};