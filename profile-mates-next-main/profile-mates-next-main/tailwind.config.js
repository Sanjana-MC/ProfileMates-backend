/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animationDelay: {
        "1s": "1s",
        "2s": "2s",
        "3s": "3s",
        "4s": "4s",
        "5s": "5s",
        "6s": "6s",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "container-blue": "#015C9C",
      },
      keyframes: {
        splash: {
          "0%": {
            transform: "scale(1,1) rotateY(0deg)",
          },
          "100%": {
            transform: "scale(0.8,0.3) rotateY(360deg)",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
          },
          "50%": { transform: "rotate(10deg) " },
        },
        slide: {
          "0%": { left: "-100%" },

          "100%": { left: "57%" },
        },
        slidetext: {
          "0%": { left: "-100%" },

          "100%": { left: "58%" },
        },
      },

      animation: {
        splash: "splash 2s ease-in-out both ",
        wiggle: "wiggle 2s ease-in-out infinite 2s",
        slide: "slide 1s ease-in-out both ",
        slidetext: "slidetext 1s ease-in-out both ",
      },
    },
  },
  plugins: [],
};
