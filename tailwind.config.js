/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: "#040816",
          deep: "#050A1F",
          surface: "#0A1020",
          elevated: "#111A2E",
          light: "#8FDFFF",
          mid: "#5BC8E8",
          deepBlue: "#1A6FA8",
          abyss: "#0A2A40"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        nova: "0 24px 80px rgba(4, 8, 22, 0.48)",
        glow: "0 0 44px rgba(91, 200, 232, 0.18)"
      }
    }
  },
  plugins: []
};
