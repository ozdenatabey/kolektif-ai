/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "lg:w-[70rem]",
    "md:w-[46rem]",
    "lg:grid-cols-3",
    "md:grid-cols-2",
  ],
  theme: {
    screens: {
      md: "52rem",
      lg: "78rem",
      sm: "22rem",
    },
    fontFamily: {
      sans: ["IBM Plex Mono", "Arial", "sans-serif"],
      hero: ["Public Sans", "Arial"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"],
  },
};
