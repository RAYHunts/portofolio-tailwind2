module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Montserrat", "poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
