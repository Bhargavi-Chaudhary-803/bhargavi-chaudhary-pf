"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, LayoutGroup } from "framer-motion";
import { User, Code2, GraduationCap, Briefcase, FolderGit2, Mail } from "lucide-react";

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
  const pillRef = useRef(null);
  useEffect(() => {
    const updateNavHeight = () => {
      if (pillRef.current) {
        const pillHeight = pillRef.current.offsetHeight;
        const topOffset = 24; // matches `top-6`
        const buffer = 32; // extra breathing room below the navbar
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
  };

  return (
    <LayoutGroup id="navbar-group">
      {/* ---------- DESKTOP: floating pill (UPSIZED) ---------- */}
      <div className="hidden md:flex fixed top-6 inset-x-0 z-50 justify-center pointer-events-none">
        <div
          ref={pillRef}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-4 py-3.5"
        >
          <button
            onClick={() => scrollTo("hero")}
            className="relative w-12 h-12 shrink-0 rounded-full flex items-center justify-center hover:bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200"
            aria-label="Back to top"
          >
            <Image src="/saturn.png" alt="" width={42} height={42} className="object-contain" />
          </button>

          <span className="w-px h-8 bg-black/10 mx-1.5 shrink-0" />

          <div className="flex items-center gap-1.5">
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative flex items-center justify-center w-14 h-14 rounded-full group outline-none focus-visible:ring-2 focus-visible:ring-black/20"
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
                    size={24}
                    strokeWidth={1.75}
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-black/60 group-hover:text-black"
                    }`}
                  />
                  <span className="absolute bottom-[-42px] scale-0 group-hover:scale-100 transition-all duration-150 ease-out bg-black text-white text-xs font-medium font-inter px-3 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-md">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------- MOBILE: fixed bottom icon bar ---------- */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 w-full max-w-[100vw] overflow-x-hidden pb-[env(safe-area-inset-bottom)] pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-around w-full border-t border-black/10 bg-white/90 backdrop-blur-md px-1 py-2 box-border">
          <button
            onClick={() => scrollTo("hero")}
            className="flex flex-col items-center justify-center w-9 h-9 rounded-full outline-none"
            aria-label="Back to top"
          >
            <Image src="/saturn.png" alt="" width={24} height={24} className="object-contain" />
          </button>

          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative flex flex-col items-center justify-center gap-1 w-9 h-9 outline-none"
                aria-label={label}
              >
                <Icon
                  size={19}
                  strokeWidth={1.75}
                  className={isActive ? "text-black" : "text-black/40"}
                />
                {isActive && (
                  <motion.span
                    layoutId="active-dot-mobile"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-black"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </LayoutGroup>
  );
}