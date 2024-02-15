/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",  
  plugins: [
    nextui(),
    function({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar': {
          'scrollbar-width': 'none', /* For Firefox */
          '-ms-overflow-style': 'none', /* For Internet Explorer and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* For Chrome, Safari and Opera */
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}