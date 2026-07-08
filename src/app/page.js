import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <div id="hero" className="w-full">
          <Hero />
        </div>
        <div id="about" className="w-full">
          <About />
        </div>
        <div id="skills" className="w-full" style={{ scrollMarginTop: "var(--nav-height, 140px)" }}>
          <Skills />
        </div>
        <div id="education" className="w-full">
          <Education />
        </div>
        <div id="experience" className="w-full" style={{ scrollMarginTop: "var(--nav-height, 140px)" }}>
          <Experience />
        </div>
        <div id="projects" className="w-full">
          <Projects />
        </div>
        <div id="contact" className="w-full">
          <Contact />
        </div>
      </main>
    </>
  );
}