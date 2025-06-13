/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00b300',
        'neon-orange': '#e67e00',
        'neon-blue': '#00b3b3',
      },
    },
  },
  plugins: [],
}
