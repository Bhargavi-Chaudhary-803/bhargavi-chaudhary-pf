"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { User, Code2, GraduationCap, Briefcase, FolderGit2, Mail, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About", Icon: User },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: FolderGit2 },
  { id: "contact", label: "Contact", Icon: Mail },
];

const ALL_IDS = ["hero", ...NAV_ITEMS.map((item) => item.id)];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const pillRef = useRef(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (pillRef.current) {
        const pillHeight = pillRef.current.offsetHeight;
        const topOffset = 24;
        const buffer = 32;
        document.documentElement.style.setProperty(
          "--nav-height",
          `${pillHeight + topOffset + buffer}px`
        );
      }
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    ALL_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <LayoutGroup id="navbar-group">
      {/* ---------- DESKTOP: floating pill, unchanged ---------- */}
      <div className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center pointer-events-none">
        <div
          ref={pillRef}
          className="pointer-events-auto flex items-center gap-3 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-6 py-2.5"
        >
          <button
            onClick={() => scrollTo("hero")}
            className="relative w-10 h-10 shrink-0 rounded-full flex items-center justify-center hover:bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200"
            aria-label="Back to top"
          >
            <Image src="/saturn.png" alt="" width={34} height={34} className="object-contain" />
          </button>

          <span className="w-px h-6 bg-black/10 mx-2 shrink-0" />

          <div className="flex items-center gap-3">
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative flex items-center justify-center w-12 h-12 rounded-full group outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  aria-label={label}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill-desktop"
                      className="absolute inset-0 rounded-full bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={19}
                    strokeWidth={1.75}
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-black/60 group-hover:text-black"
                    }`}
                  />
                  <span className="absolute bottom-[-35px] scale-0 group-hover:scale-100 transition-all duration-150 ease-out bg-black text-white text-[11px] font-medium font-inter px-2.5 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-md">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- MOBILE: hamburger menu ---------- */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-black/10 bg-white/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} strokeWidth={1.75} className="text-black" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} strokeWidth={1.75} className="text-black" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden fixed top-20 right-6 z-50 w-56 rounded-2xl border border-black/10 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
            >
              <button
                onClick={() => scrollTo("hero")}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-black/5 transition-colors"
              >
                <Image src="/saturn.png" alt="" width={20} height={20} className="object-contain" />
                <span className="text-[15px] font-inter font-medium text-black/80">Top</span>
              </button>

              <span className="block h-px bg-black/10 mx-4" />

              {NAV_ITEMS.map(({ id, label, Icon }, i) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                      isActive ? "bg-black text-white" : "hover:bg-black/5 text-black/80"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                    <span className="text-[15px] font-inter font-medium">{label}</span>
                  </button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}