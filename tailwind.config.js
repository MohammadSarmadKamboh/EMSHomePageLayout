/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seaGreen: "rgba(49, 193, 177, 1)",
        lightGreen: "rgba(224, 247, 250, 1)",
        darkGreen: "rgba(0, 229, 255, 1)",
        lightPurple: "rgba(236, 236, 254, 1)",
        darkPurple: "rgba(101, 31, 255, 1)",
        footerBGColor: "rgba(26, 40, 78, 1)",
        gradientStart: "rgba(242, 238, 235, 1)",
        gradientEnd: "rgba(236, 236, 254, 1)",
      },
    },
  },
  plugins: [],
};
