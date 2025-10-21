/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueish: "#4D6DA0", 
        greenish: "#72B592", 
        limeish: "#C5E3AA",
        yellowish: "#FFFBD9", 
        background: "#f8fafc", 
      },
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
        heading: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
