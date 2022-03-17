module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("/src/assets/images/hero.jpg")'
      },
      height: {
        'hero': '500px'
      }
    },
  },
  plugins: [],
}
