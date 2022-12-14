/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow: ['"Barlow condensed"', 'san-serif']
      },
      colors:{
        primary:'#16405B'
      }
     

    },
  },
  plugins: [],
}
