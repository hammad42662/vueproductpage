/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '200px'
      },
      fontFamily: {
        poppins: ['Poppins, sans-serif']
      }
    }
  },

  plugins: []
}
