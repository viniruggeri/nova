import { useState, useEffect, useRef } from "react";

const NOVA_BLUE_LIGHT = "#8FDFFF";
const NOVA_BLUE_MID = "#5BC8E8";
const NOVA_BLUE_DEEP = "#1A6FA8";
const NOVA_BLUE_ABYSS = "#0A2A40";

function NovaSparkle({ size = 64, glow = true, animate = true, delay = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      style={{
        filter: glow
          ? `drop-shadow(0 0 ${size * 0.18}px ${NOVA_BLUE_MID}) drop-shadow(0 0 ${size * 0.4}px ${NOVA_BLUE_DEEP})`
          : "none",
        animation: animate
          ? `sparklePulse 3.5s ease-in-out ${delay}s infinite`
          : "none",
      }}
    >
      <defs>
        <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFFFFF" />
          <stop offset="35%" stopColor={NOVA_BLUE_LIGHT} />
          <stop offset="70%" stopColor={NOVA_BLUE_MID} />
          <stop offset="100%" stopColor={NOVA_BLUE_DEEP} />
        </linearGradient>
      </defs>
      {/* 4-point star */}
      <path
        d="M32 2 C32 2, 35 22, 32 32 C32 32, 42 29, 62 32 C62 32, 42 35, 32 32 C32 32, 35 42, 32 62 C32 62, 29 42, 32 32 C32 32, 22 35, 2 32 C2 32, 22 29, 32 32 C32 32, 29 22, 32 2 Z"
        fill="url(#sparkleGrad)"
      />
    </svg>
  );
}

function OrbitalRing({ size = 200, delay = 0 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: `ringDraw 1.8s ease-out ${delay}s both`,
        filter: `drop-shadow(0 0 8px ${NOVA_BLUE_MID})`,
      }}
    >
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={NOVA_BLUE_LIGHT} stopOpacity="0.9" />
          <stop offset="50%" stopColor={NOVA_BLUE_MID} stopOpacity="1" />
          <stop offset="100%" stopColor={NOVA_BLUE_DEEP} stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={NOVA_BLUE_DEEP} stopOpacity="0.4" />
          <stop offset="100%" stopColor={NOVA_BLUE_MID} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {/* Main circle */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="url(#ringGrad)"
        strokeWidth="2.5"
        strokeDasharray="502"
        strokeDashoffset="0"
      />
      {/* Orbital ellipse */}
      <ellipse
        cx="100"
        cy="100"
        rx="95"
        ry="30"
        fill="none"
        stroke="url(#ringGrad2)"
        strokeWidth="2"
        transform="rotate(-15, 100, 100)"
        strokeDasharray="400"
        strokeDashoffset="0"
      />
    </svg>
  );
}

function FloatingParticle({ x, y, delay, size }) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background: NOVA_BLUE_MID,
        opacity: 0,
        animation: `particleFloat 6s ease-in-out ${delay}s infinite`,
        filter: `blur(${size * 0.3}px)`,
        pointerEvents: "none",
      }}
    />
  );
}

const particles = Array.from({ length: 18 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  size: Math.random() * 3 + 1,
}));

const projects = [
  {
    id: "HSP",
    tag: "NOVA · THEORY",
    title: "Hierarchical Sparse Priors",
    desc: "Flow Matching × Optimal Transport for neural probabilistic forecasting without explicit likelihood. Prop1 R¹ proven.",
    status: "Sprint 1 ✓  ·  pub. 2026",
  },
  {
    id: "LEXIS",
    tag: "NOVA · SYSTEMS",
    title: "Lexis Framework",
    desc: "Regime discovery in dynamical systems under uncertainty via SINDy + Koopman + BOCPD. Reading the mathematical language of complex systems.",
    status: "v1 live @ BTG",
  },
  {
    id: "SELACHIIA",
    tag: "NOVA · ECOLOGY",
    title: "Nova-Selachiia",
    desc: "Neural State Space Models for shark population dynamics with Monte Carlo sampling under partial observability.",
    status: "Active",
  },
];

