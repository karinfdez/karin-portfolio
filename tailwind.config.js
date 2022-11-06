/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      avatar: "5px 2px 15px 8px rgba(0, 0, 0, 0.2)"
    },
    extend: {
      colors: {
        "dark-blue": "#173342",
        "medium-blue": "#22424c",
        "light-blue": "#4b7788",
        "hover-blue": "#b3d5dd",
      },
      screens: {
        "3xl": "1900px"
      },
    },
  },
  plugins: [],
}
