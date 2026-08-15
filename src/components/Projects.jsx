"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Eye,
  Zap,
  Sparkles,
  Braces,
  Component,
  Boxes,
  Wind,
  Server,
  ImageOff,
} from "lucide-react";

const projects = [
  {
    title: "Veritas",
    tagline: "AI pre-consultation healthcare assistant",
    description:
      "A RAG-powered chatbot that structures patient intake using the OPQRST clinical framework, so every visit starts with organized history instead of a blank form.",
    github: "https://github.com/Anmol-Srivastava-073/veritaschat",
    live: "https://veritas-healthbot.vercel.app/",
    video: "/p1.mp4",
  },
  {
    title: "Verdian",
    tagline: "Smart waste management, powered by vision",
    description:
      "A waste-classification platform using PyTorch and OpenCV to sort waste in real time, built to make smart-city waste management measurable instead of guesswork.",
    github: "https://github.com/Bhargavi-Chaudhary-803/Verdian",
    live: "https://verdian-wastesystem.vercel.app/",
    video: "/p2.mp4",
  },
  {
    title: "Manipal UniNav",
    tagline:
      "A website specially designed for MUJ students to navigate through their campus with ease.",
    description:
      "UniNav is a smart campus navigation platform for MUJ students and visitors. It helps users quickly find buildings, discover the shortest routes, and explore campus facilities without getting lost",
    github: "https://github.com/Anmol-Srivastava-073/manipalmap",
    live: "https://manipalmap.vercel.app/",
    video: "/p3.mp4",
  },
];

const TECH_ICONS = {
  Python: Code2,
  FastAPI: Zap,
  PyTorch: Cpu,
  OpenCV: Eye,
  "Computer Vision": Eye,
  RAG: Sparkles,
  LLM: Sparkles,
  TypeScript: Braces,
  JavaScript: Braces,
  React: Component,
  "Next.js": Boxes,
  Tailwind: Wind,
  Node: Server,
};

const DEFAULT_TECH_ICON = Code2;

/* -------------------------------------------------------
   SECTION ENTRY ANIMATION
------------------------------------------------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* -------------------------------------------------------
   PROJECT CARDS
   Entry only — plays once when cards enter viewport
------------------------------------------------------- */

const cardGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TechBadge({ label }) {
  const Icon = TECH_ICONS[label] || DEFAULT_TECH_ICON;

  return (
    <span className="flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-wide border border-black/15 rounded-full pl-2 pr-2.5 py-0.5 text-black">
      <Icon size={11} strokeWidth={1.75} />
      {label}
    </span>
  );
}

function GithubIcon({ size = 14, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      className="group flex flex-col border-2 md:border-3 border-black rounded-xl md:rounded-2xl overflow-hidden transition-all duration-200 hover:border-black"
    >
      {/* Video / Preview */}
      <div className="relative w-full aspect-[4/3] bg-black/[0.02] overflow-hidden border-b-2 border-black/40">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full border border-dashed border-black/15 flex flex-col items-center justify-center gap-2 text-black/30">
            <ImageOff size={20} strokeWidth={1.5} />

            <span className="font-inter text-[11px] tracking-wide uppercase">
              Add video
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4.5 md:p-5.5">
        <h3 className="font-inter text-[17px] md:text-[20px] font-bold tracking-[-0.3px] md:tracking-[-0.5px] text-black">
          {project.title}
        </h3>

        <p className="font-inter text-[11px] md:text-[12px] text-black/40 mt-1">
          {project.tagline}
        </p>

        <p className="font-inter text-[12.5px] md:text-[13.5px] leading-relaxed text-black mt-2.5 md:mt-3.5">
          {project.description}
        </p>

        <div className="flex items-center gap-2 mt-auto pt-4.5 md:pt-5.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-black/15 text-black transition-colors duration-150 hover:bg-black hover:text-white hover:border-black"
          >
            <GithubIcon size={14} />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-black/15 text-black transition-colors duration-150 hover:bg-black hover:text-white hover:border-black"
          >
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="px-5 pt-7 md:pt-22 -mt-14 md:mt-[-153px] pb-18 md:pb-28 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-baseline gap-1.5 sm:gap-3.5 md:gap-4.5"
        >
          <span className="font-inter text-[32px] sm:text-[54px] md:text-[85px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
            Projects I've
          </span>

          <span className="font-noto text-[28px] sm:text-[47px] md:text-[80px] font-light italic leading-none tracking-[-1.5px] md:tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Built
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-4.5 mt-2 md:mt-[-7px] mb-9 md:mb-14 px-3.5 text-center"
        >
          <span className="font-inter text-[13.5px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.5px] md:tracking-[-1px] text-black">
            My Production-ready projects that solve real problems.
          </span>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={cardGrid}
          className="grid grid-cols-1 md:grid-cols-3 gap-4.5 md:gap-7"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}