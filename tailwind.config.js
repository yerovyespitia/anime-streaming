/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      hel: ["Helvetica"],
      sf: ["SF Pro Display", "Arial"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(315px, 1fr))",
      },
    },
  },
  plugins: ["tailwind-scrollbar", "tailwind-scrollbar-hide"],
}
