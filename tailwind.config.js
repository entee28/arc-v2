module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("/src/assets/images/hero.jpg")',
        'donate': 'url("/src/assets/images/donate.jpg")',
      },
      height: {
        'hero': '500px'
      }
    },
  },
  plugins: [],
}
