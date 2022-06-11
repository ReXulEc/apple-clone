module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
      },
      backgroundImage: {
        'rgb': "url('/assets/rgb.gif')"
      }
    },
  },
  plugins: [],
};
