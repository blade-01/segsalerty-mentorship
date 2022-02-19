module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "hsl(222, 40%, 13%)",
        light: "hsl(222, 100%, 98%)",
        btn: "hsl(211, 100%, 49%)",
        text: "hsl(237, 9%, 43%)",
        link: "hsl(203, 78%, 75%)",
        linkDark: "hsl(216, 65%, 40%)",
        title: "hsl(220, 9%, 27%)",
        card: "hsl(224, 40%, 20%)",
        nil: "hsl(223, 10%, 60%)",
      },
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
        ptsans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
