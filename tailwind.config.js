/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4B4B",  // Tom principal vermelho energético
        background: {
          light: "#F5F5F5",  // Fundo claro clean
          dark: "#1A1A1A",   // Fundo escuro profundo
        },
        surface: {
          light: "#FFFFFF",  // Superfície clara
          dark: "#2D2D2D",   // Superfície escura
        },
        border: {
          light: "#E0E0E0",  // Borda clara sutil
          dark: "#404040",   // Borda escura suave
        },
        accent: {
          primary: "#FF4B4B",    // Vermelho energético
          secondary: "#FFB800",  // Amarelo dinâmico
          tertiary: "#00C853",   // Verde velocidade
        }
      },
      fontFamily: {
        sans: ["var(--font-sfpro)"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        verySmall: "0.5rem",
        3: "3rem",
        2: "2rem",
        1: "1rem",
      }
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};