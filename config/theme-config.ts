export type ThemeColor = {
    light: string;
    dark: string;
  }
  
  export type ColorPalette = {
    primary: string;
    background: ThemeColor;
    surface: ThemeColor;
    border: ThemeColor;
    accent: {
      primary: string;
      secondary: string;
      tertiary: string;
    }
  }
  
  // Base theme colors matching your tailwind config
  export const colors: ColorPalette = {
    primary: "#FF5722",
    background: {
      light: "#F5F5F5",
      dark: "#000000",
    },
    surface: {
      light: "#FFFFFF",
      dark: "#2D2D2D",
    },
    border: {
      light: "#E0E0E0",
      dark: "#404040",
    },
    accent: {
      primary: "#FF5722",
      secondary: "#1E88E5",
      tertiary: "#212121",
    }
  }
  
  // Predefined color schemes for grid items
  export type ColorScheme = {
    name: string;
    color: string;
    colorDark?: string;
    backgroundColor: ThemeColor;
  }
  
  // Centralized color schemes for social platforms and other cards
  export const colorSchemes: Record<string, ColorScheme> = {
    youtube: {
      name: "Youtube",
      color: "#FF0000",
      backgroundColor: {
        light: "rgb(255, 240, 240)",
        dark: "rgb(23, 23, 23)",
      }
    },
    instagram: {
      name: "Instagram",
      color: "rgb(109 40 217 / var(--tw-bg-opacity, 1))",
      colorDark: "#6D67E4",
      backgroundColor: {
        light: "rgb(237 233 254 / var(--tw-bg-opacity, 1))",
        dark: "#392467",
      }
    },
    linkedin: {
      name: "LinkedIn",
      color: "#0077B5",
      colorDark: "#4B70F5",
      backgroundColor: {
        light: "#E8F4F9",
        dark: "#102C57",
      }
    },
    discord: {
      name: "Discord",
      color: "#3a0ca3",
      colorDark: "#865DFF",
      backgroundColor: {
        light: "#c4c7ff",
        dark: "#191825",
      }
    },
    github: {
      name: "Github",
      color: "#070707",
      backgroundColor: {
        light: "#dee2e6",
        dark: "#323232",
      }
    },
    strava: {
      name: "Strava",
      color: "#FF5722",
      backgroundColor: {
        light: "#FBE9E7",
        dark: "#391a04",
      }
    },
    calc: {
      name: "Calculator",
      color: "#22c55e",
      colorDark: "#399918",
      backgroundColor: {
        light: "#f0fdf4",
        dark: "#16423C",
      }
    },
    code: {
      name: "Code",
      color: "rgb(32, 72, 179)",
      backgroundColor: {
        light: "#F0F9FF",
        dark: "#082F49",
      }
    },
    magic: {
      name: "Magic",
      color: "#0073cc",
      backgroundColor: {
        light: "#F0F9FF", 
        dark: "#082F49",
      }
    }
  }
  
  // Helper function to get color from theme
  export function getThemeColor(color: ThemeColor, isDark: boolean): string {
    return isDark ? color.dark : color.light;
  }