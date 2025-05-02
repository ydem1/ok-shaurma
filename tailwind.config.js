/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: {
          base: "#fff",
          ligth: "#FAFBFF",
        },
        gray: {
          base: "#F0F0F0",
        },
        red: {
          base: "#FF5252",
        },
      },
      spacing: {
        15: "60px",
      },
      maxWidth: {
        360: "1440px",
      },
      borderRadius: {
        30: "30px",
      },
      screens: {
        default: "0px",
        xs: "450px",
        md: "720px",
        xl: "1280px",
      },
    },
    plugins: [],
  },
};
