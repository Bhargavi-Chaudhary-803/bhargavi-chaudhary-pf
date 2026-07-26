'use client';

import { useState, useEffect, useCallback } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleVideoEnd = useCallback(() => {
    setFadeOut(true);

    setTimeout(() => {
      setLoading(false);
    }, 700);
  }, []);

  const videoRef = useCallback((node) => {
    if (node) {
      node.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
        handleVideoEnd();
      });
    }
  }, [handleVideoEnd]);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [handleVideoEnd]);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-black select-none flex items-center justify-center transition-opacity duration-700 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoEnd}
            className="w-full h-full object-contain object-center pointer-events-none p-2 sm:p-4"
          >
            <source src="/preloaderw.webm" type="video/webm" />
            <source src="/preloaderm.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div
        className={`min-h-screen w-full transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main className="w-full mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 lg:px-8 scroll-pt-[var(--nav-height,120px)]">
          <section id="hero" className="w-full">
            <Hero />
          </section>

          <section id="about" className="w-full py-12 md:py-20">
            <About />
          </section>

          <section id="skills" className="w-full py-12 md:py-20">
            <Skills />
          </section>

          <section id="education" className="w-full py-12 md:py-20">
            <Education />
          </section>

          <section id="experience" className="w-full py-12 md:py-20">
            <Experience />
          </section>

          <section id="projects" className="w-full py-12 md:py-20">
            <Projects />
          </section>

          <section id="contact" className="w-full py-12 md:py-20">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}