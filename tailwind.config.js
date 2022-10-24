/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PassionOne: "Passion One",
      },
      backgroundImage: {
        primary: "linear-gradient(to right , #6366f1, #a855f7 ,#ec4899) ",
      },
    },
  },
  plugins: [],
};
