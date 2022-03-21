module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBorder: "#3A3C56",
        mainBg: "#28293E",
        secBg: "#FDF0E9",
        secondary: "#EF6D58",
        priText: "#391400",
        secText: "rgba(57, 20, 0, 0.64)",
        cardBg: "#f9e5da",
        border: "#f3d1bf",
        lightWhite: "rgba(255, 255, 255, 0.64)",
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
      backgroundImage: {
        map: "url('./assets/img/map.svg')",
      },
    },
  },
  plugins: [],
};
