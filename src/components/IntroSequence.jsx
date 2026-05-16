import { motion } from "framer-motion";

export default function IntroSequence({ onComplete, reducedMotion }) {
  if (reducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#020617]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 4.8, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* 1. Atmospheric Background Glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none mix-blend-screen"
        style={{
          width: "clamp(300px, 60vw, 800px)",
          height: "clamp(300px, 60vw, 800px)",
          background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, rgba(2,6,23,0) 70%)",
          filter: "blur(clamp(30px, 5vw, 80px))",
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />

      {/* 2. Runtime Orbital Ring & Flare */}
      <motion.div
        className="relative flex items-center justify-center aspect-square"
        style={{ fontSize: "clamp(150px, 30vmin, 350px)", width: "1em", height: "1em" }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        {/* Minimal SVG Geometry - Clean Orbital Ring */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-full h-full overflow-visible"
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="orbitalGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" /> {/* dark sky */}
              <stop offset="50%" stopColor="#38bdf8" /> {/* base sky */}
              <stop offset="100%" stopColor="#bae6fd" /> {/* light sky */}
            </linearGradient>
            <filter id="orbitalBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>

          {/* Blurred Outer Atmosphere of the Ring */}
          <motion.path
            d="M 112 21 A 80 80 0 1 1 88 21"
            fill="none"
            stroke="url(#orbitalGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#orbitalBlur)"
            className="opacity-50"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />

          {/* Sharp Inner Geometry */}
          <motion.path
            d="M 112 21 A 80 80 0 1 1 88 21"
            fill="none"
            stroke="url(#orbitalGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </motion.svg>

        {/* Procedural Singularity Flare (CSS + Motion) */}
        <motion.div
          className="absolute pointer-events-none flex items-center justify-center mix-blend-screen"
          style={{ top: "10.5%", left: "50%" }}
          initial={{ opacity: 0, scale: 0.5, filter: "blur(0.1em)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 4, delay: 1.0, ease: "easeOut" }}
        >
          {/* Atmospheric haze (large smooth falloff radius) */}
          <div className="absolute w-[2em] h-[2em] rounded-full opacity-60"
               style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, rgba(2,6,23,0) 60%)", filter: "blur(0.15em)" }} />
          
          {/* Cyan/ice-blue spectral diffusion */}
          <div className="absolute w-[0.8em] h-[0.8em] rounded-full opacity-80"
               style={{ background: "radial-gradient(circle, rgba(56,189,248,0.25) 0%, rgba(14,165,233,0.05) 50%, transparent 70%)", filter: "blur(0.06em)" }} />
               
          {/* Asymmetrical bloom expansion (energy spray toward upper-right) */}
          <div className="absolute w-[1em] h-[0.4em]"
               style={{ background: "radial-gradient(ellipse at center, rgba(186,230,253,0.15) 0%, transparent 60%)", filter: "blur(0.06em)", transform: "translate(0.2em, -0.15em) rotate(-35deg)" }} />

          {/* Core intense bright spot (white-hot singularity) */}
          <div className="absolute w-[0.015em] h-[0.015em] bg-white rounded-full"
               style={{ boxShadow: "0 0 0.06em 0.015em rgba(255,255,255,1), 0 0 0.12em 0.03em rgba(186,230,253,0.7)" }} />
          
          {/* Horizontal cinematic soft arc/flare */}
          <div className="absolute w-[1.1em] h-[0.005em] bg-gradient-to-r from-transparent via-cyan-100 to-transparent opacity-40"
               style={{ filter: "blur(0.005em)" }} />
          <div className="absolute w-[0.4em] h-[0.01em] bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
               style={{ filter: "blur(0.0025em)" }} />
          
          {/* Vertical soft astrophysical bloom */}
          <div className="absolute h-[0.7em] w-[0.005em] bg-gradient-to-b from-transparent via-sky-200 to-transparent opacity-30"
               style={{ filter: "blur(0.01em)" }} />
        </motion.div>
      </motion.div>

      {/* 3. Typography */}
      <motion.div
        className="flex flex-col items-center mt-[clamp(2rem,6vw,4rem)]"
        initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2.5, delay: 1.8, ease: "easeOut" }}
      >
        <h1 className="text-[clamp(1.75rem,5vw,3.5rem)] font-extralight tracking-[0.45em] text-white/95 uppercase ml-[0.45em]">
          NOVA
        </h1>
        <p className="mt-[clamp(0.75rem,2vw,1.25rem)] text-[clamp(0.6rem,1.5vw,0.875rem)] font-light tracking-[0.65em] text-sky-200/60 uppercase ml-[0.65em]">
          Research Systems
        </p>
      </motion.div>
    </motion.div>
  );
}
