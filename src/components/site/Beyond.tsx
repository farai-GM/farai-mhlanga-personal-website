import piano from "@/assets/Piano 1.avif";
import film from "@/assets/Cinema.png";
import faith from "@/assets/church_inside.avif";
import { Reveal, SectionLabel } from "./Reveal";

const panels = [
  {
    image: piano,
    label: "Music Quarter",
    title: "Music as architecture.",
    body:
      "Pianist and Music Director at Celebration Church Pretoria. I think in voicings, dynamics, and silence — the same way I think in systems.",
    meta: "Band Director · 2024—",
    accent: "from-[oklch(0.86_0.16_200/0.55)] to-transparent",
  },
  {
    image: film,
    label: "Cinema Quarter",
    title: "Stories that light the dark.",
    body:
      "Cinema and anime shape how I see craft — frame composition, restraint, the discipline of mood. Blade Runner 2049, Interstellar, and quiet anime atmospheres are constant references.",
    meta: "Enthusiast",
    accent: "from-[oklch(0.72_0.28_340/0.55)] to-transparent",
  },
  {
    image: faith,
    label: "Cathedral Quarter",
    title: "The long quiet questions.",
    body:
      "Faith is the quiet architecture beneath the work. As Music Director at Celebration Church — and in the way I led IGNITE Society — service, stewardship, and integrity became engineering disciplines of their own.",
    meta: "Christian · Always",
    accent: "from-[oklch(0.78_0.13_65/0.55)] to-transparent",
  },
];

export function Beyond() {
  return (
    <section id="beyond" className="relative w-full overflow-hidden px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>04 · Beyond Engineering</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              The other half of the signal.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Three quarters of a city I keep returning to — music, cinema, and faith.
              Each one shapes the engineer.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {panels.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/30 shadow-[0_0_60px_-20px_oklch(0.72_0.28_340/0.25)] transition-shadow duration-700 hover:shadow-[0_0_80px_-15px_oklch(0.72_0.28_340/0.5)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.label}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="size-full object-cover opacity-95 transition-all duration-[1400ms] group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-background/70" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${p.accent} mix-blend-screen opacity-40`}
                  />
                  <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.24em] text-foreground/90">
                    {p.label}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-2xl leading-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <div className="mt-auto pt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                    {p.meta}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}