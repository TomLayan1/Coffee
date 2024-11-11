/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/screen/**/*.{js,jsx,ts,tsx}"],
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
        customShadow: ''
      }
    },
  },
  plugins: [],
}