"use client";
import React, { useEffect } from "react";
import { useThemeStore } from "@/lib/store";
import { space_mono, space_mono_italic } from "@/lib/fonts";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeToggle = () => toggleTheme();

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const linkHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
    <motion.button
        onClick={handleThemeToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          p-3 rounded-full fixed bottom-8 right-8
          backdrop-blur-lg border
          dark:bg-black/20 dark:border-yellow-400/30 dark:hover:bg-yellow-400/10
          bg-white/30 border-cyan-600/30 hover:bg-cyan-500/10
          transition-all duration-300 shadow-lg
          z-50
        "
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-cyan-600" />
        )}
      </motion.button>

      {pathname !== '/' && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="
            sticky top-0 z-50 w-full h-16 flex items-center justify-between px-6
            backdrop-blur-xl backdrop-saturate-150 border-b
            dark:bg-black/20 dark:border-white/10
            bg-white/30 bg-blend-overlay border-gray-200/50
            transition-all duration-300 ease-in-out
          "
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`font-bold text-xl ${space_mono_italic.className}`}
          >
            <span className="
              dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-yellow-400 dark:to-yellow-600 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500
            ">
              Edgerr
            </span>
          </motion.div>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-6 mr-6">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  variants={linkHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="#"
                    className={`
                      cursor-pointer relative py-1.5 px-3 rounded-lg
                      transition-all duration-300
                      dark:hover:bg-yellow-400/10 dark:text-gray-200
                      hover:bg-cyan-500/10 text-gray-600
                      ${space_mono.className}
                    `}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}

      
    </>
  );
};

export default Navbar;