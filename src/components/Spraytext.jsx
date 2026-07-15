"use client";

import { useEffect, useRef, useState } from "react";

/**
 * SprayText
 * Renders `text` as a left-to-right "drizzle" of particles that converge
 * into the shape of the text, then hands off to the real, crisp, selectable
 * text once the animation completes.
 *
 * - Font size/weight/family/tracking are read from the actual rendered
 *   element (via `className`), so it always matches your Tailwind classes
 *   and stays responsive across breakpoints.
 * - Runs once, when the element scrolls into view (or on mount for hero use).
 * - Respects prefers-reduced-motion (falls straight to real text, no animation).
 */
export default function SprayText({
  text,
  className = "",
  as: Tag = "p",
  particleColor = "#000000",
  duration = 1100,
  particleGap = 3,
  particleSize = 1.6,
}) {
  const wrapRef = useRef(null);
  const measureRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const phaseRef = useRef("idle"); // idle -> measuring -> animating -> done
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    let cancelled = false;
    let observer;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setPhase("done");
      return;
    }

    function startWhenVisible() {
      if (!wrapRef.current || cancelled) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && phaseRef.current === "idle") {
              phaseRef.current = "measuring";
              setPhase("measuring");
              observer.disconnect();
              requestAnimationFrame(buildAndAnimate);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(wrapRef.current);
    }

    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) startWhenVisible();
      });
    } else {
      startWhenVisible();
    }

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function buildAndAnimate() {
    const measureEl = measureRef.current;
    const canvas = canvasRef.current;
    if (!measureEl || !canvas) return;

    const rect = measureEl.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.ceil(rect.width));
    const height = Math.max(1, Math.ceil(rect.height));

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const computed = getComputedStyle(measureEl);
    const fontStr = `${computed.fontStyle} ${computed.fontWeight} ${computed.fontSize}/${computed.lineHeight} ${computed.fontFamily}`;

    // Offscreen canvas used only to sample which pixels the glyphs occupy.
    const sample = document.createElement("canvas");
    sample.width = width;
    sample.height = height;
    const sctx = sample.getContext("2d");
    sctx.font = fontStr;
    sctx.fillStyle = "#000";
    sctx.textBaseline = "alphabetic";

    const metrics = sctx.measureText(text);
    const ascent =
      metrics.actualBoundingBoxAscent || parseFloat(computed.fontSize) * 0.8;
    const baselineY = Math.min(height - 1, ascent + (height - ascent) / 2);
    sctx.fillText(text, 0, baselineY);

    let imgData;
    try {
      imgData = sctx.getImageData(0, 0, width, height).data;
    } catch (e) {
      setPhase("done");
      return;
    }

    const points = [];
    for (let y = 0; y < height; y += particleGap) {
      for (let x = 0; x < width; x += particleGap) {
        const alphaIdx = (y * width + x) * 4 + 3;
        if (imgData[alphaIdx] > 120) points.push({ x, y });
      }
    }

    if (points.length === 0) {
      setPhase("done");
      return;
    }

    const maxX = Math.max(...points.map((p) => p.x)) || width;
    const particles = points.map((p) => {
      const delayRatio = p.x / maxX; // drives the left-to-right sweep
      return {
        tx: p.x,
        ty: p.y,
        // "spray / drizzle" origin: a little above and scattered sideways
        sx: p.x + (Math.random() - 0.5) * 26,
        sy: p.y - 14 - Math.random() * 22,
        delay: delayRatio * (duration * 0.65),
        dur: 260 + Math.random() * 220,
      };
    });

    setPhase("animating");
    startRef.current = null;
    const totalDuration = duration + 300;

    function frame(ts) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = particleColor;

      for (const p of particles) {
        const local = elapsed - p.delay;
        let progress;
        if (local <= 0) progress = 0;
        else if (local >= p.dur) progress = 1;
        else progress = local / p.dur;

        const eased = 1 - Math.pow(1 - progress, 3);
        const x = p.sx + (p.tx - p.sx) * eased;
        const y = p.sy + (p.ty - p.sy) * eased;
        const alpha = progress <= 0 ? 0 : Math.min(1, progress + 0.15);

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (elapsed < totalDuration) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        setPhase("done");
      }
    }

    rafRef.current = requestAnimationFrame(frame);
  }

  return (
    <span ref={wrapRef} className="relative inline-block w-full align-top">
      {/* Reserves layout space + gives us accurate font metrics to sample from */}
      <Tag ref={measureRef} className={`${className} invisible`} aria-hidden="true">
        {text}
      </Tag>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: phase === "animating" ? 1 : 0 }}
        aria-hidden="true"
      />

      {/* Real, crisp, selectable text — fades in once the particles land */}
      <Tag
        className={`${className} absolute inset-0 transition-opacity duration-500 ${
          phase === "done" ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </Tag>
    </span>
  );
}