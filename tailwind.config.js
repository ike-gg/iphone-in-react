/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwind-scrollbar")],
  theme: {
    extend: {
      // minWidth: {
      //   iphone: "920px",
      // },
      minHeight: {
        iphone: "900px",
      },
      aspectRatio: {
        iphone: "18 / 39",
      },
    },
  },
};
