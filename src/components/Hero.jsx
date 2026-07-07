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
        className="max-w-7xl mx-auto mt-[50px] relative"
      >

        {/* 1. Left aligned: "Hi! I am" */}
        <motion.div variants={fadeUp} className="flex items-baseline gap-2 mt-8">
          <span className="font-inter text-[60px] font-normal tracking-[-2px]">
            Hi! I
          </span>
          <span className="font-noto text-[58px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
            am
          </span>
        </motion.div>

        {/* Added -ml-2 to the parent container */}
        <motion.div variants={fadeUp} className="flex items-baseline gap-5 -mt-5 -ml-1">
          <span className="font-inter text-[105px] font-semibold leading-none tracking-[-4px]">
            Bhargavi
          </span>
          <span className="font-noto text-[102px] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom">
            Chaudhary
          </span>
        </motion.div>

        {/* 3. Spacing */}
        <div className="h-12" />

        {/* Left column content wrapper to separate text flow from absolute graphics */}
        <div className="max-w-2xl flex flex-col">
          <motion.p
            variants={fadeUp}
            className="font-inter text-[30px] font-regular tracking-[-1px] leading-none text-left"
          >
            Web Developer / UI.UX Designer / Visual Identity / Software Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-inter text-[25px] font-medium mt-10 tracking-[-1px] text-left"
          >
            I build seamless digital experiences & create products with clean design.
          </motion.p>

          {/* Adjusted ONLY this margin to shift it down without affecting things below */}
          <motion.p
            variants={fadeUp}
            className="font-inter text-[30px] font-bold mt-10 tracking-[-1px] text-left"
          >
            <a href="mailto:bhargavichaudhary803@gmail.com" className="hover:underline">
              Work With Me!
            </a>
          </motion.p>
        </div>

        {/* Right graphic - explicitly pulled right without breaking text flow */}
        <motion.div
          variants={scaleIn}
          className="flex justify-end items-center space-x-[15px] mt-[-240px]"
        >
          <Image
            src="/g1.png"
            alt=""
            width={260}
            height={260}
            className="object-contain"
          />
        </motion.div>

        {/* Social icons - right aligned */}
        <motion.div
          variants={iconContainer}
          className="flex justify-center items-center space-x-[15px] mt-[-80px] ml-[500px]"
        >
          <motion.a
            variants={iconItem}
            href="mailto:bhargavichaudhary803@gmail.com"
            aria-label="Email"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/3.png" alt="Email" width={40} height={40} />
          </motion.a>
          <motion.a
            variants={iconItem}
            href="https://github.com/Bhargavi-Chaudhary-803"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/2.png" alt="GitHub" width={40} height={40} />
          </motion.a>
          <motion.a
            variants={iconItem}
            href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/1.png" alt="LinkedIn" width={40} height={40} />
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}