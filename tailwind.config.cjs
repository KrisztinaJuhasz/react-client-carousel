/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        carousel: "carousel 60s infinite linear"
      },
      keyframes: {
        carousel: {
          "0%": {
            transform: "translate(0px, 0px)"
          },
          "100%": {
            transform: "translate(calc(-9 * (112px + 80px)), 0px)"
          }
        }
      }
    },
  },
  plugins: [],
}
