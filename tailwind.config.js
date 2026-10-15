/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '550px' },
        'tablet': { 'max': '768px' },
        'laptop': { 'max': '1024px' },
        'desktop': { 'max': '1200px' },

      },
    },
  },
  plugins: [],
}

