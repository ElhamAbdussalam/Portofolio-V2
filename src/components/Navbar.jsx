import { useState } from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-4 ">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="hidden md:flex items-center text-xl font-bold text-white"
        >
          <span>M Elham Abdussalam</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-6 text-white text-base font-semibold">
          {navItems.map((item, key) => (
            <a
              className="hover:text-[#FAB007] transition nav-sparkle"
              key={key}
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden px-4 pb-4 flex flex-col gap-3 bg-black text-white text-base font-semibold"
        >
          {navItems.map((item, key) => (
            <a
              className="py-2 border-b border-gray-200 hover:text-[#FAB007] nav-sparkle"
              key={key}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
