/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        customYellow: "#FFD15C",
      },
    },
  },
  variants: {},
  plugins: [],
};
