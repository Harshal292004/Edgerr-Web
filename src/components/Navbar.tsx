"use client";
import React, { useEffect } from "react";
import { useThemeStore } from "@/lib/store";
import { space_mono, space_mono_italic } from "@/lib/fonts";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  {
    /*Theme in the zustand store*/
  }
  const theme = useThemeStore((state) => state.theme);
  {
    /*Helps to toggle the theme in zustand*/
  }
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  {
    /*useEffect used for toggling dark class*/
  }
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  {
    /*Handle theme toggle on the ui*/
  }
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <nav
      className="
        sticky top-0 z-50 w-full h-16 flex items-center justify-between px-6
        backdrop-blur-xl backdrop-saturate-150
        dark:bg-black/10 dark:text-white  bg-white text-gray-800 
        transition-all duration-300 ease-in-out
      "
    >
      <div className={`font-bold text-xl ${space_mono_italic.className}`}>
        <span className="dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 ">
          Edgerr
        </span>
      </div>

      <div className="flex items-center gap-6">
        <ul className="hidden md:flex space-x-6 mr-6">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <Link
              key={item}
              className={`
                cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:transition-all after:duration-300 hover:after:w-full
                ${
                  theme === "dark" ? "after:bg-blue-400" : "after:bg-blue-500"
                }`}
              href={""}
            >
              {item}
            </Link>
          ))}
        </ul>

        <button
          onClick={handleThemeToggle}
          className={`
              p-2 rounded-full
              backdrop-blur-md
              ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10 border border-white/10"
                  : "bg-black/5 hover:bg-black/10 border border-black/10"
              }
              transition-all duration-300
            `}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-300" />
          ) : (
            <Moon className="h-5 w-5 text-blue-800" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
