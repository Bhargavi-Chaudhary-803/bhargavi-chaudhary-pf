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
    <section className="min-h-[80vh] px-6 pt-6 md:pt-10 bg-transparent relative overflow-hidden flex flex-col justify-center items-center md:block">
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
        className="w-[1280px] max-w-none md:max-w-7xl md:w-full md:mx-auto mt-8 md:mt-[70px] relative flex flex-col items-center md:items-stretch scale-[0.32] sm:scale-[0.48] md:scale-[0.8] origin-top"
      >
        {/* 1. "Hi! I am" + social icons on the same row */}
        <motion.div
  variants={fadeUp}
  className="flex items-baseline justify-between gap-2 mt-8 md:mt-8 text-center md:text-left w-full"
>
  <div className="flex items-baseline gap-2 justify-start md:justify-center ml-54 md:ml-45 mb-[-24px] md:mb-[-96px]">
    <span className="font-inter text-[78px] md:text-[78px] font-normal tracking-[-2px] md:tracking-[-2px]">
      Hi! I
    </span>
    <span className="font-noto text-[76px] md:text-[76px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
      am
    </span>
  </div>

  {/* Social icons */}
  <motion.div
    variants={iconContainer}
    className="flex items-center gap-0 md:gap-0 space-x-[15px] md:space-x-[15px] mr-4 md:mr-24 lg:mr-44"
  >
    <motion.a
      variants={iconItem}
      href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="opacity-90 hover:opacity-60 transition-opacity"
    >
      <Image src="/1.png" alt="LinkedIn" width={40} height={40} className="w-10 h-10 md:w-10 md:h-10" />
    </motion.a>
    <motion.a
      variants={iconItem}
      href="https://github.com/Bhargavi-Chaudhary-803"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="opacity-90 hover:opacity-60 transition-opacity"
    >
      <Image src="/2.png" alt="GitHub" width={40} height={40} className="w-10 h-10 md:w-10 md:h-10" />
    </motion.a>
    <motion.a
      variants={iconItem}
      href="mailto:bhargavichaudhary803@gmail.com"
      aria-label="Email"
      className="opacity-90 hover:opacity-60 transition-opacity"
    >
      <Image src="/3.png" alt="Email" width={40} height={40} className="w-10 h-10 md:w-10 md:h-10" />
    </motion.a>
  </motion.div>
</motion.div>

        {/* 2. Name */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center w-full mt-[-9px] md:mt-[-9px]"
        >
          <span className="font-inter text-[200px] md:text-[200px] font-semibold leading-none tracking-[-4px]">
            Bhargavi
          </span>
          <span className="font-noto text-[120px] md:text-[120px] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom mt-2 self-end mr-58 md:mr-46">
            Chaudhary
          </span>
        </motion.div>

        <div className="h-8 md:h-8" />

        {/* Graphic + tagline row */}
        <div className="flex flex-row items-center md:items-center gap-4 md:gap-8 justify-start md:justify-start">
          <motion.div
            variants={scaleIn}
            className="flex justify-center items-center shrink-0 relative -translate-y-38 md:-translate-y-38 translate-x-4 md:translate-x-30 lg:translate-x-48"
          >
            <Image
              src="/g1.png"
              alt=""
              width={220}
              height={220}
              className="object-contain w-[220px] h-[220px] md:w-[220px] md:h-[220px] scale-115 md:scale-115"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-inter text-[24px] md:text-[24px] font-regular tracking-[-1px] md:tracking-[-1px] leading-tight md:leading-tight text-left md:text-left max-w-xl ml-2 md:ml-11 lg:ml-52 -mt-2 md:-mt-2 self-start"
          >
            Web Developer / UI.UX Designer / Visual Identity /
            <br />
            Software Developer
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}