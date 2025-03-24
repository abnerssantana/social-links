import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { colors, colorSchemes, ThemeColor, getThemeColor } from "@/config/theme-config";

export function useThemeColors() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isDark = mounted && resolvedTheme === "dark";
  
  // Get color for a theme color object
  const getColor = (themeColor: ThemeColor) => {
    if (!mounted) return themeColor.light; // Default to light during SSR
    return getThemeColor(themeColor, isDark);
  };
  
  // Get color for a grid item, supporting both direct colors and schemes
  const getItemColor = (item: { color?: string, colorDark?: string, colorScheme?: string }) => {
    if (!mounted) return item.color || "#000000";
    
    // If using a predefined color scheme
    if (item.colorScheme && colorSchemes[item.colorScheme]) {
      const scheme = colorSchemes[item.colorScheme];
      return isDark && scheme.colorDark ? scheme.colorDark : scheme.color;
    }
    
    // If using direct color values
    return isDark && item.colorDark ? item.colorDark : (item.color || "#000000");
  };
  
  // Get background color for a grid item
  const getItemBackground = (item: { backgroundColor?: ThemeColor, colorScheme?: string }) => {
    if (!mounted) {
      // Default during SSR
      return item.backgroundColor?.light || colors.surface.light;
    }
    
    // If using a predefined color scheme
    if (item.colorScheme && colorSchemes[item.colorScheme]) {
      return getThemeColor(colorSchemes[item.colorScheme].backgroundColor, isDark);
    }
    
    // If using direct background values
    if (item.backgroundColor) {
      return getThemeColor(item.backgroundColor, isDark);
    }
    
    // Fallback to default surface color
    return getThemeColor(colors.surface, isDark);
  };
  
  return {
    isDark,
    mounted,
    colors,
    getColor,
    getItemColor,
    getItemBackground,
  };
}