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
    <section className="min-h-screen px-6 pt-2 md:pt-10 bg-transparent relative overflow-hidden flex flex-col justify-center items-center">
      {/* Logo - top left corner */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
        <Image
          src="/B.png"
          alt="Logo"
          width={44}
          height={44}
          className="w-9 h-9 md:w-11 md:h-11 object-contain"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="-mt-16 sm:-mt-8 md:mt-0 w-[1280px] max-w-none md:max-w-7xl md:w-full md:mx-auto relative flex flex-col items-center justify-center scale-[0.32] sm:scale-[0.48] md:scale-[0.8] origin-center"
      >
        {/* 1. "Hi! I am" + Graphic Sticker */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 text-center w-full -ml-8"
        >
          <div className="flex items-baseline gap-2 justify-center text-center">
            <span className="font-inter text-[78px] md:text-[78px] font-normal tracking-[-2px] md:tracking-[-2px]">
              Hi! I
            </span>
            <span className="font-noto text-[76px] md:text-[76px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
              am
            </span>
          </div>

          {/* Sticker Graphic */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center items-center shrink-0 relative"
          >
            <Image
              src="/g1.png"
              alt=""
              width={100}
              height={100}
              className="object-contain w-[100px] h-[100px] -mt-2"
            />
          </motion.div>
        </motion.div>

        {/* 2. Name */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center w-full text-center mt-[-10px]"
        >
          <span className="font-inter text-[190px] md:text-[190px] font-semibold leading-none tracking-[-4px]">
            BHARGAVI
          </span>
          <span className="font-noto text-[170px] md:text-[170px] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom block text-center">
            Chaudhary
          </span>
        </motion.div>

        {/* Height spacer */}
        <div className="h-8 md:h-10" />

        {/* 3. Tagline */}
        <div className="flex flex-row items-center justify-center text-center w-full">
          <motion.p
            variants={fadeUp}
            className="font-inter text-[30px] md:text-[30px] font-regular tracking-[-1px] md:tracking-[-1px] leading-tight md:leading-tight text-center max-w-none"
          >
            Web Developer / UI.UX Designer / Visual Identity / Software Developer
          </motion.p>
        </div>

        {/* 4. Social icons below tagline */}
        <motion.div
          variants={iconContainer}
          className="flex items-center justify-center gap-6 mt-14 md:mt-16"
        >
          <motion.a
            variants={iconItem}
            href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/1.png" alt="LinkedIn" width={40} height={40} className="w-10 h-10" />
          </motion.a>
          <motion.a
            variants={iconItem}
            href="https://github.com/Bhargavi-Chaudhary-803"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/2.png" alt="GitHub" width={40} height={40} className="w-10 h-10" />
          </motion.a>
          <motion.a
            variants={iconItem}
            href="mailto:bhargavichaudhary803@gmail.com"
            aria-label="Email"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/3.png" alt="Email" width={40} height={40} className="w-10 h-10" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}