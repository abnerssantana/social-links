import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800 opacity-50">
      <div className="flex items-center justify-between w-full mt-6">
        <div className="text-xs font-medium text-neutral-600 dark:text-slate-100">
          © 2024 Abner Santana - All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
