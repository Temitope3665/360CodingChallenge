/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      yellow: "#D29505",
      red: "#EF4444",
      dark: "#171717",
      white: "#FFFFFF"
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      extraMd: "16px",
      lg: "20px",
      xi: "30px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      black: "900"
    },
    extend: {},
  },
  plugins: [],
}
