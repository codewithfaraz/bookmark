/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "hsl(231,69%,60%)",
        softRed: "hsl(0,94%,66%)",
        grayishBlue: "hsl(229,8%,60%)",
        veryDarkBlue: "hsl(229,33%,21%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url('./src/images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
