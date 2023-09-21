/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1597E4",
        placeholder: "#7A7A7A",
        error: "#D86161",
        dark: "#212121",
        white: "#FAFAFA",
        cardBgColor: "#FFFFFF",
        cardBorderColor: "#E6E6E6",
      },
      textColor: {
        primaryColor: "#1597E4",
        placeholder: "#7A7A7A",
        error: "#D86161",
        dark: "#212121",
        white: "#FAFAFA",
        cardBgColor: "#FFFFFF",
        cardBorderColor: "#E6E6E6",
        locationColor: "#646464",
        jobDetailColor: "#212427",
      },
      borderColor: {
        labelBorderColor: "#E6E6E6",
      },
      fontSize: {
        labelFontSize: "14px",
        titleFontSize: "20px",
      },
      lineHeight: {
        labelLineHeight: "20px",
        titleLineHeight: "28px",
      },
      fontFamily: {
        labelFontFamily: "Poppins",
      },
      fontWeight: {
        labelFontWeight: "500",
        titleFontWeight: "400",
      },
    },
  },
  plugins: [],
};
