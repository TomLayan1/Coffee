/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}", "./Navigations/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        redColor: '#DC3535',
        brownColor: '#D17842',
        darkBg: '#0C0F14',
        darkGray: '#252A32',
        lightGray: '#52555A',
        lighterGrey: '#AEAEAE',
        whiteColor: '#FFFFFF'
      },
      boxShadow: {
        customShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}