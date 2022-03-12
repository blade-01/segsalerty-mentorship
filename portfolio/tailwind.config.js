module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#3A3C56',
        secondary: '#EF6D58'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif']
      }
    }
  },
  plugins: []
}
