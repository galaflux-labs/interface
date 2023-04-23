/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx,html}",
    "./src/components/**/*.{ts,tsx,js,jsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "kanit": ["Kanit", "sans-serif"],
      },
      colors: {
        "secondary": "#FF4D00",
      }
    },
  },
  plugins: [],
}

