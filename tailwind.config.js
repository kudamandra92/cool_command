/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueish: "#4D6DA0", // blue-600
        greenish: "#72B592", // slate-500
        limeish: "#C5E3AA", // amber-500
        yellowish: "#FFFBD9", // light gray
        background: "#f8fafc", //white
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
