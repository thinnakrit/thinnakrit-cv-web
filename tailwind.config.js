/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf5",
          100: "#c5d0e6",
          200: "#9eb0d5",
          300: "#7690c4",
          400: "#5878b8",
          500: "#3a60ab",
          600: "#2d5099",
          700: "#1e3a72",
          800: "#162c58",
          900: "#0f1f3d",
          DEFAULT: "#1e3a72",
          dark: "#0f2047",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      width: {
        a4: "210mm",
      },
      minHeight: {
        a4: "297mm",
      },
      boxShadow: {
        a4: "0 4px 32px 0 rgba(30,58,114,0.10), 0 1.5px 6px 0 rgba(0,0,0,0.07)",
      },
    },
  },
  plugins: [],
};
