import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header.jsx";
import IntroSequence from "./components/IntroSequence.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { researchProjects } from "./data/researchProjects.js";
import novaLogo from "../assets/nova-logov.png";

const researchSignals = [
  {
    title: "Dynamical systems",
    body: "Model trajectories, transitions, and hidden regimes across systems that evolve through time."
  },
  {
    title: "Scientific ML",
    body: "Keep models expressive enough for nonlinear structure and legible enough for scientific reasoning."
  },
  {
    title: "Uncertainty",
    body: "Treat noise, missing structure, and counterfactual variation as first-class parts of inference."
  }
];

const people = [
  {
    role: "Founder / AI & Scientific Research",
    name: "Vinicius Ruggeri",
    href: "https://github.com/viniruggeri",
    body:
      "AI Research Engineer at BTG Pactual and founder of NOVA. Studies how complex systems fail, with emphasis on basin geometry, regime transitions, survivability under perturbation, and scientific machine learning for partially observed systems.",
    tags: ["AI research", "dynamical systems", "Scientific ML", "BTG Pactual"]
  },
  {
    role: "Cofounder / Mathematical Research",
    name: "Patrick Mansour",
    href: "https://github.com/PatrickMansour",
    body:
      "Cofounder of NOVA and coauthor on nova-hsp. Strong mathematical background, national and international olympiad medalist, Computer Science student at FIAP, and deeply interested in astronomy, cosmology, and the same scientific questions that drive NOVA.",
    tags: ["mathematics", "olympiads", "Computer Science", "cosmology"]
  }
];

export default function NovaLanding() {
  const prefersReducedMotion = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIntroComplete(true);
      return undefined;
    }

    const timer = window.setTimeout(() => setIntroComplete(true), 5200);
    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-nova-bg text-white">
      {!introComplete && (
        <IntroSequence
          reducedMotion={prefersReducedMotion}
          onComplete={() => setIntroComplete(true)}
        />
      )}

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={introComplete ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(10px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Header />

        <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8">
          <div className="nova-field absolute inset-0" aria-hidden="true" />
          <div className="nova-scan absolute inset-0" aria-hidden="true" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <p className="mb-5 text-sm font-medium uppercase text-nova-mid">
                Inference under uncertainty
              </p>
              <h1 className="text-balance text-5xl font-light leading-none text-white sm:text-6xl lg:text-7xl">
                NOVA Research Systems
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-light leading-8 text-white/65">
                A research-first surface for dynamical systems, uncertainty-aware modeling,
                and scientific machine learning. A quiet observatory for complex systems,
                active repositories, and the people studying what happens before collapse.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a className="nova-button nova-button-primary" href="#repositories">
                  Explore repositories
                </a>
                <a
                  className="nova-button nova-button-secondary"
                  href="https://github.com/viniruggeri"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub profile
                </a>
              </div>

              <motion.div
                className="nova-query mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-nova-mid/25 bg-nova-abyss/25 p-2 shadow-glow backdrop-blur-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
              >
                <span className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-nova-mid/10">
                  <span className="nova-spark h-4 w-4" />
                </span>
                <span className="flex-1 truncate text-sm font-light text-white/50">
                  Query: basin access, survivability, astronomy, ecological state spaces
                </span>
                <span className="hidden rounded-xl border border-nova-mid/25 bg-nova-mid/10 px-4 py-2 text-xs uppercase text-nova-light sm:inline-flex">
                  Active
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative min-h-[460px] lg:min-h-[560px]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            >
              <motion.div
                className="nova-logo-system absolute inset-0"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -10, 0], opacity: [0.88, 1, 0.88] }
                }
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="nova-orbit-wrap absolute inset-0" aria-hidden="true">
                  <div className="nova-orbit nova-orbit-a" />
                  <div className="nova-orbit nova-orbit-b" />
                  <div className="nova-orbit nova-orbit-c" />
                </div>

                <img
                  src={novaLogo}
                  alt="NOVA Research Systems"
                  className="absolute inset-x-0 top-1/2 mx-auto w-full max-w-[680px] -translate-y-1/2 rounded-[32px] object-cover opacity-90 mix-blend-screen shadow-nova"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="research" className="relative px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Research coordinates"
              title="Three signals organize the work."
              body="The landing now reads as a research index: concise framing, durable links, and a clear path from identity to active systems."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {researchSignals.map((signal, index) => (
                <motion.article
                  key={signal.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                >
                  <p className="text-xs uppercase text-nova-mid">Signal {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-5 text-xl font-light">{signal.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{signal.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="repositories" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Active repositories"
              title="Research systems with the NOVA name."
              body="Each repository now has a stable entry point from the landing, with copy tied to the actual research intent."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {researchProjects.map((project, index) => (
                <ProjectCard key={project.href} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="people" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="People"
              title="Built by people obsessed with structure before collapse."
              body="NOVA is intentionally small: mathematical intuition, scientific machine learning, and systems engineering moving around the same questions."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {people.map((person, index) => (
                <motion.div
                  key={person.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <p className="text-xs uppercase text-nova-mid">{person.role}</p>
                  <a
                    className="mt-5 inline-flex text-2xl font-light text-white transition hover:text-nova-light"
                    href={person.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {person.name}
                  </a>
                  <p className="mt-4 text-sm leading-7 text-white/60">{person.body}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {person.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs uppercase text-white/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        </main>

        <footer className="border-t border-white/10 px-5 py-8 text-sm text-white/40 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>&copy; 2026 NOVA Research Systems</span>
            <span>Sao Paulo, SP, Brasil</span>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

function SectionHeading({ label, title, body }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-medium uppercase text-nova-mid">{label}</p>
      <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/60">{body}</p>
    </div>
  );
}
