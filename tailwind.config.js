/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        offBlack: "#010101",
        offWhite: "#DFDEDE",
        lightWhite: "#FEFEFE",
        darkRed: "#96151D",
        grey: "#DFDEDE",
      }
    },
  },
  plugins: [],
};
