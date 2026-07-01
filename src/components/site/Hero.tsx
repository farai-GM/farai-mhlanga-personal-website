import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroAtmosphere from "@/assets/hero-atmosphere.jpg";
import heroReveal from "@/assets/Hero Image BG.png";
import { Particles } from "./Particles";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef<{ x: number; y: number } | null>(null);
  const ticking = useRef(false);
  const REVEAL_RADIUS = 30; // px — adjust to change circular reveal size
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        // Torch/reveal effect is dark-mode only.
        if (!document.documentElement.classList.contains("dark")) return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        posRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

        if (!ticking.current) {
          ticking.current = true;
          requestAnimationFrame(() => {
            const p = posRef.current;
            const el = maskRef.current;
            if (el && p) {
              el.style.clipPath = `circle(${REVEAL_RADIUS}px at ${p.x}px ${p.y}px)`;
              el.style.opacity = "1";
            }
            ticking.current = false;
          });
        }
      }}
      onMouseLeave={() => {
        const el = maskRef.current;
        if (el) {
          el.style.opacity = "0";
          el.style.clipPath = `circle(0px at 0 0)`;
        }
        posRef.current = null;
      }}
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image — parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroAtmosphere}
          alt=""
          aria-hidden
          width={1920}
          height={1088}
          className="size-full object-cover opacity-100 dark:opacity-90"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-b from-background/20 via-background/15 to-background/60 dark:block" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 hidden bg-grid bg-grid-fade opacity-40 dark:block" aria-hidden />

      {/* Dim overlay + torch reveal — dark mode only. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden dark:block"
        style={{
          zIndex: -9,
          background: "rgba(5,5,5,0.62)",
          pointerEvents: "none",
        }}
      />

      {/* Reveal image: visible only inside a circular clip-path at the cursor */}
      <div
        ref={maskRef}
        aria-hidden
        className="absolute inset-0 hidden dark:block"
        style={{
          zIndex: -8,
          backgroundImage: `url(${heroReveal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
          clipPath: `circle(0px at 0 0)`,
          opacity: 0,
          willChange: "clip-path, opacity",
        } as any}
      />

      {/* Radial glow behind title */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 hidden size-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl dark:block"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.72 0.16 245 / 0.55), transparent 70%)",
        }}
      />

      {/* Secondary warm glow */}
      <div
        aria-hidden
        className="absolute left-1/3 top-1/3 -z-10 hidden size-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl dark:block"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.13 65 / 0.35), transparent 70%)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <Particles />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_oklch(0.78_0.13_65)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Pretoria · ZA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-display text-balance text-6xl leading-[0.95] text-foreground text-glow-blue sm:text-7xl md:text-[7.5rem] transition-colors hover:text-primary hover:drop-shadow-[0_0_28px_rgba(59,130,246,0.45)]"
        >
          Farai <em className="not-italic text-primary">Gabriel</em> Mhlanga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg transition-colors hover:text-primary hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.35)]"
        >
          Computer Engineer with a love for <span className="text-foreground/85">systems thinking</span> 
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg transition-colors hover:text-primary hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.35)]"
        >
          <span className="text-foreground/85">Engineering</span> systems - Fostering <span className="text-foreground/85">Creativity</span> - Living with <span className="text-foreground/85">Impact</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm text-foreground/90 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
          >
            Explore the work
            <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="grid grid-cols-3 gap-x-10 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
            <span>Systems</span>
            <span className="text-center">AI/Automation</span>
            <span className="text-right">Software</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom hairline */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px hairline-amber opacity-60" />
    </section>
  );
}