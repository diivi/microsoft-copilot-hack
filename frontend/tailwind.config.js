/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'sideBg': '#1F1F21',
        'white': '#FFFFFF',
        'mainGray': '#EEEEE9',
        'boxHead': '#00285A',
        'boxGreen': '#BCDBA5',
      },
    },
  },
  variants: {},
  plugins: [],
  
}