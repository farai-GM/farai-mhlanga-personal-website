import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Page-wide background. The hero keeps the cinematic cyberpunk wash; from the
 * About section onward the palette settles down but never goes flat black —
 * the whole dark-mode background reads as a night sky (deep indigo/blue,
 * never neutral graphite) with faint color glows that persist to the footer.
 */
export function ScrollAtmosphere() {
  const { scrollYProgress } = useScroll();

  // Base wash — a night sky, not a neutral gradient. Every stop keeps a
  // blue/violet cast (chroma never drops to ~0) so it never reads as "just black".
  const baseBg = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.65, 1],
    [
      "linear-gradient(180deg, oklch(0.16 0.035 265) 0%, oklch(0.15 0.045 280) 100%)",
      "linear-gradient(180deg, oklch(0.155 0.04 270) 0%, oklch(0.14 0.035 278) 100%)",
      "linear-gradient(180deg, oklch(0.145 0.032 268) 0%, oklch(0.125 0.028 272) 100%)",
      "linear-gradient(180deg, oklch(0.13 0.026 266) 0%, oklch(0.115 0.024 270) 100%)",
      "linear-gradient(180deg, oklch(0.125 0.024 266) 0%, oklch(0.11 0.022 270) 100%)",
    ],
  );

  // Neon glow still peaks in the hero, but now keeps a real floor everywhere
  // else instead of dying out to near-zero — color highlights stay visible
  // all the way down the page.
  const neonOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.55, 0.75, 1],
    [0.14, 0.55, 0.30, 0.24, 0.50, 0.80],
  );

  // Magenta sweep drifts down the page but stays faint
  const magentaY = useTransform(scrollYProgress, [0, 1], ["-10%", "60%"]);
  // Cyan sweep drifts up
  const cyanY = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);
  // Violet sweep drifts slowly across, giving a third color anchor for the
  // back half of the page where magenta/cyan have moved off-center.
  const violetY = useTransform(scrollYProgress, [0, 1], ["30%", "75%"]);
  const violetX = useTransform(scrollYProgress, [0, 1], ["10%", "55%"]);

  // A dedicated "deep sky" glow that stays essentially constant — this is
  // what keeps the very bottom of the page from ever reading as flat black.
  const skyGlowOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.35, 0.4, 0.38],
  );

  // Scanlines only really visible in the hero, then fade out
  const scanlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.6, 1],
    [0.02, 0.16, 0.04, 0.01, 0.005],
  );

  // Star field — subtle, slow parallax, present for the entire dark-mode
  // page. Opacity is roughly the inverse of neonOpacity: stars stay quiet
  // while the magenta/cyan/violet glow is strong in the hero, then become
  // more apparent as that color settles down, so the page keeps gaining
  // visual interest instead of just losing color as you scroll.
  const starY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const starY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const starOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.25, 0.55, 0.75, 1],
    [0.3, 0.15, 0.42, 0.62, 0.75, 0.85],
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

      {/* Dark-mode cyberpunk / night-sky atmosphere */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block">
        {/* Base color wash — night sky, keeps a blue/violet cast the whole way down */}
        <motion.div className="absolute inset-0" style={{ background: baseBg }} />

        {/* Constant deep-sky glow — top-down vignette that never fully disappears,
            so the page never bottoms out at neutral black */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: skyGlowOpacity,
            background:
              "radial-gradient(ellipse 120% 60% at 50% 0%, oklch(0.3 0.09 270 / 0.5), transparent 60%), radial-gradient(ellipse 100% 50% at 50% 100%, oklch(0.28 0.08 290 / 0.4), transparent 65%)",
          }}
        />

        {/* Star field — small, twinkle-free dots with slow parallax, visible
            for the entire page so the sky feel holds up on scroll */}
        <motion.div
          className="absolute inset-[-10%]"
          style={{
            y: starY1,
            opacity: starOpacity,
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 10% 15%, oklch(0.95 0.02 250 / 0.8), transparent 100%), radial-gradient(1px 1px at 30% 45%, oklch(0.9 0.03 220 / 0.6), transparent 100%), radial-gradient(1.5px 1.5px at 55% 10%, oklch(0.95 0.02 60 / 0.7), transparent 100%), radial-gradient(1px 1px at 70% 60%, oklch(0.9 0.02 250 / 0.5), transparent 100%), radial-gradient(1.5px 1.5px at 85% 25%, oklch(0.95 0.02 250 / 0.7), transparent 100%), radial-gradient(1px 1px at 20% 80%, oklch(0.9 0.03 60 / 0.5), transparent 100%), radial-gradient(1.5px 1.5px at 45% 90%, oklch(0.95 0.02 220 / 0.6), transparent 100%), radial-gradient(1px 1px at 95% 75%, oklch(0.9 0.02 250 / 0.5), transparent 100%)",
            backgroundSize: "100% 100%",
          }}
        />
        <motion.div
          className="absolute inset-[-10%]"
          style={{
            y: starY2,
            opacity: starOpacity,
            backgroundImage:
              "radial-gradient(1px 1px at 5% 55%, oklch(0.95 0.02 250 / 0.5), transparent 100%), radial-gradient(1px 1px at 40% 20%, oklch(0.9 0.02 60 / 0.4), transparent 100%), radial-gradient(1px 1px at 62% 75%, oklch(0.95 0.02 220 / 0.5), transparent 100%), radial-gradient(1px 1px at 80% 40%, oklch(0.9 0.02 250 / 0.4), transparent 100%), radial-gradient(1px 1px at 15% 95%, oklch(0.95 0.02 250 / 0.4), transparent 100%), radial-gradient(1px 1px at 90% 10%, oklch(0.9 0.02 60 / 0.4), transparent 100%)",
            backgroundSize: "100% 100%",
          }}
        />

        {/* Neon radial sweeps — strong at hero, keep a real floor everywhere else */}
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
          <motion.div
            className="absolute h-[80vh] w-[80vh] rounded-full blur-3xl"
            style={{
              top: violetY,
              left: violetX,
              background:
                "radial-gradient(circle, oklch(0.68 0.17 290 / 0.55), transparent 65%)",
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