import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectVoice from "@/assets/project-voice.jpg";
import projectEmbedded from "@/assets/project-embedded.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import { Reveal, SectionLabel } from "./Reveal";

type Project = {
  year: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  context: string;
};

const projects: Project[] = [
  {
    year: "2025",
    title: "Voice-Controlled Mouse & Keyboard",
    context: "University of Pretoria",
    summary:
      "An embedded system enabling hands-free computer control through real-time voice command recognition and HID emulation.",
    stack: ["Embedded", "DSP", "Python", "C"],
    image: projectVoice,
  },
  {
    year: "2024",
    title: "FPGA Signal Processing",
    context: "University of Pretoria",
    summary:
      "Digital signal processing pipelines implemented on FPGA — from filter design to deterministic real-time execution.",
    stack: ["Quartus", "Verilog", "MATLAB", "DSP"],
    image: projectEmbedded,
  },
  {
    year: "2023",
    title: "Sasol Solar Car Challenge",
    context: "University of Pretoria",
    summary:
      "Mechanical subsystems, sensor integration, and firmware (PIC18) for a student-built solar vehicle racing across South Africa.",
    stack: ["PIC18", "Fusion 360", "Firmware", "Strategy"],
    image: projectSolar,
  },
  {
    year: "2025—",
    title: "Sevenly Travel — Software Developer",
    context: "React · Node · MongoDB",
    summary:
      "Scalable frontend features and integrations for a travel platform, shipping in an Agile, AI-assisted workflow.",
    stack: ["React", "Node.js", "MongoDB", "Jira"],
    image: projectEmbedded,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative w-full px-6 py-32 sm:py-40">
      <div className="absolute inset-0 -z-10 bg-grid bg-grid-fade opacity-30" aria-hidden />
      {/* Subtle cyberpunk hint — the gradient begins here */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 90% 100%, oklch(0.72 0.28 340 / 0.10), transparent 55%), radial-gradient(ellipse at 10% 0%, oklch(0.86 0.16 200 / 0.08), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel>02 · Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
                Systems brought to life.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-muted-foreground sm:text-base">
              A working set of engineering and product projects across embedded,
              signal processing, and full-stack software.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            width={1280}
            height={896}
            loading="lazy"
            className="size-full object-cover opacity-80 transition-all duration-[1200ms] group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/70">
              {project.year}
            </span>
            <span className="size-1 rounded-full bg-accent" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.context}
            </span>
          </div>
          <ArrowUpRight className="absolute right-4 top-4 size-4 text-foreground/40 transition-all group-hover:right-3 group-hover:top-3 group-hover:text-primary" />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <h3 className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        {/* Hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at 50% 0%, oklch(0.72 0.16 245 / 0.12), transparent 60%)",
          }}
        />
      </motion.article>
    </Reveal>
  );
}