/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ncDark: "#393939",
        primary: {
          400: "#F86D6D",
          500: "#F65050",
          600: "#F53D3D",
        },
      },
      fontFamily: {
        header: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
