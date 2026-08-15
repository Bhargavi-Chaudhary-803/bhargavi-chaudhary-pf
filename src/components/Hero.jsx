"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * @param {Object} props
 * @param {number} [props.size=36]
 */
function LinkedInIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.303,14.365c0.012-0.015,0.023-0.031,0.031-0.048v0.048H17.303z M32,0v32H0V0H32L32,0z M9.925,12.285H5.153v14.354 h4.772V12.285z M10.237,7.847c-0.03-1.41-1.035-2.482-2.668-2.482c-1.631,0-2.698,1.072-2.698,2.482 c0,1.375,1.035,2.479,2.636,2.479h0.031C9.202,10.326,10.237,9.222,10.237,7.847z M27.129,18.408c0-4.408-2.355-6.459-5.494-6.459 c-2.531,0-3.664,1.391-4.301,2.368v-2.032h-4.77c0.061,1.346,0,14.354,0,14.354h4.77v-8.016c0-0.434,0.031-0.855,0.157-1.164 c0.346-0.854,1.132-1.746,2.448-1.746c1.729,0,2.418,1.314,2.418,3.246v7.68h4.771L27.129,18.408L27.129,18.408z" />
    </svg>
  );
}

/**
 * @param {Object} props
 * @param {number} [props.size=56]
 */
function GithubIcon({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      />
    </svg>
  );
}

/**
 * @param {Object} props
 * @param {number} [props.size=56]
 */
function EmailIcon({ size = 56 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
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
            {/* LinkedIn */}
            <motion.a
              variants={iconItem}
              href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black opacity-90"
              whileHover={{
                scale: 1.12,
                color: "#0077B7",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <LinkedInIcon size={56} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              variants={iconItem}
              href="https://github.com/Bhargavi-Chaudhary-803"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-black opacity-90"
              whileHover={{
                scale: 1.12,
                color: "#22C55E",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <GithubIcon size={56} />
            </motion.a>

            {/* Email */}
            <motion.a
              variants={iconItem}
              href="mailto:bhargavichaudhary803@gmail.com"
              aria-label="Email"
              className="text-black opacity-90"
              whileHover={{
                scale: 1.12,
                color: "#EA4335",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <EmailIcon size={56} />
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