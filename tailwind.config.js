/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#BA68C8"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

