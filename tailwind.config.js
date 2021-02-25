const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
    serif: ["Poppins", "serif"],
  },
  theme: {
    colors: {
      primary: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },
      secondary: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e",
      },
      white: "#fff",
      grey: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      black: "#000",
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/src/assets/background.png')",
      }),
      keyframes: {
        shrink: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)", height: 0 },
        },
      },
      animation: {
        shrink: "shrink 0.3s ease-in-out forwards",
      },
    },
  },
  variants: {},
  plugins: [],
};
