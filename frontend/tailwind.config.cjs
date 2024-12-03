/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleBlue: "#38489d",
        beige: "#fffcf3",
        blueShade: "#182465",
        cream: "#f9d399",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        gummy: ["Sour Gummy", "sans-serif"],
        cursive: ["Dancing Script", "cursive"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        prince: "url('./src/assets/LittlePrince1.jpg')",
      },
    },
    screens: {
      md: "850px",
    },
  },
  plugins: [],
};
