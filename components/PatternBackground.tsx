'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { patternIcons } from '@/config/icons-config';

const PatternBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Only render after component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Return null during server-side rendering
  if (!mounted) {
    return null;
  }
  
  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="running-pattern"
          x="0"
          y="0"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {patternIcons.map((row, rowIndex) => (
            <g key={rowIndex}>
              {row.map((Icon, colIndex) => (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  transform={`translate(${colIndex * 40} ${rowIndex * 40})`}
                >
                  <Icon
                    size={16}
                    color={isDark ? "#6b7280" : "#9ca3af"}
                  />
                </g>
              ))}
            </g>
          ))}
        </pattern>
        <rect width="100%" height="100%" fill="url(#running-pattern)" />
      </svg>
    </div>
  );
};

export default PatternBackground;