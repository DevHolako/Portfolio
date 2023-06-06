/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "v-orange": "#EFC99D",
        "v-red": "#E8A4A4",
        "v-blue": "#AEBDCA",
        "v-white": "#F5EFE6",
        "v-background": "#E8DFCA",
      },
      dropShadow: {
        "v-4": "4px 4px 0px rgba(0,0,0,1)",
        "v-2": "2px 2px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
