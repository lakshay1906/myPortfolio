/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      scale: {
        115: "1.15",
      },
      boxShadow: {
        "3xl": "0 0 40px -20px black",
      },
    },
  },
  plugins: [],
};
