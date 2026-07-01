import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Page-wide background that gradually shifts from matte black into a
 * Daft Punk / Blade Runner cyberpunk wash as the user scrolls, peaking
 * around the Beyond Engineering section and fading into an afterglow.
 *
 * Rendered once at the page root as a fixed full-viewport layer so that
 * every section sits on top of a single continuous atmosphere instead of
 * its own isolated background.
 */
export function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();

  // Base wash — matte black -> deep indigo -> magenta/cyan night -> afterglow
  const baseBg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.8, 1],
    [
      "linear-gradient(180deg, oklch(0.13 0.005 260) 0%, oklch(0.14 0.02 275) 100%)",
      "linear-gradient(180deg, oklch(0.15 0.05 285) 0%, oklch(0.16 0.09 305) 100%)",
      "linear-gradient(180deg, oklch(0.17 0.12 320) 0%, oklch(0.15 0.14 295) 100%)",
      "linear-gradient(180deg, oklch(0.15 0.10 305) 0%, oklch(0.12 0.07 285) 100%)",
      "linear-gradient(180deg, oklch(0.13 0.04 280) 0%, oklch(0.13 0.01 260) 100%)",
    ],
  );

  // Neon glow opacity — quiet at the top, blazing by Beyond, soft fade after
  const neonOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.55, 0.75, 1],
    [0.1, 0.45, 1, 0.85, 0.5],
  );

  // Magenta sweep drifts down the page
  const magentaY = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]);
  // Cyan sweep drifts up
  const cyanY = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);

  // Scanlines fade in with the cyberpunk peak
  const scanlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6, 0.85, 1],
    [0.02, 0.1, 0.2, 0.15, 0.08],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block">
      {/* Base color wash */}
      <motion.div className="absolute inset-0" style={{ background: baseBg }} />

      {/* Neon radial sweeps — magenta + cyan */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: neonOpacity,
          background: "transparent",
        }}
      >
        <motion.div
          className="absolute left-[-10%] h-[95vh] w-[95vh] rounded-full blur-3xl"
          style={{
            top: magentaY,
            background:
              "radial-gradient(circle, oklch(0.72 0.28 340 / 0.9), transparent 65%)",
          }}
        />
        <motion.div
          className="absolute right-[-10%] h-[95vh] w-[95vh] rounded-full blur-3xl"
          style={{
            top: cyanY,
            background:
              "radial-gradient(circle, oklch(0.86 0.16 200 / 0.8), transparent 65%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-1/2 h-[55vh] -translate-y-1/2 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.68 0.17 290 / 0.55), transparent 70%)",
          }}
        />
      </motion.div>

      {/* Scanlines layer */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          opacity: scanlineOpacity,
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(1 0 0 / 0.7) 0px, oklch(1 0 0 / 0.7) 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}