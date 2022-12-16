/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./book.js"],
  safelist: [
    'flex',
    'flex-col',
    'text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
