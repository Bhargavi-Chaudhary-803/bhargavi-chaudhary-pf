"use client";

import { ImageOff } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    level: "Senior Secondary Schooling",
    institution: "The Wisdom Global School",
    detail: "Completed higher secondary schooling with PCM before moving on to engineering.",
    duration: "Class XII",
    stat: "XII",
    statLabel: "Grade",
    image: "s1.png",
  },
  {
    level: "B.Tech · CSE",
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
  hidden: { opacity: 0, y: 25 },
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
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function SchoolLogo({ src, alt }) {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      className="relative flex border-2 md:border-3 border-black rounded-xl md:rounded-2xl bg-white transition-all duration-200"
    >
      {/* Identity block */}
      <div className="flex-1 flex flex-col gap-2.5 md:gap-3.5 p-3.5 md:p-5 min-w-0">
        <div className="flex items-start gap-2.5 md:gap-3.5">
          <SchoolLogo src={item.image} alt={item.institution} />
          <div className="flex flex-col min-w-0">
            <span className="font-inter text-[9px] md:text-[10px] font-medium uppercase tracking-wide text-black/50">
              {item.level}
            </span>
            <h3 className="font-inter text-[14px] md:text-[18px] font-bold tracking-[-0.3px] md:tracking-[-0.5px] text-black leading-tight mt-0.5">
              {item.institution}
            </h3>
          </div>
        </div>

        <p className="font-inter text-[11.5px] md:text-[12.5px] leading-relaxed text-black">
          {item.detail}
        </p>

        <span className="font-inter text-[9px] md:text-[10px] font-medium uppercase tracking-wide text-black/50 mt-auto pt-1.5">
          {item.duration}
        </span>
      </div>

      {/* Stat stub, punched out of the card like a ticket */}
      <div className="relative w-[72px] md:w-[98px] shrink-0 border-l-2 md:border-l-3 border-black flex flex-col items-center justify-center gap-1 px-1.5 md:px-2.5">
        {/* Ticket punch cutouts */}
        <span className="absolute -top-[9px] -left-[9px] md:-top-[11px] md:-left-[11px] w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-black border-2 md:border-3 border-black" />
        <span className="absolute -bottom-[9px] -left-[9px] md:-bottom-[11px] md:-left-[11px] w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-black border-2 md:border-3 border-black" />

        <span className="font-inter text-[20px] md:text-[28px] font-bold tracking-[-0.5px] md:tracking-[-1px] text-black leading-none">
          {item.stat}
        </span>
        <span className="font-inter text-[8px] md:text-[9px] font-medium uppercase tracking-wide text-black/50 text-center">
          {item.statLabel}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="px-5 pt-14 md:pt-20 mt-0 md:mt-[-45px] pb-18 md:pb-28 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-1.5 sm:gap-3.5 md:gap-4.5">
          <span className="font-inter text-[36px] sm:text-[58px] md:text-[85px] font-semibold tracking-[-1px] md:tracking-[-2px] text-black">
            My
          </span>
          <span className="font-noto text-[32px] sm:text-[50px] md:text-[80px] font-light italic leading-none tracking-[-1.5px] md:tracking-[-3px] scale-y-[1.15] origin-bottom inline-block text-black">
            Education
          </span>
        </motion.div>
        <motion.div variants={fadeUp} className="flex justify-center gap-4 mt-[-4px] md:mt-[-7px] mb-9 md:mb-14 px-3 text-center">
          <span className="font-inter text-[13.5px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.5px] md:tracking-[-1px] text-black">
            Grades, credentials, and the institutions I've called home.
          </span>
        </motion.div>

        <motion.div variants={cardGrid} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
          {education.map((item) => (
            <EducationCard key={item.institution} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}