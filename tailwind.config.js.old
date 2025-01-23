/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
    theme: {
    extend: {
      screens: {
        'mobile': { 'raw': '(max-height: 1080px) and (max-width: 600px)' },
        'mobile-land': { 'raw': '(max-height: 530px) and (max-width: 1080px)' },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()]
}

