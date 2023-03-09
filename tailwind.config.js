/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'wave': "url('/src/assets/wave.svg')",

      }
    },
    // screens:{
    //   // 'desktop':'900px',
    //   // 'mobile':'640px'
    // }

  },
  plugins: [],
}
