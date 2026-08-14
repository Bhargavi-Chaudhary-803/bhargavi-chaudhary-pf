"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skill Set" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ITEM_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -15,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigation = (id) => {
    setMenuOpen(false);

    // Wait for menu close animation before scrolling
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <>
      {/* Hamburger */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        className="
          fixed
          top-6
          right-6
          z-[110]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-black
          text-white
          shadow-lg
          outline-none
          transition-transform
          duration-300
          hover:scale-105
          focus-visible:ring-2
          focus-visible:ring-white
          focus-visible:ring-offset-2
          focus-visible:ring-offset-black
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} strokeWidth={1.8} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} strokeWidth={1.8} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Fullscreen navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              h-dvh
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-black
            "
          >
            <nav
              aria-label="Main navigation"
              className="
                flex
                max-h-[80vh]
                flex-col
                items-center
                justify-center
                gap-3
                overflow-y-auto
                px-6
                py-10
                sm:gap-4
              "
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  custom={index}
                  variants={ITEM_VARIANTS}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => handleNavigation(item.id)}
                  className="
                    relative
                    whitespace-nowrap
                    text-center
                    font-inter
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:opacity-80
                    focus-visible:scale-105
                    focus-visible:opacity-80
                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}