/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: "#bf00ff",
        primary: {
          100: "#ffffff",
          200: "#f7fafc",
          500: "#ced4da",
          600: "#adb5bd",
          700: "#6c757d",
          800: "#495057",
          900: "#343a40",
        },
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      height: {
        123: "5rem",
      },
      margin: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
