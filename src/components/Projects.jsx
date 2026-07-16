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
    tagline: "A website specially designed for MUJ students to navigate through their campus with ease.",
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
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TechBadge({ label }) {
  const Icon = TECH_ICONS[label] || DEFAULT_TECH_ICON;
  return (
    <span className="flex items-center gap-1.5 font-inter text-[11px] uppercase tracking-wide border border-black/15 rounded-full pl-2 pr-2.5 py-1 text-black">
      <Icon size={12} strokeWidth={1.75} />
      {label}
    </span>
  );
}

function GithubIcon({ size = 16, className = "" }) {
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
      className="group flex flex-col border-2 md:border-3 border-black rounded-2xl overflow-hidden transition-all duration-200 hover:border-black"
    >
      {/* Image */}
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
            <ImageOff size={22} strokeWidth={1.5} />
            <span className="font-inter text-[12px] tracking-wide uppercase">
              Add video
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        <h3 className="font-inter text-[19px] md:text-[22px] font-bold tracking-[-0.3px] md:tracking-[-0.5px] text-black">
          {project.title}
        </h3>
        <p className="font-inter text-[12px] md:text-[13px] text-black/40 mt-1">
          {project.tagline}
        </p>

        <p className="font-inter text-[14px] md:text-[15px] leading-relaxed text-black mt-3 md:mt-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 mt-auto pt-5 md:pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-black/15 text-black transition-colors duration-150 hover:bg-black hover:text-white hover:border-black"
          >
            <GithubIcon size={15} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-black/15 text-black transition-colors duration-150 hover:bg-black hover:text-white hover:border-black"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects" className="px-6 pt-8 md:pt-24 mt-0 md:mt-[-170px] pb-20 md:pb-32 bg-transparent"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-2 sm:gap-4 md:gap-5">
          <span className="font-inter text-[36px] sm:text-[60px] md:text-[95px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
            Projects I've
          </span>
          <span className="font-noto text-[32px] sm:text-[52px] md:text-[90px] font-light italic leading-none tracking-[-1.5px] md:tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Built
          </span>
        </motion.div>
        <motion.div variants={fadeUp} className="flex justify-center gap-5 mt-2 md:mt-[-8px] mb-10 md:mb-16 px-4 text-center">
          <span className="font-inter text-[15px] sm:text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] md:tracking-[-1px] text-black">
            My Production-ready projects that solve real problems.
          </span>
        </motion.div>

        {/* Grid */}
        <motion.div variants={cardGrid} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}