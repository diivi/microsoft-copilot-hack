/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray': '#1F1F21',
      'white': '#FFFFFF',
    },
  },
}