export default function NovaLanding() {
  const [phase, setPhase] = useState("intro"); // intro | hero | content
  const [hoveredCard, setHoveredCard] = useState(null);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hero"), 3800);
    const t2 = setTimeout(() => setPhase("content"), 6200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      overflow: "hidden",
      position: "relative",
      color: "#fff",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@200;300;400;500&family=DM+Serif+Display:ital@0;1&display=swap');

        @keyframes sparklePulse {
          0%, 100% { opacity: 0.85; transform: scale(1) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.08) rotate(3deg); }
        }
        @keyframes ringDraw {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.7); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes particleFloat {
          0% { opacity: 0; transform: translateY(0px); }
          20% { opacity: 0.6; }
          80% { opacity: 0.3; }
          100% { opacity: 0; transform: translateY(-40px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes introSparkle {
          0% { opacity: 0; transform: scale(0.3) rotate(-20deg); }
          40% { opacity: 1; transform: scale(1.15) rotate(5deg); }
          70% { opacity: 1; transform: scale(1) rotate(0deg); }
          90% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.3); }
        }
        @keyframes introText {
          0% { opacity: 0; transform: translateY(16px); }
          30% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes contentSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes auroraShift {
          0%, 100% { opacity: 0.35; transform: scale(1) translateY(0); }
          50% { opacity: 0.55; transform: scale(1.04) translateY(-20px); }
        }
        @keyframes cardHover {
          from { transform: translateY(0); }
          to { transform: translateY(-4px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(91,200,232,0.1), inset 0 0 20px rgba(91,200,232,0.03); }
          50% { box-shadow: 0 0 40px rgba(91,200,232,0.2), inset 0 0 30px rgba(91,200,232,0.06); }
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(91,200,232,0.4) !important;
          box-shadow: 0 20px 60px rgba(91,200,232,0.12) !important;
        }
        .input-bar:focus-within {
          border-color: rgba(91,200,232,0.5) !important;
          box-shadow: 0 0 0 1px rgba(91,200,232,0.2), 0 8px 32px rgba(91,200,232,0.1) !important;
        }
      `}</style>

      {/* Aurora background */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "55%",
          background: `radial-gradient(ellipse at 50% 100%, ${NOVA_BLUE_ABYSS} 0%, rgba(26,111,168,0.18) 40%, transparent 70%)`,
          animation: "auroraShift 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "30%",
          width: "60%",
          height: "30%",
          background: `radial-gradient(ellipse at 50% 100%, rgba(91,200,232,0.08) 0%, transparent 60%)`,
          animation: "auroraShift 12s ease-in-out 2s infinite",
        }} />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* ======= INTRO PHASE ======= */}
      {phase === "intro" && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          background: "#000",
          animation: "fadeIn 0.3s ease both",
        }}>
          <div style={{ animation: "introSparkle 3.5s ease forwards" }}>
            <NovaSparkle size={80} glow animate={false} />
          </div>
          <div style={{
            textAlign: "center",
            animation: "introText 3.5s ease 0.3s forwards",
          }}>
            <div style={{
              fontSize: 11,
              letterSpacing: "0.35em",
              color: NOVA_BLUE_MID,
              fontWeight: 300,
              marginBottom: 10,
              textTransform: "uppercase",
            }}>
              NOVA RESEARCH SYSTEMS
            </div>
            <div style={{
              fontSize: 22,
              fontWeight: 200,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.02em",
            }}>
              Reading the language of dynamical systems.
            </div>
          </div>
        </div>
      )}

      {/* ======= HERO PHASE ======= */}
      {phase === "hero" && (
        <div style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          animation: "heroIn 0.6s ease both",
          background: "#000",
        }}>
          {/* Orbital logo */}
          <div style={{ position: "relative", width: 200, height: 200, marginBottom: 40 }}>
            <OrbitalRing size={200} delay={0} />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "fadeIn 0.8s ease 0.5s both",
            }}>
              <NovaSparkle size={52} glow animate delay={0.5} />
            </div>
          </div>

          <div style={{ textAlign: "center", animation: "fadeUp 0.8s ease 0.3s both" }}>
            <div style={{
              fontSize: 52,
              fontWeight: 200,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              color: "#fff",
            }}>
              NOVA
            </div>
            <div style={{
              fontSize: 13,
              letterSpacing: "0.5em",
              color: NOVA_BLUE_MID,
              fontWeight: 300,
              marginTop: 4,
            }}>
              RESEARCH SYSTEMS
            </div>
          </div>
        </div>
      )}

      {/* ======= CONTENT PHASE ======= */}
      {phase === "content" && (
        <div style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          animation: "contentSlideUp 0.8s ease both",
        }}>
          {/* Nav */}
          <nav style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 40px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            backdropFilter: "blur(12px)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <NovaSparkle size={24} glow animate delay={0} />
              <span style={{
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.18em",
                color: NOVA_BLUE_LIGHT,
              }}>NOVA</span>
              <span style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 300,
              }}>RESEARCH SYSTEMS</span>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              {["Research", "Papers", "Systems", "About"].map(item => (
                <span key={item} style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  letterSpacing: "0.12em",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  fontWeight: 300,
                }}
                  onMouseEnter={e => e.target.style.color = NOVA_BLUE_LIGHT}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </div>
          </nav>

          {/* Hero text */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 40px 40px",
            textAlign: "center",
          }}>
            <div style={{
              fontSize: 11,
              letterSpacing: "0.4em",
              color: NOVA_BLUE_MID,
              fontWeight: 300,
              marginBottom: 24,
              textTransform: "uppercase",
            }}>
              xAI · SciML · Dynamical Systems
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 200,
              lineHeight: 1.1,
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              maxWidth: 780,
            }}>
              Reading the mathematical<br />
              <span style={{
                background: `linear-gradient(135deg, ${NOVA_BLUE_LIGHT}, ${NOVA_BLUE_MID}, ${NOVA_BLUE_DEEP})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>language of complex systems</span>
            </h1>

            <p style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.42)",
              fontWeight: 300,
              maxWidth: 520,
              lineHeight: 1.7,
              margin: "0 0 48px",
            }}>
              Independent AI research at the intersection of interpretability, scientific machine learning, and uncertainty-aware dynamical systems.
            </p>

            {/* Input bar — Gemini-inspired */}
            <div className="input-bar" style={{
              width: "100%",
              maxWidth: 560,
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 999,
              padding: "14px 20px",
              transition: "all 0.3s ease",
              backdropFilter: "blur(8px)",
            }}>
              <NovaSparkle size={18} glow={false} animate={false} />
              <input
                ref={inputRef}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder="Ask NOVA a research question..."
                style={{
                  flex: 1,
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 300,
                  letterSpacing: "0.01em",
                  fontFamily: "inherit",
                }}
              />
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: inputVal
                  ? `linear-gradient(135deg, ${NOVA_BLUE_MID}, ${NOVA_BLUE_DEEP})`
                  : "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s",
                flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Project cards */}
          <div style={{
            padding: "0 40px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
          }}>
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="card-hover"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px",
                  cursor: "pointer",
                  animation: `fadeUp 0.6s ease ${0.1 * i + 0.2}s both`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle top glow */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60%",
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${NOVA_BLUE_MID}, transparent)`,
                  opacity: 0.4,
                }} />

                <div style={{
                  fontSize: 9,
                  letterSpacing: "0.3em",
                  color: NOVA_BLUE_MID,
                  fontWeight: 500,
                  marginBottom: 12,
                }}>
                  {p.tag}
                </div>
                <div style={{
                  fontSize: 15,
                  fontWeight: 400,
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.38)",
                  lineHeight: 1.65,
                  fontWeight: 300,
                  marginBottom: 16,
                }}>
                  {p.desc}
                </div>
                <div style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: "rgba(91,200,232,0.6)",
                  fontWeight: 400,
                }}>
                  {p.status}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            textAlign: "center",
            padding: "20px 40px 32px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.18em",
            fontWeight: 300,
          }}>
            NOVA RESEARCH SYSTEMS · SÃO PAULO · {new Date().getFullYear()}
          </div>
        </div>
      )}
    </div>
  );
}
