/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        futureBtnbg: "url(/assets/images/webp/futureBtn.png)",
      },
      backgroundSize: {
        bgSize: "100% 100%",
      },
      colors: {
        offBlack: "#010101",
        offWhite: "#DFDEDE",
        lightWhite: "#FEFEFE",
        blurWhite: "#ffffff0d",
        whiteGrey: "#FEFEFE2B",
        darkRed: "#96151D",
        lightRed: "#EB484C",
        grey: "#DFDEDE",
      },
      fontSize: {
        "8lg": "85px",
        "9xl": "90px",
      },
      lineHeight: {
        "xsm": "110%",
      }
    },
  },
  plugins: [],
};
