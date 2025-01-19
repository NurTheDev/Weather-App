/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        secondaryLable: "var(--secondaryLable)",
        whiteColor: "var(--whiteColor)",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
