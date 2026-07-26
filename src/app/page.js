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
    }, 700); // matches transition duration
  }, []);

  // Callback ref guarantees React gets a valid function and plays media immediately on mount
  const videoRef = useCallback((node) => {
    if (node) {
      node.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
        handleVideoEnd();
      });
    }
  }, [handleVideoEnd]);

  useEffect(() => {
    // Safety fallback: dismiss preloader if video fails/stalls after 5s
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [handleVideoEnd]);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-white transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoEnd}
            className="w-full h-full object-cover pointer-events-none"
          >
            <source src="/preloaderw.webm" type="video/webm" />
            <source src="/preloaderm.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div
        className={`transition-opacity duration-700 ${loading ? "opacity-0" : "opacity-100"
          }`}
      >
        <Navbar />

        <main className="w-full">
          <div id="hero" className="w-full">
            <Hero />
          </div>

          <div id="about" className="w-full">
            <About />
          </div>

          <div
            id="skills"
            className="w-full"
            style={{ scrollMarginTop: "var(--nav-height, 140px)" }}
          >
            <Skills />
          </div>

          <div id="education" className="w-full">
            <Education />
          </div>

          <div
            id="experience"
            className="w-full"
            style={{ scrollMarginTop: "var(--nav-height, 140px)" }}
          >
            <Experience />
          </div>

          <div id="projects" className="w-full">
            <Projects />
          </div>

          <div id="contact" className="w-full">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}