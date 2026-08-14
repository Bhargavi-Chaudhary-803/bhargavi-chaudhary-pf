"use client";

import { motion } from "framer-motion";

const education = [
  {
    level: "Senior Secondary Schooling",
    institution: "The Wisdom Global School",
    detail:
      "Completed higher secondary schooling with PCM before moving on to engineering.",
    duration: "Class XII",
    stat: "XII",
    statLabel: "Grade",
    image: "s1.png",
  },
  {
    level: "B.Tech · CSE",
    institution: "Manipal University Jaipur",
    detail:
      "Coursework spanning DSA, systems, and full-stack development, alongside design and product work on the side.",
    duration: "2025 — Present",
    stat: "9.81",
    statLabel: "CGPA",
    image: "s2.png",
  },
];

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

const cardGrid = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SchoolLogo({ src, alt }) {
  return (
    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      className="
        relative
        flex
        border-2 md:border-3
        border-black
        rounded-xl md:rounded-2xl
        bg-white
        transition-all duration-200
        w-full
      "
    >
      {/* Identity block */}
      <div
        className="
          flex-1
          flex flex-col
          gap-3 md:gap-3.5
          p-4 md:p-5
          min-w-0
        "
      >
        <div className="flex items-start gap-3 md:gap-3.5">
          <SchoolLogo
            src={item.image}
            alt={item.institution}
          />

          <div className="flex flex-col min-w-0">
            <span
              className="
                font-inter
                text-[10px] md:text-[10px]
                font-medium
                uppercase
                tracking-wide
                text-black/50
              "
            >
              {item.level}
            </span>

            <h3
              className="
                font-inter
                text-[16px] md:text-[18px]
                font-bold
                tracking-[-0.4px] md:tracking-[-0.5px]
                text-black
                leading-tight
                mt-0.5
              "
            >
              {item.institution}
            </h3>
          </div>
        </div>

        <p
          className="
            font-inter
            text-[13px] md:text-[12.5px]
            leading-relaxed
            text-black
          "
        >
          {item.detail}
        </p>

        <span
          className="
            font-inter
            text-[10px] md:text-[10px]
            font-medium
            uppercase
            tracking-wide
            text-black/50
            mt-auto
            pt-1
          "
        >
          {item.duration}
        </span>
      </div>

      {/* Stat block */}
      <div
        className="
          relative
          w-[82px] md:w-[98px]
          shrink-0
          border-l-2 md:border-l-3
          border-black
          flex flex-col
          items-center
          justify-center
          gap-1
          px-2
        "
      >
        <span
          className="
            font-inter
            text-[23px] md:text-[28px]
            font-bold
            tracking-[-0.7px] md:tracking-[-1px]
            text-black
            leading-none
          "
        >
          {item.stat}
        </span>

        <span
          className="
            font-inter
            text-[9px] md:text-[9px]
            font-medium
            uppercase
            tracking-wide
            text-black/50
            text-center
          "
        >
          {item.statLabel}
        </span>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="
        min-h-screen
        w-full
        px-0
        mt-0
        md:mt-[-260px]
        py-8
        md:pb-28
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
        className="
          w-full
          max-w-4xl
          mx-auto
          px-0
          md:px-0
        "
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          className="
            flex
            justify-center
            items-baseline
            gap-2
            sm:gap-3.5
            md:gap-4.5
          "
        >
          <span
            className="
              font-inter
              text-[44px]
              sm:text-[58px]
              md:text-[85px]
              font-semibold
              tracking-[-1.5px]
              md:tracking-[-2px]
              text-black
              leading-none
            "
          >
            My
          </span>

          <span
            className="
              font-noto
              text-[40px]
              sm:text-[50px]
              md:text-[80px]
              font-light
              italic
              leading-none
              tracking-[-2px]
              md:tracking-[-3px]
              scale-y-[1.15]
              origin-bottom
              inline-block
              text-black
            "
          >
            Education
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          className="
            flex
            justify-center
            mt-3
            md:mt-[1px]
            mb-6
            md:mb-14
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
              text-black
              leading-snug
            "
          >
            Grades, credentials, and the institutions I've called home.
          </span>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={cardGrid}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            md:gap-7
            w-full
          "
        >
          {education.map((item) => (
            <EducationCard
              key={item.institution}
              item={item}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}