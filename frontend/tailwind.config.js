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
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      screens: {
        xs: "375px", // Extra-small screens (e.g., mobile devices)
        sm: "640px", // Small screens and up (e.g., smartphones)
        md: "768px", // Medium screens and up (e.g., tablets)
        md2: "900px",
        lg: "1024px", // Large screens and up (e.g., laptops)
        lg2: { max: "1130px" },
        lg3: "1130px",
        xl: "1280px", // Extra-large screens and up (e.g., desktops)
        xl3: { max: "1279px" },
        "2xl": "1536px", // 2X extra-large screens and up (e.g., large desktops)
        "3xl": "1920px", // 3X extra-large screens and up
      },
    },
  },
  variants: {},
  plugins: [],
};
