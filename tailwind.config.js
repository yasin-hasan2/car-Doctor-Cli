/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans- serif",
      },
      backgroundColor: {
        bgred: '#FF3811'
      },
      textColor: {
        textRed: '#FF3811',
        textWhite: '#FFFFFF'
      }
    },
  },
  plugins: [require("daisyui")],
}

