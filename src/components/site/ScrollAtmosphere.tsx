import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Page-wide background. The hero keeps the cinematic cyberpunk wash; from the
 * About section onward the atmosphere is intentionally minimal so the content
 * and cards are the focus.
 */
export function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();

  // Base wash — dark hero -> matte black -> deep graphite -> near black
  const baseBg = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 1],
    [
      "linear-gradient(180deg, oklch(0.13 0.005 260) 0%, oklch(0.14 0.02 275) 100%)",
      "linear-gradient(180deg, oklch(0.14 0.03 280) 0%, oklch(0.13 0.02 275) 100%)",
      "linear-gradient(180deg, oklch(0.13 0.01 270) 0%, oklch(0.12 0.005 260) 100%)",
      "linear-gradient(180deg, oklch(0.12 0.005 260) 0%, oklch(0.11 0.003 260) 100%)",
      "linear-gradient(180deg, oklch(0.12 0.005 260) 0%, oklch(0.11 0.003 260) 100%)",
    ],
  );

  // Neon glow peaks early in the hero, then almost disappears from About onward
  const neonOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.55, 0.75, 1],
    [0.1, 0.55, 0.15, 0.05, 0.03, 0.02],
  );

  // Magenta sweep drifts down the page but stays faint
  const magentaY = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]);
  // Cyan sweep drifts up
  const cyanY = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);

  // Scanlines only really visible in the hero, then fade out
  const scanlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.6, 1],
    [0.02, 0.16, 0.04, 0.01, 0.005],
  );

  // Light-mode wash — cream hero -> clean cream -> soft white, minimal blobs
  const lightBg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [
      "linear-gradient(180deg, #fdfaf5 0%, #f8efe2 100%)",
      "linear-gradient(180deg, #fbf7f0 0%, #f7f0e5 100%)",
      "linear-gradient(180deg, #faf6ee 0%, #f6ede0 100%)",
      "linear-gradient(180deg, #faf6ee 0%, #f6ede0 100%)",
    ],
  );
  const lightBlobY1 = useTransform(scrollYProgress, [0, 1], ["-5%", "70%"]);
  const lightBlobY2 = useTransform(scrollYProgress, [0, 1], ["80%", "10%"]);

  return (
    <>
      {/* Light-mode atmosphere */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden dark:hidden">
        <motion.div className="absolute inset-0" style={{ background: lightBg }} />
        <motion.div
          className="absolute left-[-15%] h-[90vh] w-[90vh] rounded-full blur-3xl"
          style={{
            top: lightBlobY1,
            background:
              "radial-gradient(circle, rgba(240, 190, 150, 0.22), transparent 65%)",
          }}
        />
        <motion.div
          className="absolute right-[-15%] h-[90vh] w-[90vh] rounded-full blur-3xl"
          style={{
            top: lightBlobY2,
            background:
              "radial-gradient(circle, rgba(210, 165, 125, 0.18), transparent 65%)",
          }}
        />
      </div>

      {/* Dark-mode cyberpunk atmosphere */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block">
        {/* Base color wash */}
        <motion.div className="absolute inset-0" style={{ background: baseBg }} />

        {/* Neon radial sweeps — strong at hero, quiet elsewhere */}
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
                "radial-gradient(circle, oklch(0.72 0.28 340 / 0.75), transparent 65%)",
            }}
          />
          <motion.div
            className="absolute right-[-10%] h-[95vh] w-[95vh] rounded-full blur-3xl"
            style={{
              top: cyanY,
              background:
                "radial-gradient(circle, oklch(0.86 0.16 200 / 0.65), transparent 65%)",
            }}
          />
          <div
            className="absolute inset-x-0 top-1/2 h-[55vh] -translate-y-1/2 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.68 0.17 290 / 0.45), transparent 70%)",
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
    </>
  );
}
