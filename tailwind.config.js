/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        mainColor: '#49B649',
      },
      fontFamily:{
        tekNunito: [' Nunito Sans, sans-serif'],
        tekPlay: ['Playfair Display, serif'],
      },
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

