/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'slate-900': '#111827', // New darker background
        'slate-800': '#1f2937', // New card/element background
        'slate-300': '#d1d5db', // New primary text color (off-white)
        'electric-blue': '#38bdf8', // New primary accent color
        'electric-orange': '#f97316', // New secondary accent
      },
    },
  },
  plugins: [],
}
