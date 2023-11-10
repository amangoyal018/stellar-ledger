/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        1.5: "0.4rem",
        13: "3.25rem",
        100: "25rem",
        120: "30rem",
      },
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
