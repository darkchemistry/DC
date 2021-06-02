module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        // MyFont: ['"My Font"', "serif"], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
