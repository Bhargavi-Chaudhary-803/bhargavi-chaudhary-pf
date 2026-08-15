"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const LEETCODE_USERNAME = "bhargavi-chaudhary-803";
const GITHUB_USERNAME = "Bhargavi-Chaudhary-803";

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const GREEN_SCALE = [
  "#C6F6D5",
  "#9BE9A8",
  "#7EDC8D",
  "#57C25F",
  "#3FAE4E",
  "#2EA043",
  "#238636",
  "#196127",
  "#0E4429",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * @param {number} count
 * @param {number} max
 * @returns {string}
 */
function getShade(count, max) {
  if (count === 0) {
    return "#EDEDEC";
  }

  const ratio = max > 0 ? count / max : 0;

  const index = Math.min(
    GREEN_SCALE.length - 1,
    Math.floor(ratio * GREEN_SCALE.length)
  );

  return GREEN_SCALE[index];
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function buildCalendar(submissionCalendar) {
  const counts = {};

  Object.entries(submissionCalendar || {}).forEach(
    ([timestamp, count]) => {
      const date = new Date(Number(timestamp) * 1000);
      const key = date.toISOString().slice(0, 10);

      counts[key] = (counts[key] || 0) + Number(count);
    }
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(
    today.getFullYear(),
    today.getMonth() - 11,
    1
  );

  start.setDate(start.getDate() - start.getDay());

  /** @type {{key: string, date: Date, count: number}[]} */
  const days = [];

  for (
    const cursor = new Date(start);
    cursor <= today;
    cursor.setDate(cursor.getDate() + 1)
  ) {
    const key = cursor.toISOString().slice(0, 10);

    days.push({
      key,
      date: new Date(cursor),
      count: counts[key] || 0,
    });
  }

  const weeks = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const monthMarkers = [];

  let previousMonth = "";

  weeks.forEach((week, index) => {
    if (!week[0]) return;

    const date = week[0].date;

    const key = `${date.getFullYear()}-${date.getMonth()}`;

    if (key !== previousMonth) {
      monthMarkers.push({
        index,
        label: MONTH_LABELS[date.getMonth()],
      });

      previousMonth = key;
    }
  });

  let totalSubs = 0;
  let activeDays = 0;

  days.forEach((day) => {
    if (day.date <= today && day.count > 0) {
      totalSubs += day.count;
      activeDays++;
    }
  });

  let currentStreak = 0;
  let maxStreak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) {
      currentStreak++;
    } else {
      break;
    }
  }

  let running = 0;

  days.forEach((day) => {
    if (day.count > 0) {
      running++;
      maxStreak = Math.max(maxStreak, running);
    } else {
      running = 0;
    }
  });

  return {
    weeks,
    monthMarkers,
    totalSubs,
    activeDays,
    currentStreak,
    maxStreak,
  };
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("loading");

  const [github, setGithub] = useState(null);
  const [githubStatus, setGithubStatus] = useState("loading");

  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(null);

  /*
   * =========================
   * LEETCODE
   * =========================
   */

  useEffect(() => {
    let cancelled = false;

    async function loadLeetCode() {
      try {
        const response = await fetch(
          `https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`
        );

        if (!response.ok) {
          throw new Error("Failed");
        }

        const data = await response.json();

        if (!cancelled) {
          setStats(data);
          setStatus("success");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    loadLeetCode();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * =========================
   * GITHUB
   * =========================
   */

  useEffect(() => {
    let cancelled = false;

    async function loadGithub() {
      try {
        const [userResponse, reposResponse] =
          await Promise.all([
            fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}`
            ),
            fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
            ),
          ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const user = await userResponse.json();
        const repos = await reposResponse.json();

        if (!cancelled) {
          setGithub({
            ...user,
            repos,
          });

          setGithubStatus("success");
        }
      } catch {
        if (!cancelled) {
          setGithubStatus("error");
        }
      }
    }

    loadGithub();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * =========================
   * CALENDAR
   * =========================
   */

  const calendar = useMemo(() => {
    if (!stats?.submissionCalendar) {
      return null;
    }

    let data = stats.submissionCalendar;

    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch {
        data = {};
      }
    }

    return buildCalendar(data);
  }, [stats]);

  /*
   * =========================
   * LOADING
   * =========================
   */

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center py-16">
        <p className="font-inter text-sm text-neutral-400">
          Loading stats...
        </p>
      </div>
    );
  }

  /*
   * =========================
   * ERROR
   * =========================
   */

  if (status === "error" || !stats || !calendar) {
    return (
      <div className="w-full flex justify-center py-16">
        <p className="font-inter text-sm text-neutral-400">
          Couldn't load LeetCode stats.
        </p>
      </div>
    );
  }

  const maxCount = Math.max(
    1,
    ...calendar.weeks
      .flat()
      .map((day) => day.count)
  );

  return (
    <div className="w-full flex justify-center px-6 mt-16 mb-32">
      <div
        className="w-full max-w-4xl"
        style={{
          perspective: "1400px",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={() => setFlipped((value) => !value)}
          className="relative w-full cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* ================================================= */}
          {/* FRONT — LEETCODE */}
          {/* ================================================= */}

          <div
            className="
              relative
              w-full
              rounded-2xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              sm:px-8
              sm:py-8
            "
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <motion.span
              variants={fadeUp}
              className="
                font-mono
                text-xs
                tracking-widest
                font-semibold
                text-neutral-400
                uppercase
              "
            >
              LeetCode
            </motion.span>

            {/* Stats header */}

            <motion.div
              variants={fadeUp}
              className="
                flex
                items-end
                justify-between
                gap-6
                mt-3
                flex-wrap
              "
            >
              <div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="
                      font-inter
                      text-4xl
                      font-semibold
                      tracking-tight
                      text-neutral-900
                    "
                  >
                    {stats.totalSolved}
                  </span>

                  <span className="font-inter text-sm text-neutral-400">
                    / {stats.totalQuestions} solved
                  </span>
                </div>

                <p className="font-inter text-sm text-neutral-500 mt-1.5">
                  {stats.easySolved} Easy
                  {" · "}
                  {stats.mediumSolved} Medium
                  {" · "}
                  {stats.hardSolved} Hard
                </p>
              </div>

              <div className="flex gap-6 text-right">
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">
                    Acceptance
                  </p>

                  <p className="font-inter text-base font-medium text-neutral-900 mt-1">
                    {Number(
                      stats.acceptanceRate
                    ).toFixed(1)}
                    %
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">
                    Rank
                  </p>

                  <p className="font-inter text-base font-medium text-neutral-900 mt-1">
                    {stats.ranking
                      ? `#${Number(
                          stats.ranking
                        ).toLocaleString()}`
                      : "—"}
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="h-px bg-neutral-200 my-6" />

            {/* Heatmap header */}

            <motion.div
              variants={fadeUp}
              className="
                flex
                items-center
                justify-between
                gap-4
                mb-4
                flex-wrap
              "
            >
              <p className="font-inter text-sm sm:text-base text-neutral-600">
                {hovered ? (
                  <>
                    <span className="font-medium text-neutral-900">
                      {hovered.count} submissions
                    </span>{" "}
                    on{" "}
                    {formatDate(hovered.date)}
                  </>
                ) : (
                  <>
                    <span className="font-semibold text-neutral-900">
                      {calendar.totalSubs}
                    </span>{" "}
                    submissions in the past year
                  </>
                )}
              </p>

              <div className="flex gap-5">
                <p className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-neutral-400">
                  Active{" "}
                  <span className="text-neutral-900">
                    {calendar.activeDays}
                  </span>
                </p>

                <p className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-neutral-400">
                  Streak{" "}
                  <span className="text-neutral-900">
                    {calendar.maxStreak}
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Heatmap */}

            <motion.div
              variants={fadeUp}
              className="overflow-x-auto"
            >
              <div className="inline-flex gap-1">
                {calendar.weeks.map(
                  (week, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="flex flex-col gap-1"
                    >
                      {week.map(
                        (day, dayIndex) => (
                          <div
                            key={dayIndex}
                            onMouseEnter={() =>
                              setHovered(day)
                            }
                            onMouseLeave={() =>
                              setHovered(null)
                            }
                            className="
                              h-[13px]
                              w-[13px]
                              rounded-[3px]
                              transition-transform
                              duration-150
                              hover:scale-125
                            "
                            style={{
                              backgroundColor:
                                getShade(
                                  day.count,
                                  maxCount
                                ),
                            }}
                          />
                        )
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Months */}

              <div
                className="relative h-5 mt-2.5"
                style={{
                  width:
                    calendar.weeks.length * 17,
                }}
              >
                {calendar.monthMarkers.map(
                  (month) => (
                    <span
                      key={month.index}
                      className="
                        absolute
                        font-mono
                        text-xs
                        text-neutral-400
                      "
                      style={{
                        left:
                          month.index * 17,
                      }}
                    >
                      {month.label}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Legend */}

            <motion.div
              variants={fadeUp}
              className="flex justify-end items-center gap-1.5 mt-4"
            >
              <span className="font-mono text-[10px] text-neutral-400 mr-1">
                Less
              </span>

              {[
                "#EDEDEC",
                ...GREEN_SCALE,
              ].map((color) => (
                <span
                  key={color}
                  className="w-3 h-3 rounded-[3px]"
                  style={{
                    backgroundColor: color,
                  }}
                />
              ))}

              <span className="font-mono text-[10px] text-neutral-400 ml-1">
                More
              </span>
            </motion.div>

            {/* Flip hint */}

            <div className="flex justify-end mt-6">
              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-widest
                  uppercase
                  text-neutral-400
                "
              >
                Click to view GitHub →
              </span>
            </div>
          </div>

          {/* ================================================= */}
          {/* BACK — GITHUB */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-0
              w-full
              min-h-full
              rounded-2xl
              border
              border-neutral-200
              bg-white
              px-6
              py-7
              sm:px-8
              sm:py-8
            "
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
            {githubStatus === "loading" ? (
              <div className="flex min-h-[350px] items-center justify-center">
                <p className="font-inter text-sm text-neutral-400">
                  Loading GitHub stats...
                </p>
              </div>
            ) : githubStatus === "error" ? (
              <div className="flex min-h-[350px] items-center justify-center">
                <p className="font-inter text-sm text-neutral-400">
                  Couldn't load GitHub stats.
                </p>
              </div>
            ) : (
              <div className="flex min-h-[350px] flex-col">
                {/* GitHub label */}

                <span
                  className="
                    font-mono
                    text-xs
                    tracking-widest
                    font-semibold
                    text-neutral-400
                    uppercase
                  "
                >
                  GitHub
                </span>

                {/* Profile */}

                <div className="flex items-end justify-between gap-4 mt-3">
                  <div>
                    <h3
                      className="
                        font-inter
                        text-3xl
                        sm:text-4xl
                        font-semibold
                        tracking-tight
                        text-neutral-900
                      "
                    >
                      {github.name ||
                        GITHUB_USERNAME}
                    </h3>

                    <p className="font-inter text-sm text-neutral-500 mt-1">
                      @{github.login}
                    </p>
                  </div>

                  <a
                    href={github.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="
                      shrink-0
                      font-mono
                      text-xs
                      uppercase
                      tracking-widest
                      text-neutral-400
                      transition-colors
                      hover:text-black
                    "
                  >
                    Profile ↗
                  </a>
                </div>

                <div className="h-px bg-neutral-200 my-6" />

                {/* GitHub numbers */}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                      Repositories
                    </p>

                    <p className="font-inter text-xl font-semibold text-neutral-900 mt-1">
                      {github.public_repos}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                      Followers
                    </p>

                    <p className="font-inter text-xl font-semibold text-neutral-900 mt-1">
                      {github.followers}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                      Following
                    </p>

                    <p className="font-inter text-xl font-semibold text-neutral-900 mt-1">
                      {github.following}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400">
                      Gists
                    </p>

                    <p className="font-inter text-xl font-semibold text-neutral-900 mt-1">
                      {github.public_gists}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-neutral-200 my-6" />

                {/* Recent repositories */}

                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 mb-3">
                    Recent repositories
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {github.repos
                      ?.slice(0, 4)
                      .map((repo) => (
                        <a
                          key={repo.id}
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                          className="
                            rounded-lg
                            border
                            border-neutral-100
                            px-3
                            py-2.5
                            transition-all
                            hover:border-neutral-300
                            hover:bg-neutral-50
                          "
                        >
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-inter text-sm font-medium text-neutral-800 truncate">
                              {repo.name}
                            </p>

                            <span className="font-mono text-[10px] text-neutral-400 shrink-0">
                              ★{" "}
                              {repo.stargazers_count}
                            </span>
                          </div>

                          {repo.language && (
                            <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 mt-1">
                              {repo.language}
                            </p>
                          )}
                        </a>
                      ))}
                  </div>
                </div>

                <div className="flex-1" />

                {/* Flip hint */}

                <div className="flex justify-end mt-6">
                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-widest
                      uppercase
                      text-neutral-400
                    "
                  >
                    ← Click to view LeetCode
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}