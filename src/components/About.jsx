"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
<section
  className="
    min-h-[calc(100vh-72px)]
    h-auto
    px-0
    py-2
    -mt-8
    bg-transparent
    overflow-hidden
    flex
    flex-col
    items-center
    justify-center

    sm:min-h-[90vh]
    sm:px-6
    sm:py-6
    sm:-mt-6

    md:min-h-[90vh]
    md:px-6
    md:py-6
    md:-mt-8
  "
>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center scale-100 sm:scale-[0.9] md:scale-100 origin-center md:mt-0"
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-baseline gap-2 sm:gap-4 md:gap-5"
        >
          <span className="font-inter text-[44px] sm:text-[56px] md:text-[80px] font-semibold tracking-[-1.5px] md:tracking-[-2px] leading-none">
            About
          </span>

          <span className="font-noto text-[40px] sm:text-[48px] md:text-[68px] font-light leading-none italic tracking-[-2.5px] md:tracking-[-4px] scale-y-[1.2] origin-bottom inline-block">
            Me
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-baseline gap-5 mt-0.5 md:mt-2"
        >
          <span className="font-inter text-[16px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.5px] text-black">
            Currently in Jaipur, India
          </span>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-2 mt-2 px-1"
        >
          <span className="font-inter text-[20px] sm:text-[22px] md:text-[28px] font-normal tracking-[-0.7px] md:tracking-[-1.5px] text-center leading-[1.15]">
            "Crafting scalable web applications, intuitive user experiences,
            <br className="hidden md:inline" /> digital solutions & many more..."
          </span>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-2 mt-3 md:mt-6 px-1"
        >
          <span className="font-inter text-[17px] sm:text-[19px] md:text-[24px] font-regular tracking-[-0.6px] md:tracking-[-1.5px] text-center leading-[1.2] md:leading-tight">
            A CS engineering student at Manipal University Jaipur, building at the
            <br className="hidden md:inline" /> intersection of clean engineering and intentional design. I care deeply about
            <br className="hidden md:inline" /> how things are made, not just that they work, but that they feel right.
          </span>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={scaleIn}
          className="flex justify-center items-center -mt-3 sm:-mt-8 md:-mt-10"
        >
          <Image
            src="/g2.png"
            alt=""
            width={400}
            height={400}
            className="object-contain w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}