/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '18px',  // Set default font size to 18px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

