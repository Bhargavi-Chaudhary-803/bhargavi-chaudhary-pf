"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const timeline = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const timelineItem = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section className="min-h-screen px-6 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto mt-6 md:mt-[50px]"
      >
        {/* Heading — "Where I've" and "worked" stack on mobile with tight
            line spacing (via negative margin) instead of sitting side by side,
            since "Where I've worked" doesn't fit one line at readable sizes.
            Desktop keeps the original single-line layout untouched. */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-center items-center md:items-baseline gap-0 md:gap-5 mt-4 md:mt-8"
        >
          <span className="font-inter text-[40px] sm:text-[64px] md:text-[95px] font-semibold tracking-[-1px] md:tracking-[-2px] leading-[1.05]">
            Where I've
          </span>
          <span className="font-noto text-[36px] sm:text-[56px] md:text-[80px] font-light leading-[0.9] italic tracking-[-1.5px] md:tracking-[-4px] scale-y-[1.2] origin-bottom inline-block -mt-2 sm:-mt-3 md:mt-0">
            worked
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-3 md:mt-[-20px] px-4 text-center">
          <span className="font-inter text-[15px] sm:text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] md:tracking-[-1px]">
            A timeline of the teams, projects, and communities I've worked with.
          </span>
        </motion.div>

        {/* Timeline — center-aligned stack on mobile (title, subtitle, date
            all centered), original left-title/right-date row layout on desktop */}
        <motion.div
          variants={timeline}
          className="max-w-5xl mx-auto space-y-6 md:space-y-[12px] p-5 sm:p-10 md:p-19 font-inter text-black text-[16px] md:text-[22px] leading-snug tracking-[-0.5px] md:tracking-[-1px] mt-8 md:mt-[-35px]"
        >
          <motion.div variants={timelineItem} className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left gap-1 md:gap-0">
            <div>
              <h3 className="font-bold tracking-tight">Open Source Contributor</h3>
              <p className="font-normal text-black/80">GirlScript Summer of Code (GSSoC)</p>
            </div>
            <span className="font-normal text-black/60 md:text-black md:text-right whitespace-nowrap md:ml-8 text-[13px] md:text-[22px]">
              Mar 2026 — Present
            </span>
          </motion.div>

          <motion.div variants={timelineItem} className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left gap-1 md:gap-0">
            <div>
              <h3 className="font-bold tracking-tight">UI/UX & Frontend Development Intern</h3>
              <p className="font-normal text-black/80">Zèle Labs</p>
            </div>
            <span className="font-normal text-black/60 md:text-black md:text-right whitespace-nowrap md:ml-8 text-[13px] md:text-[22px]">
              Feb 2026 — Present
            </span>
          </motion.div>

          <motion.div variants={timelineItem} className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-start md:text-left gap-1 md:gap-0">
            <div>
              <h3 className="font-bold tracking-tight">Graphic Designer & Social Media Intern</h3>
              <p className="font-normal text-black/80">TBLS Edu Federation</p>
            </div>
            <span className="font-normal text-black/60 md:text-black md:text-right whitespace-nowrap md:ml-8 text-[13px] md:text-[22px]">
              Jan 2024 — Apr 2024
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative graphic — desktop only. Mobile gets a small themed
            icon-in-circle instead, keeping the section from feeling bare
            without adding image weight. */}
        <motion.div variants={scaleIn} className="hidden md:flex justify-end items-center mt-[-180px]">
          <Image src="/g4.png" alt="" width={200} height={200} className="object-contain" />
        </motion.div>

        <motion.div variants={scaleIn} className="md:hidden flex justify-center mt-8 mb-2">
          <div className="w-14 h-14 rounded-full border border-black/15 flex items-center justify-center">
            <Briefcase size={22} strokeWidth={1.5} className="text-black/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}