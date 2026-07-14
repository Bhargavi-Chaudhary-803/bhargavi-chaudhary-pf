"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
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
    <section className="min-h-screen px-6 pt-16 bg-transparent relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto mt-8 md:mt-[50px] relative"
      >
        {/* 1. "Hi! I am" — scales from mobile up to the original desktop size */}
        <motion.div variants={fadeUp} className="flex items-baseline gap-2 mt-4 md:mt-8">
          <span className="font-inter text-[34px] sm:text-[44px] md:text-[60px] font-normal tracking-[-1px] md:tracking-[-2px]">
            Hi! I
          </span>
          <span className="font-noto text-[32px] sm:text-[42px] md:text-[58px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
            am
          </span>
        </motion.div>

        {/* 2. Name — the big one. Fluid scale prevents overflow on narrow screens */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-baseline gap-2 sm:gap-4 md:gap-5 mt-1 md:-mt-5 md:-ml-1">
          <span className="font-inter text-[42px] sm:text-[64px] md:text-[105px] font-semibold leading-none tracking-[-1px] md:tracking-[-4px]">
            Bhargavi
          </span>
          <span className="font-noto text-[40px] sm:text-[62px] md:text-[102px] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom">
            Chaudhary
          </span>
        </motion.div>

        <div className="h-6 md:h-12" />

        {/* Left column content wrapper */}
        <div className="max-w-2xl flex flex-col">
          <motion.p
            variants={fadeUp}
            className="font-inter text-[17px] sm:text-[22px] md:text-[30px] font-regular tracking-[-0.5px] md:tracking-[-1px] leading-snug md:leading-none text-left"
          >
            Web Developer / UI.UX Designer / Visual Identity / Software Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-inter text-[15px] sm:text-[19px] md:text-[25px] font-medium mt-5 md:mt-10 tracking-[-0.5px] md:tracking-[-1px] text-left"
          >
            I build seamless digital experiences & create products with clean design.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-inter text-[17px] sm:text-[22px] md:text-[30px] font-bold mt-5 md:mt-10 tracking-[-0.5px] md:tracking-[-1px] text-left"
          >
            <a href="mailto:bhargavichaudhary803@gmail.com" className="hover:underline">
              Work With Me!
            </a>
          </motion.p>
        </div>

        {/* Right graphic — sits inline below text on mobile, pulled up/right on desktop */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center md:justify-end items-center mt-8 md:mt-[-240px]"
        >
          <Image
            src="/g1.png"
            alt=""
            width={260}
            height={260}
            className="object-contain w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[260px] md:h-[260px]"
          />
        </motion.div>

        {/* Social icons — centered below on mobile, right-shifted on desktop like before */}
        <motion.div
          variants={iconContainer}
          className="flex justify-center md:ml-[500px] items-center gap-4 md:gap-0 md:space-x-[15px] mt-6 md:mt-[-80px]"
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