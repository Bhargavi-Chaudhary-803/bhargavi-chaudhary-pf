"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 250);
  };

  return (
    <>
      {/* Saturn Menu Button */}
      {!menuOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
          aria-expanded={false}
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
            outline-none
            transition-transform
            duration-300
            hover:scale-110
            focus-visible:ring-2
            focus-visible:ring-white
          "
        >
          <motion.span
            initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/saturn.png"
              alt="Open menu"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </motion.span>
        </button>
      )}

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
            {/* White Close Cross */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="
                fixed
                top-6
                right-6
                z-[120]
                flex
                h-12
                w-12
                items-center
                justify-center
                text-white
                outline-none
                transition-transform
                duration-300
                hover:scale-110
                hover:opacity-70
                focus-visible:ring-2
                focus-visible:ring-white
              "
            >
              <X size={30} strokeWidth={1.8} />
            </button>

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