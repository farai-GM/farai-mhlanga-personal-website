import { Reveal, SectionLabel } from "./Reveal";

const roles = [
  {
    org: "Cheery Robot Academy",
    title: "Tutor & Coding Mentor",
    period: "2022 — Present",
    description:
      "I teach programming and robotics fundamentals to students of varying ages, translating complex ideas into approachable lessons. I design practical exercises, debug code alongside learners, and help them build confidence in problem-solving — the same patience and clarity I bring to engineering teams.",
    highlights: ["Python & Scratch tutoring", "Robotics workshops", "Curriculum support"],
  },
  {
    org: "Sevenly Travel",
    title: "Software Developer",
    period: "2023 — Present",
    description:
      "Part-time software developer building and maintaining features for a travel platform. I work across the stack, from backend services and database design to frontend interfaces, shipping reliable code that helps real users plan trips.",
    highlights: ["Full-stack feature work", "API design & integration", "Production support"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative w-full px-6 py-20 sm:py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel>03 · Experience</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
              Part-time work, full-time craft.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Alongside engineering projects, I tutor and build software in production. Both roles keep me learning, communicating, and shipping.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {roles.map((role, i) => (
            <Reveal key={role.org} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card/40 p-6 sm:p-8 transition-colors hover:bg-card/60">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                      {role.org}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{role.title}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                    {role.period}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {role.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {role.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
