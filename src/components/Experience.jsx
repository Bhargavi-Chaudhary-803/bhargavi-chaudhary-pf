"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

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
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
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
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Experience() {
  return (
    <section
      className="
        min-h-screen
        w-full
        px-0
        mt-0
        md:mt-[-160px]
        bg-transparent
        flex
        items-center
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full max-w-6xl mx-auto mt-0 md:mt-0"
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="
            flex
            flex-row
            justify-center
            items-baseline
            gap-2
            md:gap-4.5
            mt-0
            md:mt-7
            balance-text
            whitespace-nowrap
          "
        >
          <span
            className="
              font-inter
              text-[38px]
              sm:text-[58px]
              md:text-[85px]
              font-semibold
              tracking-[-1.5px]
              md:tracking-[-2px]
              leading-[1.05]
            "
          >
            Where I've
          </span>

          <span
            className="
              font-noto
              text-[35px]
              sm:text-[50px]
              md:text-[72px]
              font-light
              leading-[0.9]
              italic
              tracking-[-2px]
              md:tracking-[-3.5px]
              scale-y-[1.2]
              origin-bottom
              inline-block
            "
          >
            worked
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          className="
            flex
            justify-center
            items-baseline
            gap-4.5
            mt-2
            md:mt-[-1px]
            px-0
            text-center
          "
        >
          <span
            className="
              font-inter
              text-[15px]
              sm:text-[16px]
              md:text-[18px]
              font-semibold
              tracking-[-0.6px]
              md:tracking-[-1px]
              leading-snug
            "
          >
            A timeline of the teams, projects, and communities I've worked
            with.
          </span>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timeline}
          className="
            max-w-4xl
            mx-auto
            space-y-6
            md:space-y-[11px]
            p-0
            sm:p-9
            md:p-16
            font-inter
            text-black
            text-[16px]
            md:text-[20px]
            leading-snug
            tracking-[-0.6px]
            md:tracking-[-1px]
            mt-7
            md:mt-[-31px]
          "
        >
          {/* AWS Club */}
          <motion.div
            variants={timelineItem}
            className="
              flex
              flex-col
              items-center
              text-center
              md:flex-row
              md:justify-between
              md:items-start
              md:text-left
              gap-1.5
              md:gap-0
            "
          >
            <div>
              <h3 className="font-bold tracking-tight">
                SWT Member
              </h3>

              <p className="font-normal text-black/80">
                AWS Club
              </p>
            </div>

            <span
              className="
                font-normal
                text-black/60
                md:text-black
                md:text-right
                whitespace-nowrap
                md:ml-7
                text-[12.5px]
                md:text-[20px]
              "
            >
              Jun 2026 — Present
            </span>
          </motion.div>

          {/* GSSoC */}
          <motion.div
            variants={timelineItem}
            className="
              flex
              flex-col
              items-center
              text-center
              md:flex-row
              md:justify-between
              md:items-start
              md:text-left
              gap-1.5
              md:gap-0
            "
          >
            <div>
              <h3 className="font-bold tracking-tight">
                Open Source Contributor
              </h3>

              <p className="font-normal text-black/80">
                GirlScript Summer of Code (GSSoC)
              </p>
            </div>

            <span
              className="
                font-normal
                text-black/60
                md:text-black
                md:text-right
                whitespace-nowrap
                md:ml-7
                text-[12.5px]
                md:text-[20px]
              "
            >
              Mar 2026 — Present
            </span>
          </motion.div>

          {/* Zèle Labs */}
          <motion.div
            variants={timelineItem}
            className="
              flex
              flex-col
              items-center
              text-center
              md:flex-row
              md:justify-between
              md:items-start
              md:text-left
              gap-1.5
              md:gap-0
            "
          >
            <div>
              <h3 className="font-bold tracking-tight">
                Graphic Designer
              </h3>

              <p className="font-normal text-black/80">
                Zèle Labs
              </p>
            </div>

            <span
              className="
                font-normal
                text-black/60
                md:text-black
                md:text-right
                whitespace-nowrap
                md:ml-7
                text-[12.5px]
                md:text-[20px]
              "
            >
              Mar 2026 — July 2026
            </span>
          </motion.div>

          {/* GDG */}
          <motion.div
            variants={timelineItem}
            className="
              flex
              flex-col
              items-center
              text-center
              md:flex-row
              md:justify-between
              md:items-start
              md:text-left
              gap-1.5
              md:gap-0
            "
          >
            <div>
              <h3 className="font-bold tracking-tight">
                JWT Member
              </h3>

              <p className="font-normal text-black/80">
                Google Developer Group (GDG)
              </p>
            </div>

            <span
              className="
                font-normal
                text-black/60
                md:text-black
                md:text-right
                whitespace-nowrap
                md:ml-7
                text-[12.5px]
                md:text-[20px]
              "
            >
              Oct 2025 — Present
            </span>
          </motion.div>

          {/* TBLS */}
          <motion.div
            variants={timelineItem}
            className="
              flex
              flex-col
              items-center
              text-center
              md:flex-row
              md:justify-between
              md:items-start
              md:text-left
              gap-1.5
              md:gap-0
            "
          >
            <div>
              <h3 className="font-bold tracking-tight">
                Graphic Designer & Social Media Intern
              </h3>

              <p className="font-normal text-black/80">
                TBLS Edu Federation
              </p>
            </div>

            <span
              className="
                font-normal
                text-black/60
                md:text-black
                md:text-right
                whitespace-nowrap
                md:ml-7
                text-[12.5px]
                md:text-[20px]
              "
            >
              Jan 2024 — Apr 2024
            </span>
          </motion.div>
        </motion.div>

        {/* Decorative graphic — Desktop */}
        <motion.div
          variants={scaleIn}
          className="hidden md:flex justify-end items-center mt-[-110px]"
        >
          <Image
            src="/g4.png"
            alt=""
            width={180}
            height={180}
            className="object-contain"
          />
        </motion.div>

        {/* Mobile decorative icon */}
        <motion.div
          variants={scaleIn}
          className="
            md:hidden
            flex
            justify-center
            mt-6
            mb-2
          "
        >
          <div
            className="
              w-14
              h-14
              rounded-full
              border
              border-black/15
              flex
              items-center
              justify-center
            "
          >
            <Briefcase
              size={23}
              strokeWidth={1.5}
              className="text-black/40"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}