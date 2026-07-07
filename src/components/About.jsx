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
        className="max-w-7xl mx-auto mt-[50px]"
      >

        {/* 1. Left aligned: "Hi! I am" */}
        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-8">
          <span className="font-inter text-[95px] font-semibold tracking-[-2px]">
            About
          </span>
          <span className="font-noto text-[80px] font-light leading-none italic tracking-[-4px] scale-y-[1.2] origin-bottom inline-block">
            Me
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-baseline gap-5 mt-[-20px]">
          <span className="font-inter text-[20px] font-semibold tracking-[-1px]">
            Currently in Jaipur, India
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-4">
          <span className="font-inter text-[32px] font-normal tracking-[-2px] text-center leading-tight">
            “Crafting scalable web applications, intuitive user experiences, <br />digital  solutions & many more...”
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mt-6">
          <span className="font-inter text-[26px] font-regular tracking-[-1.5px] text-center leading-tight">
            A CS engineering student at Manipal University Jaipur, building at the <br /> intersection of clean engineering and intentional design. I care deeply about <br /> how things are made, not just that they work, but that they feel right.
          </span>
        </motion.div>

        <motion.div variants={scaleIn} className="flex justify-center items-center space-x-[15px] mt-[15px]">
          <Image
            src="/g2.png"
            alt=""
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </section >
  );
}