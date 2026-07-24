"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    // This scales down the entire layout to 85% of its original size
    scale: 0.75, 
    transition: {
      staggerChildren: 0.12,
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

const iconContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent relative">      
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto mt-6 md:mt-[50px] relative flex flex-col items-center md:items-stretch"
    >
      {/* 1. "Hi! I am" — centered on mobile, left-aligned on desktop like before */}
      <motion.div variants={fadeUp} className="flex items-baseline justify-center md:justify-start gap-2 mt-4 md:mt-8">
        <span className="font-inter text-[38px] sm:text-[54px] md:text-[78px] font-normal tracking-[-0.5px] md:tracking-[-2px]">
          Hi! I
        </span>
        <span className="font-noto text-[36px] sm:text-[52px] md:text-[76px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
          am
        </span>
      </motion.div>

      {/* 2. Name — "Bhargavi" only on mobile (whitespace-nowrap so it never
            wraps), "Chaudhary" reappears from md up alongside it. */}
      <motion.div
        variants={fadeUp}
        className="flex flex-nowrap items-baseline justify-center md:justify-start gap-2.5 sm:gap-3 md:gap-5 -mt-1 md:-mt-5 md:-ml-1"        >
        <span className="font-inter text-[clamp(32px,10vw,130px)] font-semibold leading-none tracking-[-0.5px] md:tracking-[-4px] whitespace-nowrap">
          Bhargavi
        </span>
        <span className="font-noto text-[clamp(31px,9.5vw,126px)] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom whitespace-nowrap">
          Chaudhary
        </span>
      </motion.div>

      <div className="h-6 md:h-12" />

      {/* Left column content — centered text on mobile, original left-aligned block on desktop */}
      <div className="max-w-2xl flex flex-col items-center md:items-start">
        <motion.p
          variants={fadeUp}
          className="font-inter text-[16px] sm:text-[22px] md:text-[30px] font-regular tracking-[-0.5px] md:tracking-[-1px] leading-snug md:leading-none text-center md:text-left"
        >
          Web Developer / UI.UX Designer / Visual Identity / Software Developer
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-inter text-[14px] sm:text-[19px] md:text-[25px] font-medium mt-5 md:mt-10 tracking-[-0.5px] md:tracking-[-1px] text-center md:text-left"
        >
          I build seamless digital experiences & create products with clean design.
        </motion.p>

        {/* "Work With Me!" — a distinct tappable pill CTA on mobile since a
              plain underlined link is an easy miss-tap target on touch; desktop
              keeps the original inline text-link treatment untouched. */}
        <motion.div variants={fadeUp} className="mt-6 md:mt-10">
          <a
            href="mailto:bhargavichaudhary803@gmail.com"
            className="md:hidden inline-flex items-center gap-2 bg-black text-white rounded-full pl-5 pr-4 py-3 font-inter text-[15px] font-semibold tracking-[-0.3px] active:scale-95 transition-transform"
          >
            Work With Me!
            <ArrowUpRight size={17} />
          </a>
          <a
            href="mailto:bhargavichaudhary803@gmail.com"
            className="hidden md:inline font-inter text-[30px] font-bold tracking-[-1px] hover:underline"
          >
            Work With Me!
          </a>
        </motion.div>
      </div>

      {/* Right graphic — centered on mobile, pulled up/right on desktop */}
      <motion.div
        variants={scaleIn}
        className="flex justify-center md:justify-end items-center mt-8 md:mt-[-240px]"
      >
        <Image
          src="/g1.png"
          alt=""
          width={260}
          height={260}
          className="object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px]"
        />
      </motion.div>

      {/* Social icons — centered on mobile, right-shifted on desktop like before */}
      <motion.div
        variants={iconContainer}
        className="flex justify-center md:ml-[380px] items-center gap-5 md:gap-0 md:space-x-[15px] mt-6 md:mt-[-80px]"
      >
        <motion.a
          variants={iconItem}
          href="mailto:bhargavichaudhary803@gmail.com"
          aria-label="Email"
          className="opacity-90 hover:opacity-60 transition-opacity"
        >
          <Image src="/3.png" alt="Email" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
        </motion.a>
        <motion.a
          variants={iconItem}
          href="https://github.com/Bhargavi-Chaudhary-803"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="opacity-90 hover:opacity-60 transition-opacity"
        >
          <Image src="/2.png" alt="GitHub" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
        </motion.a>
        <motion.a
          variants={iconItem}
          href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="opacity-90 hover:opacity-60 transition-opacity"
        >
          <Image src="/1.png" alt="LinkedIn" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
        </motion.a>
      </motion.div>
    </motion.div>
    </section>
  );
}