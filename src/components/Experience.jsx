"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
        className="max-w-7xl mx-auto mt-[50px]"
      >

        {/* 1. Left aligned: "Hi! I am" */}
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-8">
          <span className="font-inter text-[95px] font-semibold tracking-[-2px]">
            Where I’ve
          </span>
          <span className="font-noto text-[80px] font-light leading-none italic tracking-[-4px] scale-y-[1.2] origin-bottom inline-block">
            worked
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-[-20px]">
          <span className="font-inter text-[20px] font-semibold tracking-[-1px]">
            A timeline of the teams, projects, and communities I've worked with.
          </span>
        </motion.div>

        <motion.div
          variants={timeline}
          className="max-w-5xl mx-auto space-y-[12px] p-19 font-inter text-black text-[22px] leading-snug tracking-[-1px] mt-[-35px]"
        >
          {/* Item 1 */}
          <motion.div variants={timelineItem} className="flex justify-between items-start">
            <div>
              <h3 className="font-bold tracking-tight">Open Source Contributor</h3>
              <p className="font-normal text-black/80">GirlScript Summer of Code (GSSoC)</p>
            </div>
            <span className="font-normal text-right whitespace-nowrap ml-8">Mar 2026 — Present</span>
          </motion.div>

          {/* Item 3 */}
          <motion.div variants={timelineItem} className="flex justify-between items-start">
            <div>
              <h3 className="font-bold tracking-tight">UI/UX & Frontend Development Intern</h3>
              <p className="font-normal text-black/80">Zèle Labs</p>
            </div>
            <span className="font-normal text-right whitespace-nowrap ml-8">Feb 2026 — Present</span>
          </motion.div>

          {/* Item 4 */}
          <motion.div variants={timelineItem} className="flex justify-between items-start">
            <div>
              <h3 className="font-bold tracking-tight">Graphic Designer & Social Media Intern</h3>
              <p className="font-normal text-black/80">TBLS Edu Federation</p>
            </div>
            <span className="font-normal text-right whitespace-nowrap ml-8">Jan 2024 — Apr 2024</span>
          </motion.div>
        </motion.div>

        <motion.div variants={scaleIn} className="flex justify-end items-center space-x-[5px] mt-[-180px]">
          <Image
            src="/g4.png"
            alt=""
            width={200}
            height={200}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section >
  );
}