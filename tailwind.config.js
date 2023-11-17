/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coal: "#1E1E24",
        cream: "#FFF8F0",
        caramel: "#FFCF99",
        maroon: "#92140C",
        navy: "#111D4A",
      },
      fontFamily: {
        body: ["Nunito"],
        logo: ["Lobster"],
        vazirmatn: ["Vazirmatn"],
        nastaliq: ["Noto Nastaliq Urdu"],
      },
    },
  },
  plugins: [],
};
