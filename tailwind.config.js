/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PassionOne: "Passion One",
      },
      keyframes: {
        drop: {
          "0%": { width: "0" },
          "100%": { width: "66.666667%" },
        },
        close: {
          "0%": { width: "66.666667%" },
          "100%": { width: "0" },
        },
      },
      animation: {
        drop: "drop 1s ease-in-out forwards",
        close: "close 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
