/** @type {import('tailwindcss').Config} */
module.exports = {
  // Otimização para content (removendo duplicações)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Mantenha apenas se estiver usando Pages Router
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Cores semânticas melhoradas
        primary: {
          DEFAULT: "#FF5722",
          light: "#FF8A50",
          dark: "#C41C00"
        },
        background: {
          light: "#F5F5F5",
          dark: "#1A1A1A"
        },
        surface: {
          light: "#FFFFFF",
          dark: "#2D2D2D"
        },
        border: {
          light: "#E0E0E0",
          dark: "#404040"
        },
        accent: {
          primary: "#FF5722",
          secondary: "#1E88E5",
          tertiary: "#212121",
        },
        // Adicionando estados hover/focus
        state: {
          hover: "rgba(255, 87, 34, 0.08)",
          focus: "rgba(255, 87, 34, 0.12)"
        }
      },
      // Configuração de fontes melhorada
      fontFamily: {
        sans: ["var(--font-sfpro)", "system-ui", "sans-serif"], // Fallback adicionado
        display: ["var(--font-sfpro)", "system-ui", "sans-serif"] // Opcional para títulos
      },
      // Extensões de backgroundSize
      backgroundSize: {
        verySmall: "0.5rem",
      },
      // Novas utilidades
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      // Suporte a container queries
      containers: {
        xs: "20rem",
        sm: "24rem",
      }
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    // Plugin adicional recomendado para variantes dark
    function({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("not-first", "&:not(:first-child)");
    }
  ],
}