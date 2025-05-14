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
          base: "#F2F2F2",
          dark: "#6E6F84",
        },
        red: {
          base: "#FF5252",
        },
      },
      spacing: {
        12.5: "50px",
        15: "60px",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
      maxWidth: {
        360: "1440px",
      },
      borderRadius: {
        30: "30px",
      },
      boxShadow: {
        custom: "0px 10px 20px rgba(51, 51, 51, 0.05)",
      },
      screens: {
        default: "0px",
        xs: "450px",
        md: "720px",
        lg: "900px",
        xl: "1280px",
      },
    },
    plugins: [],
  },
};
