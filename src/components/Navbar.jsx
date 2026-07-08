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

  // Measure the actual navbar height (top offset + pill height + a little
  // breathing room) and expose it as a CSS variable so every section can
  // use it for scroll-margin-top. This stays correct even if the navbar's
  // size changes later (responsive tweaks, font loading, etc.) instead of
  // relying on a guessed Tailwind scroll-mt value that can drift out of sync.
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
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
        <div
          ref={pillRef}
          className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] px-3 py-2.5"
        >
          
          {/* Brand button — Saturn icon */}
          <button
            onClick={() => scrollTo("hero")}
            className="relative w-10 h-10 shrink-0 rounded-full flex items-center justify-center hover:bg-black/5 outline-none focus-visible:ring-2 focus-visible:ring-black/20 transition-colors duration-200"
            aria-label="Back to top"
          >
            <Image src="/saturn.png" alt="" width={34} height={34} className="object-contain" />
          </button>

          <span className="w-px h-6 bg-black/10 mx-1 shrink-0" />

          {/* Section items — clean, uniform layout sizes prevent jank */}
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative flex items-center justify-center w-11 h-11 rounded-full group outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  aria-label={label}
                >
                  {/* Smoothly sliding indicator back-plate */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon */}
                  <Icon
                    size={19}
                    strokeWidth={1.75}
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-black/60 group-hover:text-black"
                    }`}
                  />

                  {/* Clean, simple pure-CSS tooltip text on hover instead of structural shifts */}
                  <span className="absolute bottom-[-35px] scale-0 group-hover:scale-100 transition-all duration-150 ease-out bg-black text-white text-[11px] font-medium font-inter px-2.5 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-md">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
}