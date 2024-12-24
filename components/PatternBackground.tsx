
'use client';
import React from 'react';
import { Timer, Trophy, Medal, Footprints } from 'lucide-react';
import { useTheme } from "next-themes";

const PatternBackground = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  // Array fixo de ícones relacionados a corrida na ordem desejada
  const iconPattern = [
    [Footprints, Trophy, Medal, Timer],
    [Timer, Footprints, Trophy, Medal],
    [Medal, Timer, Footprints, Trophy],
    [Trophy, Medal, Timer, Footprints],
    [Footprints, Trophy, Medal, Timer],
  ];

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="running-pattern"
          x="0"
          y="0"
          width="160"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          {iconPattern.map((row, rowIndex) => (
            <g key={rowIndex}>
              {row.map((Icon, colIndex) => (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  transform={`translate(${colIndex * 40} ${rowIndex * 40})`}
                >
                  <Icon
                    size={16}
                    className={isDark ? "text-neutral-500" : "text-neutral-300"}
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