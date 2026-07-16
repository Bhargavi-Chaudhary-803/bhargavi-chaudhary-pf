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

export default function About() {
  return (
    <section className="min-h-screen px-6 pt-16 bg-transparent">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto mt-6 md:mt-[50px]"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-2 sm:gap-4 md:gap-5 mt-4 md:mt-8">
          <span className="font-inter text-[40px] sm:text-[64px] md:text-[95px] font-semibold tracking-[-1px] md:tracking-[-2px]">
            About
          </span>
          <span className="font-noto text-[36px] sm:text-[56px] md:text-[80px] font-light leading-none italic tracking-[-2px] md:tracking-[-4px] scale-y-[1.2] origin-bottom inline-block">
            Me
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-[-5px] md:mt-[-20px]">
          <span className="font-inter text-[15px] sm:text-[18px] md:text-[20px] font-semibold tracking-[-0.5px] md:tracking-[-1px]">
            Currently in Jaipur, India
          </span>
        </motion.div>

        {/* Quote — br removed on mobile so it wraps naturally instead of
            breaking mid-phrase at desktop-tuned points */}
        <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-4 px-2">
          <span className="font-inter text-[19px] sm:text-[24px] md:text-[32px] font-normal tracking-[-0.5px] md:tracking-[-2px] text-center leading-snug md:leading-tight">
            "Crafting scalable web applications, intuitive user experiences,
            <br className="hidden md:inline" /> digital solutions & many more..."
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-4 md:mt-6 px-2">
          <span className="font-inter text-[15px] sm:text-[19px] md:text-[26px] font-regular tracking-[-0.5px] md:tracking-[-1.5px] text-center leading-snug md:leading-tight">
            A CS engineering student at Manipal University Jaipur, building at the
            <br className="hidden md:inline" /> intersection of clean engineering and intentional design. I care deeply about
            <br className="hidden md:inline" /> how things are made, not just that they work, but that they feel right.
          </span>
        </motion.div>

        <motion.div variants={scaleIn} className="flex justify-center items-center mt-[-50px] md:mt-[-50px]">
          <Image
            src="/g2.png"
            alt=""
            width={400}
            height={400}
            className="object-contain w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}