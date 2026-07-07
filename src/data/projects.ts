import projectVoice from "@/assets/Voice_Controlled_MK.jpeg";
import projectWebsite from "@/assets/Screenshot 2026-07-01 212452.png";
import projectMarv from "@/assets/Robot_car.png";
import FPGA from "@/assets/FPGA.jpeg";


export type Project = {
  slug: string;
  year: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  context: string;
  overview: string;
  details: string[];
  role?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "voice-controlled-mouse-keyboard",
    year: "2025",
    title: "Voice-Controlled Mouse & Keyboard",
    context: "University of Pretoria",
    summary:
      "An embedded system enabling hands-free computer control through real-time voice command recognition and HID emulation.",
    stack: ["Embedded", "Khadas Vim 4", "DSP", "STM32", "Python", "C", "C++"],
    image: projectVoice,
    overview:
      "A hands-free human interface device that translates spoken commands into standard mouse and keyboard events, designed for accessibility and low-latency control.",
    details: [
      "Real-time voice command recognition running on a Khadas Vim 4 as the compute node, with an STM32 handling deterministic HID emulation over USB.",
      "Custom DSP pipeline for noise gating, endpoint detection and feature extraction to keep recognition latency under interactive thresholds.",
      "C/C++ firmware on the microcontroller side with a Python control plane on the host for training, calibration and command mapping.",
      "Modular command grammar so new gestures (click, scroll, keyboard shortcuts, application launches) can be added without touching the audio path.",
    ],
    role: "Systems and firmware lead — audio pipeline, HID stack, host tooling.",
    outcome:
      "Demonstrated end-to-end voice-to-HID control on Windows and Linux hosts with no drivers required beyond generic USB HID.",
  },
  {
    slug: "fpga-signal-processing",
    year: "2025",
    title: "FPGA Signal Processing",
    context: "University of Pretoria",
    summary:
      "Random memory access interfaced with UART implemented from first principles on FPGA for real time execution.",
    stack: ["Quartus", "UART Bridge", "Verilog", "Python"],
    image: FPGA,
    overview:
      "A from-first-principles FPGA design that exposes on-chip memory over UART, providing a real-time bridge for host-driven signal processing experiments.",
    details: [
      "Verilog implementation of a random-access memory controller with a UART bridge, synthesised in Quartus for an Intel FPGA target.",
      "Deterministic timing on read/write transactions to keep the host-side signal processing loop stable.",
      "Python host tooling for streaming buffers into the fabric and pulling processed results back for analysis.",
      "Test harness built up in stages: loopback, single-word access, burst access, then full DSP integration.",
    ],
    role: "Digital designer — RTL, verification, host tooling.",
    outcome: "Stable real-time execution with a clean host API for future DSP experiments.",
  },
  {
    slug: "marv-race-car",
    year: "2024",
    title: "MARV Race Car",
    context: "University of Pretoria",
    summary:
      "Multicolor line following robot designed and built for autonomous navigation from first principles.",
    stack: ["MPLABX", "PIC18", "Fusion 360", "LTSpice", "Assembly"],
    image: projectMarv,
    overview:
      "An autonomous line-following race car built from the chassis up, combining custom electronics, mechanical design and hand-written assembly firmware on a PIC18.",
    details: [
      "Chassis and mounts designed in Fusion 360, with analog sensor circuits prototyped and validated in LTSpice before board layout.",
      "PIC18 firmware written in assembly for tight control-loop timing over the color sensor array and motor drivers.",
      "Track strategy handled multiple line colors as distinct navigation cues, allowing routing decisions beyond a single-line follower.",
      "Iterative tuning across mechanical, electrical and firmware layers to hit competition lap times.",
    ],
    role: "Full-stack builder — mechanical, electrical, firmware.",
    outcome: "A working autonomous vehicle used as a teaching reference for later cohorts.",
  },
  {
    slug: "personal-website",
    year: "2026",
    title: "Personal Website for CV and Portfolio",
    context: "React · Node",
    summary:
      "Scalable frontend features and integrations for a personal website, utilizing an AI-assisted workflow.",
    stack: ["React", "Node.js", "Lovable", "GIT"],
    image: projectWebsite,
    overview:
      "A personal portfolio and CV site built on a modern React stack, tuned for a cinematic, gradually-intensifying visual identity.",
    details: [
      "TanStack Start + React 19 + Vite, deployed on an edge runtime.",
      "Custom scroll-driven atmosphere layer that progresses from matte black into a Daft Punk / cyberpunk palette across the page.",
      "Component-first architecture with reusable section primitives (Reveal, SectionLabel) and shadcn/ui as the base kit.",
      "AI-assisted workflow used for scaffolding, refactors and visual iteration, with every change reviewed and hand-tuned.",
    ],
    role: "Designer and engineer.",
    outcome: "The site you're reading right now.",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);