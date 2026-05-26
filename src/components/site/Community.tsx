import community from "@/assets/community-ignite.jpg";
import { Reveal, SectionLabel } from "./Reveal";

export function Community() {
  return (
    <section id="community" className="relative w-full px-6 py-32 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>04 · Community</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                IGNITE Society.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
                As Chairman, I oversaw the executive committee — managing operational
                finances, planning and coordinating events, and setting KPIs while
                ensuring regulatory compliance with all relevant stakeholders.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I led with{" "}
                <span className="text-foreground/90">operational transparency</span> and
                a culture of accountability — structured documentation, continuous
                improvement, and quiet trust.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  ["2023", "Chairman"],
                  ["2018", "Solar Car · Logistics Lead"],
                  ["2024—", "Music Director"],
                ].map(([y, r]) => (
                  <div key={y}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/80">
                      {y}
                    </dt>
                    <dd className="mt-2 text-sm text-foreground/85">{r}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={community}
                  alt="IGNITE Society — community"
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <p className="max-w-sm font-display text-lg leading-snug text-foreground/95 sm:text-xl">
                    "Leadership is the quiet work that lets other people do loud work."
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60">
                    UP · 2023
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}