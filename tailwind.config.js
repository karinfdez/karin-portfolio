/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#173342",
        "medium-blue": "#22424c",
        "light-blue": "#4b7788",
        "hover-blue": "#b3d5dd",
        "orange-pal": "#EC992A",
        "light-yellow": "#F9F871"
      },
      screens: {
        "3xl": "1900px"
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
