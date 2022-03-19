module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#3A3C56",
        secBg: "#FDF0E9",
        secondary: "#EF6D58",
        priText: "#391400",
        secText: "rgba(57, 20, 0, 0.64)",
        cardBg: "#f9e5da",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        nl: ["56px", "64px"],
      },
      screens: {
        "1xl": "1400px",
      },
    },
  },
  plugins: [],
};
