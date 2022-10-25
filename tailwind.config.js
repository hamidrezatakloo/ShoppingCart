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
      },
      animation: {
        drop: "drop 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
