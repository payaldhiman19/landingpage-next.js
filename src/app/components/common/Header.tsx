"use client";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  label: string;
  id: string;
};

const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.3,
      delay: index * 0.08,
    },
  }),
};
  

function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleNavigation = (section: string): void => {
    setMenuOpen(false);

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navLinks: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Why Choose Us", id: "why-choose-us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* NEW 1: Logo fades in and slides from the left when the page loads */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/admlogo.png"
            alt="ADM Technology"
            width={230}
            height={60}
            className="w-[145px] sm:w-[180px] md:w-[210px] lg:w-[230px] h-auto object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[#267C70] font-medium">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              custom={index}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -2, color: "#00BFFF" }}
              whileTap={{ scale: 0.95 }} // NEW 2: link shrinks a little when clicked
              onClick={() => handleNavigation(link.id)}
              className="relative group" // NEW 3: "relative group" is needed for the underline below
            >
              {link.label}

              {/* NEW 3: underline that grows from left to right on hover */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 bg-[#00BFFF] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={() => handleNavigation("contact")}
          className="hidden lg:block bg-[#102F2A] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#102F2A]/15 hover:bg-[#1B5147] transition-colors duration-300"
        >
          Book a Demo
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-[#267C70] p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <div
            className="lg:hidden bg-white border-t border-gray-100 shadow-md px-6 py-5"
          >
            <div className="flex flex-col gap-4 text-[#267C70] font-medium">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  whileTap={{ scale: 0.97 }} // small press effect on mobile links
                  onClick={() => handleNavigation(link.id)}
                  className="text-left py-2 hover:text-[#00BFFF] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavigation("contact")}
                className="w-full bg-gradient-to-r from-[#267C70] to-[#00BFFF] text-white px-6 py-3 rounded-lg font-semibold mt-2"
              >
                Book a Demo
              </motion.button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
