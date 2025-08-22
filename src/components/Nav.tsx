
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "#about", label: "about" },
    { href: "#experience", label: "experience" },
    { href: "#projects", label: "projects" },
    { href: "#fun", label: "fun" },
  ];

  return (
    <motion.nav 
      className="sticky top-4 z-50 flex w-full justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="backdrop-blur bg-white/70 dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-700/70 shadow-lg rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center gap-4 sm:gap-6 md:gap-8">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-bold text-sm sm:text-base"
            whileHover={{ y: -2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {item.label}
          </motion.a>
        ))}
        
        <div className="w-px h-6 sm:h-8 bg-gray-300 dark:bg-gray-600 mx-1 sm:mx-2" />
        
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {theme === 'dark' ? (
                      <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
}
