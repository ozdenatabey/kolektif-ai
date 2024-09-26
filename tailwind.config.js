/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["IBM Plex Mono", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["nord"],
  },
};
