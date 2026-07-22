/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",   // Dubai navy
        accent: "#00b4d8",    // Dubai turquoise
      }
    },
  },
  plugins: [],
}