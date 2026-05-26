import portrait from "@/assets/portrait-placeholder.jpg";
import { Reveal, SectionLabel } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative w-full px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
            <img
              src={portrait}
              alt="Portrait of Farai Mhlanga"
              width={1024}
              height={1280}
              loading="lazy"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
              Farai Mhlanga · 2026
            </div>
          </div>
          {/* glow */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-3xl opacity-40 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.72 0.16 245 / 0.35), transparent)",
            }}
          />
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>01 · About</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Engineer of systems,
              <br />
              <span className="text-muted-foreground">student of everything else.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Final-year Computer Engineering student at the{" "}
                <span className="text-foreground/90">University of Pretoria</span>, working
                across AI, embedded systems, and software — from FPGA implementations and
                digital signal processing to backend services and cloud automation.
              </p>
              <p>
                I care about systems thinking: how parts behave when they meet,
                how to make the complex feel inevitable, and how good engineering
                disappears into the experience it serves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="mt-12 border-l-2 border-primary/60 pl-6 font-display text-2xl leading-snug text-foreground/90 sm:text-3xl">
              "An engineer who builds intelligent systems while deeply valuing creativity,
              storytelling, music, and community."
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ["Education", "BEng Computer Eng.\nUniversity of Pretoria"],
                ["Now", "Sevenly Travel\nCheery Robot Academy"],
                ["Focus", "Systems · Embedded\nBackend · Cloud"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
                    {k}
                  </dt>
                  <dd className="mt-2 whitespace-pre-line text-sm text-foreground/85">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}