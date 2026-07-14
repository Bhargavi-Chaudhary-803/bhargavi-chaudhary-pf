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
    <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      className="relative flex border-2 md:border-3 border-black rounded-2xl bg-white transition-all duration-200"
    >
      {/* Identity block */}
      <div className="flex-1 flex flex-col gap-3 md:gap-4 p-4 md:p-6 min-w-0">
        <div className="flex items-start gap-3 md:gap-4">
          <SchoolLogo src={item.image} alt={item.institution} />
          <div className="flex flex-col min-w-0">
            <span className="font-inter text-[10px] md:text-[11px] font-medium uppercase tracking-wide text-black/50">
              {item.level}
            </span>
            <h3 className="font-inter text-[16px] md:text-[20px] font-bold tracking-[-0.3px] md:tracking-[-0.5px] text-black leading-tight mt-0.5">
              {item.institution}
            </h3>
          </div>
        </div>

        <p className="font-inter text-[13px] md:text-[14px] leading-relaxed text-black">
          {item.detail}
        </p>

        <span className="font-inter text-[10px] md:text-[11px] font-medium uppercase tracking-wide text-black/50 mt-auto pt-2">
          {item.duration}
        </span>
      </div>

      {/* Stat stub, punched out of the card like a ticket */}
      <div className="relative w-[80px] md:w-[110px] shrink-0 border-l-2 md:border-l-3 border-black flex flex-col items-center justify-center gap-1 px-2 md:px-3">
        {/* Ticket punch cutouts — scaled down on mobile so they don't
            crowd the narrower stub */}
        <span className="absolute -top-[10px] -left-[10px] md:-top-[13px] md:-left-[13px] w-4 h-4 md:w-6 md:h-6 rounded-full bg-black border-2 md:border-3 border-black" />
        <span className="absolute -bottom-[10px] -left-[10px] md:-bottom-[13px] md:-left-[13px] w-4 h-4 md:w-6 md:h-6 rounded-full bg-black border-2 md:border-3 border-black" />

        <span className="font-inter text-[22px] md:text-[32px] font-bold tracking-[-0.5px] md:tracking-[-1px] text-black leading-none">
          {item.stat}
        </span>
        <span className="font-inter text-[9px] md:text-[10px] font-medium uppercase tracking-wide text-black/50 text-center">
          {item.statLabel}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="px-6 pt-16 md:pt-24 mt-0 md:mt-[-50px] pb-20 md:pb-32 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-2 sm:gap-4 md:gap-5">
          <span className="font-inter text-[40px] sm:text-[64px] md:text-[95px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
            My
          </span>
          <span className="font-noto text-[36px] sm:text-[56px] md:text-[90px] font-light italic leading-none tracking-[-1.5px] md:tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Education
          </span>
        </motion.div>
        <motion.div variants={fadeUp} className="flex justify-center gap-5 mt-2 md:mt-[-8px] mb-10 md:mb-16 px-4 text-center">
          <span className="font-inter text-[15px] sm:text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] md:tracking-[-1px] text-black">
            Grades, credentials, and the institutions I've called home.
          </span>
        </motion.div>

        <motion.div variants={cardGrid} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {education.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}