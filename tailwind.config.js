/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-blue-mid",
    "bg-merah-terang",
    "bg-primary",
    "bg-light-soft",
    "text-light-soft",
    "bg-green-400",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3B75",
        secondary: "#0077DD",
        tertiary: "#751B1B",
        hitam: "#121212",
        "merah-terang": "#E63232",
        "light-soft": "#F2F1FA",
        "blue-soft": "#DEDEFF",
        "blue-mid": "#D0E9FF",
        peach: "#FFE5EA",
      },
    },
  },
  plugins: [],
};
