"use client";

import { useMemo, useState, useEffect } from "react";

// TODO: replace with your actual LeetCode username
const LEETCODE_USERNAME = "bhargavi-chaudhary-803";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const DAY_MS = 24 * 60 * 60 * 1000;

function buildCalendarGrid(submissionCalendar) {
  const counts = {};
  Object.entries(submissionCalendar || {}).forEach(([ts, count]) => {
    const key = new Date(Number(ts) * 1000).toISOString().slice(0, 10);
    counts[key] = (counts[key] || 0) + Number(count);
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today.getTime() - 364 * DAY_MS);
  start.setDate(start.getDate() - start.getDay());

  const days = [];
  for (let cursor = new Date(start); cursor <= today; cursor.setDate(cursor.getDate() + 1)) {
    const key = cursor.toISOString().slice(0, 10);
    days.push({ key, date: new Date(cursor), count: counts[key] || 0 });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  const monthMarkers = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const month = week[0].date.getMonth();
    if (month !== lastMonth) {
      monthMarkers.push({ index: wi, label: MONTH_LABELS[month] });
      lastMonth = month;
    }
  });

  let totalSubs = 0;
  let activeDays = 0;
  let curStart = 0;
  let bestStart = 0;
  let bestEnd = -1;

  days.forEach((d, i) => {
    if (d.count > 0) {
      totalSubs += d.count;
      activeDays += 1;
      if (i === 0 || days[i - 1].count === 0) curStart = i;
      if (i - curStart > bestEnd - bestStart) {
        bestStart = curStart;
        bestEnd = i;
      }
    }
  });

  const streakKeys = new Set();
  for (let i = bestStart; i <= bestEnd; i++) streakKeys.add(days[i].key);
  const maxStreak = bestEnd >= bestStart ? bestEnd - bestStart + 1 : 0;

  return { weeks, monthMarkers, totalSubs, activeDays, maxStreak, streakKeys };
}

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

function shade(count, max) {
  if (count === 0) return "#EDEDEC";
  const ratio = max > 0 ? count / max : 0;
  const index = Math.min(GREEN_SCALE.length - 1, Math.floor(ratio * GREEN_SCALE.length));
  return GREEN_SCALE[index];
}

function formatDate(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState("loading");
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchStats() {
      try {
        const res = await fetch(`https://leetcode-stats.tashif.codes/${LEETCODE_USERNAME}`);
        if (!res.ok) throw new Error("Request failed");
        const data = await res.json();
        if (data.status === "error") throw new Error("User not found");
        if (!cancelled) { setStats(data); setStatus("success"); }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }
    fetchStats();
    return () => { cancelled = true; };
  }, []);

  const calendar = useMemo(() => {
    if (!stats?.submissionCalendar) return null;
    let raw = stats.submissionCalendar;
    if (typeof raw === "string") {
      try { raw = JSON.parse(raw); } catch { raw = {}; }
    }
    return buildCalendarGrid(raw);
  }, [stats]);

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center py-16">
        <p className="font-inter text-sm text-neutral-400">Loading stats…</p>
      </div>
    );
  }

  if (status === "error" || !stats || !calendar) {
    return (
      <div className="w-full flex justify-center py-16">
        <p className="font-inter text-sm text-neutral-400">Couldn't load LeetCode stats right now.</p>
      </div>
    );
  }

  const maxCount = Math.max(1, ...calendar.weeks.flat().map((d) => d.count));

  return (
    <div className="w-full flex justify-center px-6 mt-16 mb-32">
      <div className="w-full max-w-4xl border border-neutral-200 rounded-2xl px-6 py-7 sm:px-8 sm:py-8 bg-white">

        {/* Eyebrow */}
        <span className="font-mono text-xs tracking-widest font-semibold text-neutral-400 uppercase">
          LeetCode
        </span>

        {/* Solved stats row */}
        <div className="flex items-end justify-between mt-3 flex-wrap gap-4">
          <div>
            <span className="font-inter text-4xl font-semibold text-neutral-900 tracking-tight">
              {stats.totalSolved}
            </span>
            <span className="font-inter text-sm text-neutral-400 ml-2">
              / {stats.totalQuestions} solved
            </span>
            <p className="font-inter text-sm text-neutral-500 mt-1.5">
              {stats.easySolved} Easy &nbsp;·&nbsp; {stats.mediumSolved} Medium &nbsp;·&nbsp; {stats.hardSolved} Hard
            </p>
          </div>
          <div className="flex gap-6 text-right">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">Acceptance</p>
              <p className="font-inter text-base font-medium text-neutral-900 mt-1">
                {Number(stats.acceptanceRate).toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">Rank</p>
              <p className="font-inter text-base font-medium text-neutral-900 mt-1">
                {stats.ranking ? `#${Number(stats.ranking).toLocaleString()}` : "—"}
              </p>
            </div>
          </div>
        </div>

        <div className="h-px bg-neutral-200 my-6" />

        {/* Heatmap header — swaps to the hovered day on interaction */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2 min-h-[20px]">
          <p className="font-inter text-base text-neutral-600">
            {hovered ? (
              <>
                <span className="text-neutral-900 font-medium">{hovered.count} submissions</span>
                {" "}on {formatDate(hovered.date)}
              </>
            ) : (
              <>
                <span className="text-neutral-900 font-semibold">{calendar.totalSubs}</span>{" "}
                submissions in the past year
              </>
            )}
          </p>
          <div className="flex items-center gap-6">
            <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              Active days <span className="text-neutral-900 font-semibold ml-1">{calendar.activeDays}</span>
            </p>
            <p className="font-mono text-xs tracking-widest uppercase text-neutral-400">
              Max streak <span className="text-neutral-900 font-semibold ml-1">{calendar.maxStreak}</span>
            </p>
          </div>
        </div>

        {/* Heatmap */}
        <div className="overflow-x-auto">
          <div className="inline-flex gap-1">
            {calendar.weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((day, di) => {
                  return (
                    <div
                      key={di}
                      onMouseEnter={() => setHovered(day)}
                      onMouseLeave={() => setHovered(null)}
                      className="w-[13px] h-[13px] rounded-[3px] cell-anim transition-transform duration-150 hover:scale-125 cursor-pointer border-0 outline-none"
                      style={{
                        backgroundColor: shade(day.count, maxCount),
                        animationDelay: `${wi * 10}ms`,
                        border: "none",
                        boxShadow: "none",
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Month labels */}
          <div className="relative h-5 mt-2.5" style={{ width: calendar.weeks.length * 16 }}>
            {calendar.monthMarkers.map((m) => (
              <span
                key={m.index}
                className="absolute font-mono text-xs text-neutral-400 uppercase"
                style={{ left: m.index * 16 }}
              >
                {m.label}
              </span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-2 mt-4">
          <span className="font-mono text-xs text-neutral-400 mr-1">Less</span>
          {["#EDEDEC", ...GREEN_SCALE].map((c) => (
            <span key={c} className="w-3 h-3 rounded-[3px] border-0 outline-none" style={{ backgroundColor: c, border: "none" }} />
          ))}
          <span className="font-mono text-xs text-neutral-400 ml-1">More</span>
        </div>
      </div>

      <style jsx>{`
        .cell-anim {
          animation: cellIn 0.4s ease backwards;
        }
        @keyframes cellIn {
          from {
            opacity: 0;
            transform: scale(0.4);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}