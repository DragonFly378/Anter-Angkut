/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3B75",
        secondary: "#0077DD",
        tertiary: "#751B1B",
        hitam: "#121212",
        "light-soft": "#F2F1FA",
        "blue-soft": "#DEDEFF",
        peach: "#FFE5EA",
      },
    },
  },
  plugins: [],
};
