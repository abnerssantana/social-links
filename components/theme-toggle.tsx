"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after component is mounted to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Use resolvedTheme which gives the actual current theme (accounting for system preference)
  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="relative inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        size="18"
        className="absolute transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size="18"
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}