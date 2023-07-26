/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        tomate: "url('../img/tomate.jpg)",
        tomato: "url('../img/tomato.jpg')",
        uva: "url('../img/uva.jpg')",
        verduras: "url('../img/verduras.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Dancing_Script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
