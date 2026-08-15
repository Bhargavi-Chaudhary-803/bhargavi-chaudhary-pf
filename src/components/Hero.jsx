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
    <section className="h-screen px-2 md:px-6 pt-0 md:pt-10 bg-transparent relative overflow-hidden flex flex-col justify-start md:justify-center items-center">
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
        className="-mt-32 sm:-mt-10 md:mt-0 w-[1280px] max-w-none md:max-w-7xl md:w-full md:mx-auto relative flex flex-col items-center justify-center scale-[0.32] sm:scale-[0.48] md:scale-[0.8] origin-center"
      >
        {/* Upper Content Block */}
        <div className="-mt-64 sm:-mt-32 md:mt-0 flex flex-col items-center justify-center w-full">
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
                width={110}
                height={110}
                className="object-contain w-[120px] h-[120px] -mt-2"
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

            <span className="font-noto text-[170px] md:text-[170px] font-light leading-none italic tracking-[-0.04em] scale-y-120 origin-bottom block text-center">
              Chaudhary
            </span>
          </motion.div>

          {/* Height spacer */}
          <div className="h-6 md:h-10" />

          {/* 3. Tagline - Strictly 2 lines */}
          <div className="flex flex-row items-center justify-center text-center w-full mt-6 md:mt-0">
            <motion.p
              variants={fadeUp}
              className="font-inter text-[46px] md:text-[30px] font-regular tracking-[-2px] md:tracking-[-1px] leading-snug md:leading-tight text-center max-w-none px-2 md:px-0"
            >
              <span className="block md:inline whitespace-nowrap">
                Web Developer / UI.UX Designer /
              </span>{" "}
              <span className="block md:inline whitespace-nowrap">
                Visual Identity / Software Developer
              </span>
            </motion.p>
          </div>

          {/* 4. Social icons below tagline */}
          <motion.div
            variants={iconContainer}
            className="flex items-center justify-center gap-6 mt-8 md:mt-16"
          >
            <motion.a
              variants={iconItem}
              href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-90"
              whileHover={{
                scale: 1.12,
                filter:
                  "drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 12px rgba(255,255,255,0.45))",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src="/1.png"
                alt="LinkedIn"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </motion.a>

            <motion.a
              variants={iconItem}
              href="https://github.com/Bhargavi-Chaudhary-803"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="opacity-90"
              whileHover={{
                scale: 1.12,
                filter:
                  "drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 12px rgba(255,255,255,0.45))",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src="/2.png"
                alt="GitHub"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </motion.a>

            <motion.a
              variants={iconItem}
              href="mailto:bhargavichaudhary803@gmail.com"
              aria-label="Email"
              className="opacity-90"
              whileHover={{
                scale: 1.12,
                filter:
                  "drop-shadow(0 0 4px rgba(255,255,255,0.7)) drop-shadow(0 0 12px rgba(255,255,255,0.45))",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Image
                src="/3.png"
                alt="Email"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </motion.a>
          </motion.div>
        </div>

        {/* 5. Mobile-Only Graphic */}
        <motion.div
          variants={scaleIn}
          className="block md:hidden mt-16 flex justify-center items-center"
        >
          <Image
            src="/g11.png"
            alt="Illustration"
            width={500}
            height={500}
            className="object-contain w-[500px] h-[500px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}