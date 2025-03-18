"use client";
import React, { useEffect } from "react";
import { useThemeStore } from "@/lib/store";
import { space_mono, space_mono_italic } from "@/lib/fonts";
import { Sun, Moon, UserCircle, LogOut  } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const router = useRouter();
  const handleThemeToggle = () => {
    toggleTheme();
    document.documentElement.classList.toggle("dark");
  };

  const navVariants = {
    hidden: {opacity: 0 },
    visible: {  opacity: 1, transition: { duration: 0.5 } },
  };

  const linkHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };
  const handleRouteChange = ({ href }: { href: string }) => {
    router.push(href);
  };
  const renderNavigationUI = () => {
     return pathname=== "/dashboard"?  (
      <div className="flex flex-row gap-2 justify-center items-center p-2">
        <motion.div
        onClick={()=>{handleRouteChange({href:"/profile"})}}
          className={`cursor-pointer py-2 px-4 rounded-lg
            transition-all duration-300
            dark:hover:bg-yellow-400/20 dark:text-gray-200
            hover:bg-cyan-500/20 text-gray-600
            ${space_mono.className}
            flex items-center justify-center sm:justify-between
            w-full sm:w-auto`}
          variants={linkHover}
          whileHover="hover"
          whileTap="tap"
        >
          <UserCircle className="mr-2 h-5 w-5" />
          <p className="text-sm sm:text-base">Harshal Malani</p>
        </motion.div>

        <motion.div
          className={`cursor-pointer py-2 px-4 rounded-lg
      transition-all duration-300
      dark:hover:bg-red-400/20 dark:text-gray-200
      hover:bg-red-500/20 text-gray-600
      ${space_mono.className}
      flex items-center justify-center sm:justify-between
      w-full sm:w-auto`}
          variants={linkHover}
          whileHover="hover"
          whileTap="tap"
        >
          <LogOut className="mr-2 h-5 w-5" />
          <p className="text-sm sm:text-base">Logout</p>
        </motion.div>
      </div>
    ): null
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

      {pathname !== "/" && (
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={navVariants}
          className="
            sticky top-0 z-50 w-full h-16 flex items-center justify-between px-6
            bg-blend-overlay backdrop-blur-xl backdrop-saturate-150
            bg-gradient-to-br 
            from-cyan-400 via-blue-300 to-green-200

           dark:from-black dark:via-gray-900 dark:to-black 
           
            transition-all duration-300 ease-in-out
          "
        >
          <motion.div
            onClick={() => handleRouteChange({ href: "/" })}
            whileHover={{ scale: 1.05 }}
            className={`cursor-pointer font-bold text-xl ${space_mono_italic.className}`}
          >
            <span
              className="
              dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-yellow-400 dark:to-yellow-600 
              text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500
            "
            >
              Edgerr
            </span>
          </motion.div>

          {renderNavigationUI()}
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
