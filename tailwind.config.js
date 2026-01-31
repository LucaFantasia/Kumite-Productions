/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        sheen: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateX(360%) skewX(-12deg)", opacity: "0" },
        },
      },
      animation: {
        sheen: "sheen 800ms ease-out",
      },
    },
  },
  plugins: [],
};
