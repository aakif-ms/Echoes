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
      },
    },
    animation: {
      blink: "blink 0.7s step-end infinite",
    },
    keyframes: {
      blink: {
        "0%, 100%": { borderColor: "transparent" },
        "50%": { borderColor: "currentColor" },
      },
    },
    screens: {
      md: "850px",
    },
  },
  plugins: [],
};
