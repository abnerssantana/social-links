"use client";

import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";
import { FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LeftPanel = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Apenas montamos o componente depois que o cliente carrega para evitar problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  // Verificar se estamos no modo escuro
  const isDarkMode = mounted && (resolvedTheme === "dark");

  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between pt-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div>
        <div>
          <Image
            alt="Abner Santana"
            src="/avatar.jpg"
            width={140}
            height={140}
            priority
            className="rounded-full"
          />
        </div>
        
        {/* Text Container com Glassmorphism */}
        <div className="relative my-6 p-6 rounded-xl overflow-hidden">
          {/* Glassmorphism Background */}
          <div 
            className={`absolute inset-0 backdrop-blur-sm ${
              isDarkMode 
                ? "bg-neutral-900/50" 
                : "bg-white/30"
            }`} 
          />
          
          {/* Gradient Border */}
          <div 
            className={`absolute inset-0 rounded-xl border ${
              isDarkMode 
                ? "border-neutral-800/10" 
                : "border-white/20"
            }`} 
          />
          
          {/* Content */}
          <div className="relative">
            <div className="text-base font-medium text-primary">
              {siteConfig.title}
            </div>
            <h1 className="my-2 text-4xl font-bold">
              {siteConfig.creator}
            </h1>
            <p className={`text-1xl font-light ${
              isDarkMode 
                ? "text-slate-200" 
                : "text-neutral-600"
            }`}>
              {siteConfig.bio}
            </p>
          </div>
        </div>
        
        {/* Buttons Container */}
        <div className="flex flex-col gap-3 mt-6">
          <div className={`flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md ${
            isDarkMode 
              ? "bg-surface-dark border-border-dark" 
              : "bg-surface-light border-border-light"
          }`}>
            <FaCalendarAlt size={14} className="text-primary" />
            {siteConfig.timeweek}
          </div>
          
          <div className={`flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md ${
            isDarkMode 
              ? "bg-surface-dark border-border-dark" 
              : "bg-surface-light border-border-light"
          }`}>
            <FaMapMarkerAlt size={14} className="text-primary" />
            {siteConfig.location}
          </div>
          
          <Link
            href={`mailto:${siteConfig.email}`}
            className={`flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md hover:scale-[1.02] hover:shadow-lg transition-transform ${
              isDarkMode 
                ? "bg-surface-dark border-border-dark" 
                : "bg-surface-light border-border-light"
            }`}
          >
            <FaEnvelope size={14} className="text-primary" />
            E-mail
          </Link>
        </div>
        
        {/* Footer */}
        <div className="hidden mt-6 xl:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;