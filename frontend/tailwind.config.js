/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        sideBg: "#1F1F21",
        white: "#FFFFFF",
        mainGray: "#EEEEE9",
        boxHead: "#00285A",
        boxGreen: "#BCDBA5",
        hoverGray: '#F2F2F2',
        boxRed: '#47A992',
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      screens: {
        xs: "375px", // Extra-small screens (e.g., mobile devices)
        "xs2": {'max': '460px'},
        'xs3': {'max': '375px'}, // '640px
        sm: "640px", 
        'sm2': {'max': '640px'},
        md: "768px", // Medium screens and up (e.g., tablets)
        md2: "900px",
        lg: "1024px", // Large screens and up (e.g., laptops)
        lg2: { max: "1130px" },
        lg3: "1130px",
        xl: "1280px", // Extra-large screens and up (e.g., desktops)
        "xl2": {'max': '1280px'},
        "2xl": "1536px", // 2X extra-large screens and up (e.g., large desktops)
        "3xl": "1920px", // 3X extra-large screens and up
      },
    },
  },
  variants: {},
  plugins: [],
};
