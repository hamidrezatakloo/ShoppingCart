/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PassionOne: "Passion One",
      },
      backgroundImage: {
        primary: "linear-gradient(135deg, #42e695 0%,#3bb2b8 100%)",
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
        scaleUp: {
          "0%": { transform: "scale(.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        drop: "drop 1s ease-in-out forwards",
        close: "close 1s ease-in-out forwards",
        scaleUp: "scaleUp 1.5s linear both",
      },
    },
  },
  plugins: [],
};
