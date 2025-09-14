/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'slate-900': '#111827',
        'slate-800': '#1f2937', 
        'slate-300': '#d1d5db',
        'electric-blue': '#38bdf8',
        'electric-orange': '#f97316',
        // Add the neon colors that are used throughout the app
        'neon-green': '#00b300',
        'neon-blue': '#00b3b3', 
        'neon-orange': '#e67e00',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}