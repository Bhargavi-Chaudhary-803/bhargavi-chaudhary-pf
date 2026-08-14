"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";

const LINES = [
  "btw everything",
  "below broke at least",
  "once before it",
  "looked like this",
  "(sighs)...",
];

export default function Middle() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section
      ref={sectionRef}
      className="
    relative
    w-full
    mt-0
    pt-4
    pb-24

    md:mt-[26rem]
    lg:mt-[32rem]
    xl:mt-[38rem]"
    >
      <div className="relative w-full px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Gray text */}
        <h2
          className="
            font-inter
            text-[50px]
            font-semibold
            leading-[0.95]
            tracking-[-2.5px]
            text-[#b5b5b5]

            sm:text-[56px]
            sm:tracking-[-2px]

            md:text-[72px]
            md:tracking-[-3px]

            lg:text-[86px]

            xl:text-[96px]
          "
        >
          {LINES.map((line, index) => (
            <span
              key={line}
              className={`block ${index === LINES.length - 1 ? "italic" : ""
                }`}
            >
              {line}
            </span>
          ))}
        </h2>

        {/* Black text revealed from TOP → BOTTOM */}
        <motion.h2
          aria-hidden="true"
          style={{
            clipPath: reduceMotion
              ? "inset(0% 0% 0% 0%)"
              : clipPath,
          }}
          className="
            pointer-events-none
            absolute
            inset-0
            w-full
            px-6

            font-inter
            text-[50px]
            font-semibold
            leading-[0.95]
            tracking-[-2.5px]
            text-black

            sm:px-10
            sm:text-[56px]
            sm:tracking-[-2px]

            md:px-16
            md:text-[72px]
            md:tracking-[-3px]

            lg:px-20
            lg:text-[86px]

            xl:text-[96px]
          "
        >
          {LINES.map((line, index) => (
            <span
              key={line}
              className={`block ${index === LINES.length - 1 ? "italic" : ""
                }`}
            >
              {line}
            </span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}