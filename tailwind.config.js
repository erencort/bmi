/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: { max: "1000px" },
      desktop: { min: "1001px" },
    },
  },
  plugins: [],
};
