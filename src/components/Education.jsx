"use client";

import { ImageOff } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    level: "Senior Secondary · 12th Grade",
    institution: "The Wisdom Global School",
    detail: "Completed higher secondary schooling with PCM before moving on to engineering.",
    duration: "Class XII",
    stat: "XII",
    statLabel: "Grade",
    image: "s1.png",
  },
  {
    level: "B.Tech · Computer Science Engineering",
    institution: "Manipal University Jaipur",
    detail: "Coursework spanning DSA, systems, and full-stack development, alongside design and product work on the side.",
    duration: "2025 — Present",
    stat: "9.81",
    statLabel: "CGPA",
    image: "s2.png",
  },
];

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

function SchoolLogo({ src, alt }) {
  return (
    /* Removed border-3 border-black to clean up the logo container */
    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      className="relative flex border-3 border-black rounded-2xl bg-white transition-all duration-200"
    >
      {/* Identity block */}
      <div className="flex-1 flex flex-col gap-4 p-6">
        <div className="flex items-start gap-4">
          <SchoolLogo src={item.image} alt={item.institution} />
          <div className="flex flex-col min-w-0">
            <span className="font-inter text-[11px] font-medium uppercase tracking-wide text-black/50">
              {item.level}
            </span>
            <h3 className="font-inter text-[20px] font-bold tracking-[-0.5px] text-black leading-tight mt-0.5">
              {item.institution}
            </h3>
          </div>
        </div>

        <p className="font-inter text-[14px] leading-relaxed text-black">
          {item.detail}
        </p>

        <span className="font-inter text-[11px] font-medium uppercase tracking-wide text-black/50 mt-auto pt-2">
          {item.duration}
        </span>
      </div>

      {/* Stat stub, punched out of the card like a ticket */}
      <div className="relative w-[110px] shrink-0 border-l-3 border-black flex flex-col items-center justify-center gap-1 px-3">
        {/* Ticket punch cutouts */}
        <span className="absolute -top-[13px] -left-[13px] w-6 h-6 rounded-full bg-black border-3 border-black" />
        <span className="absolute -bottom-[13px] -left-[13px] w-6 h-6 rounded-full bg-black border-3 border-black" />
        
        <span className="font-inter text-[32px] font-bold tracking-[-1px] text-black leading-none">
          {item.stat}
        </span>
        <span className="font-inter text-[10px] font-medium uppercase tracking-wide text-black/50 text-center">
          {item.statLabel}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="px-6 pt-24 mt-[-50px] pb-32 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >

        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5">
          <span className="font-inter text-[95px] md:text-[95px] font-semibold tracking-[-2px] text-black">
            My
          </span>
          <span className="font-noto text-[80px] md:text-[90px] font-light italic leading-none tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Education
          </span>
        </motion.div>
        <motion.div variants={fadeUp} className="flex justify-center gap-5 mt-[-8px] mb-16">
          <span className="font-inter text-[20px] font-semibold tracking-[-1px] text-black">
            Grades, credentials, and the institutions I've called home.
          </span>
        </motion.div>

        <motion.div variants={cardGrid} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}