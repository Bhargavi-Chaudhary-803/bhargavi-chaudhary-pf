"use client";

import { useState, useRef } from "react";
import {
  ArrowUpRight,
  ChevronDown,
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
  Play,
} from "lucide-react";


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

const projects = [
  {
    id: "01",
    title: "Veritas",
    tagline: "AI pre-consultation healthcare assistant",
    description:
      "A RAG-powered chatbot that walks patients through structured pre-consultation intake using the OPQRST clinical framework — so every visit starts with organized, relevant history instead of a blank form.",
    tech: ["RAG", "LLM", "Python", "FastAPI"],
    github: "https://github.com/your-username/veritas",
    live: "https://veritas-demo.vercel.app",
    image: "", // e.g. "/videos/veritas-demo.mp4"
  },
  {
    id: "02",
    title: "Verdian",
    tagline: "Smart waste management, powered by vision",
    description:
      "A waste-classification platform using PyTorch and OpenCV to sort waste in real time from a camera feed — built to make smart-city waste management measurable instead of guesswork.",
    tech: ["PyTorch", "OpenCV", "Python"],
    github: "https://github.com/your-username/verdian",
    live: "https://verdian-demo.vercel.app",
    image: "", // e.g. "/images/verdian-demo.jpg"
  },
  {
    id: "03",
    title: "Project Three",
    tagline: "Add a short one-line tagline here",
    description:
      "Replace this with a two to three sentence description: what the project does, who it's for, and the problem it solves.",
    tech: ["React", "TypeScript", "Next.js"],
    github: "https://github.com/your-username/project-three",
    live: "https://project-three-demo.vercel.app",
    image: "",
  },
];

// Semantic icon per tech tag — recognizable at a glance without
// pulling in brand logos.
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

function TechBadge({ label }) {
  const Icon = TECH_ICONS[label] || DEFAULT_TECH_ICON;
  return (
    <span className="flex items-center gap-1.5 font-inter text-[12px] uppercase tracking-wide border border-black/15 rounded-full pl-2.5 pr-3 py-1 text-black/60">
      <Icon size={13} strokeWidth={1.75} />
      {label}
    </span>
  );
}

function Thumb({ project, size = "small" }) {
  const videoRef = useRef(null);
  const dims =
    size === "small" ? "w-[104px] h-[68px]" : "w-full aspect-video max-w-[420px]";

  if (!project.image) {
    return (
      <div
        className={`${dims} shrink-0 rounded-xl bg-black flex items-center justify-center border border-dashed border-white/20`}
      >
        <Play size={size === "small" ? 14 : 20} className="text-white/40" />
      </div>
    );
  }

  return (
    <div className={`${dims} shrink-0 rounded-xl overflow-hidden bg-black`}>
      <video
        ref={videoRef}
        src={project.image}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="projects" className="px-6 pt-24 pb-32 bg-transparent">
      <div className="max-w-5xl mx-auto">
        {/* Header — mirrors the About section's type pairing */}
        <div className="flex justify-center items-baseline gap-5">
          <span className="font-inter text-[72px] md:text-[92px] font-semibold tracking-[-2px] text-black">
            Selected
          </span>
          <span className="font-noto text-[64px] md:text-[80px] font-light italic leading-none tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Works
          </span>
        </div>
        <div className="flex justify-center mt-2 mb-14">
          <span className="font-inter text-[16px] tracking-[0.5px] text-black/40">
            Tap a project to see it in motion.
          </span>
        </div>

        {/* Accordion */}
        <div className="border-t border-black/10">
          {projects.map((p, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={p.id} className="border-b border-black/10">
                {/* Row header — always visible */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center gap-5 py-5 text-left group"
                >
                  <Thumb project={p} size="small" />

                  <span className="font-inter text-[13px] text-black/30 w-6 shrink-0">
                    {p.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-inter text-[24px] md:text-[28px] font-medium tracking-[-0.5px] text-black">
                        {p.title}
                      </span>
                      <span className="font-inter text-[14px] text-black/40 truncate">
                        {p.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-2">
                    {p.tech.slice(0, 2).map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 text-black/50 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded content — animated height via grid trick */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 pb-8 pl-0 md:pl-[129px]">
                      <div className="flex-1 max-w-xl">
                        <p className="font-inter text-[17px] leading-relaxed text-black/75">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-5">
                          {p.tech.map((t) => (
                            <TechBadge key={t} label={t} />
                          ))}
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black text-white rounded-full pl-4 pr-5 py-2.5 font-inter text-[14px] font-medium transition-transform duration-150 hover:-translate-y-0.5"
                          >
                            <GithubIcon size={16} />
                            Code
                          </a>
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-black/20 text-black rounded-full pl-4 pr-4 py-2.5 font-inter text-[14px] font-medium transition-all duration-150 hover:border-black hover:-translate-y-0.5"
                          >
                            Live demo
                            <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </div>

                      <Thumb project={p} size="large" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}