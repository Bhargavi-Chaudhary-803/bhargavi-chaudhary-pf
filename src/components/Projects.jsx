import Image from "next/image";
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
    image: "/p1.png",
  },
  {
    title: "Verdian",
    tagline: "Smart waste management, powered by vision",
    description:
      "A waste-classification platform using PyTorch and OpenCV to sort waste in real time, built to make smart-city waste management measurable instead of guesswork.",

    github: "https://github.com/Bhargavi-Chaudhary-803/Verdian",
    live: "https://verdian-wastesystem.vercel.app/",
    image: "/p3.png",
  },
  {
    title: "Manipal UniNav",
    tagline: "A website specially designed for MUJ students to navigate through their campus with ease.",
    description:
      "UniNav is a smart campus navigation platform for MUJ students and visitors. It helps users quickly find buildings, discover the shortest routes, and explore campus facilities without getting lost",

    github: "https://github.com/Anmol-Srivastava-073/manipalmap",
    live: "https://manipalmap.vercel.app/",
    image: "/p2.png",
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
    <div className="group flex flex-col border-3 border-black rounded-2xl overflow-hidden transition-all duration-200 hover:border-black hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-full bg-black/[0.02] overflow-hidden border-b-2 border-black/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}

            width={600}
            height={450}
            sizes="(max-width: 768px) 100vw, 33vw"

            className="w-full h-auto object-layout transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          /* Kept the fallback box at a clean fixed aspect ratio so empty cards still look uniform */
          <div className="w-full aspect-[4/3] border border-dashed border-black/15 flex flex-col items-center justify-center gap-2 text-black/30">
            <ImageOff size={22} strokeWidth={1.5} />
            <span className="font-inter text-[12px] tracking-wide uppercase">
              Add image
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-inter text-[22px] font-bold tracking-[-0.5px] text-black">
          {project.title}
        </h3>
        <p className="font-inter text-[13px] text-black/40 mt-1">
          {project.tagline}
        </p>

        <p className="font-inter text-[15px] leading-relaxed text-black mt-4">
          {project.description}
        </p>

        <div className="flex items-center gap-2 mt-auto pt-6">
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
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 pt-24 pb-32 bg-transparent">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center items-baseline gap-5">
          <span className="font-inter text-[95px] md:text-[95px] font-semibold tracking-[-2px] text-black">
            Projects I've
          </span>
          <span className="font-noto text-[80px] md:text-[90px] font-light italic leading-none tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Built
          </span>
        </div>
        <div className="flex justify-center gap-5 mt-[-8px] mb-16">
          <span className="font-inter text-[20px] font-semibold tracking-[-1px] text-black">
            My Production-ready projects that solve real problems.
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}