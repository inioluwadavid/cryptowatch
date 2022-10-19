/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tr': '#C4C4C4',
        'table-col': '#1C1E1F',
      },
      width: {
        '368': '368px',
      },
    },
  },
  plugins: [],
}
