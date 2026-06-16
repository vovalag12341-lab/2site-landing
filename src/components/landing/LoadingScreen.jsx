import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [animationPhase, setAnimationPhase] = useState("drawing"); // drawing | sparkle | fadeout

  useEffect(() => {
    // Drawing animation: 1.5s
    const drawTimer = setTimeout(() => setAnimationPhase("sparkle"), 1500);
    // Sparkle + glow: 0.3s
    const sparkleTimer = setTimeout(() => setAnimationPhase("fadeout"), 1800);
    // Fade out: 0.7s, then done
    const doneTimer = setTimeout(onDone, 2500);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(sparkleTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  const opacity = animationPhase === "fadeout" ? 0 : 1;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #faf9ff 0%, #f3f0ff 50%, #f8f5ff 100%)",
        opacity,
        transition: animationPhase === "fadeout" ? "opacity 0.7s ease" : "none",
        pointerEvents: animationPhase === "fadeout" ? "none" : "all",
      }}
    >
      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 45%, rgba(124,58,237,0.1) 0%, rgba(168,85,247,0.05) 40%, transparent 80%)",
        }}
      />

      {/* SVG with brush-stroke animation */}
      <svg
        width="380"
        height="180"
        viewBox="0 0 380 180"
        className="relative z-10"
        style={{ maxWidth: "80vw", height: "auto" }}
      >
        <defs>
          {/* Gradient for "2" */}
          <linearGradient id="gradientTwo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="60%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Brush/marker for drawing animation */}
          <circle id="brushMarker" cx="0" cy="0" r="8" fill="url(#gradientTwo)" opacity="0.8" />

          {/* Glow filter for sparkle */}
          <filter id="sparkleGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Background sparkle particles (hidden by default, shown in sparkle phase) */}
        {animationPhase === "sparkle" &&
          Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx={80 + Math.random() * 240}
              cy={60 + Math.random() * 60}
              r={Math.random() * 2 + 1}
              fill={["#7c3aed", "#a855f7", "#ec4899", "#6366f1"][i % 4]}
              opacity={0.6}
              filter="url(#sparkleGlow)"
              style={{
                animation: `sparkleOut 0.4s ease-out forwards`,
              }}
            />
          ))}

        {/* "2" text — drawn with stroke animation */}
        <text
          x="60"
          y="110"
          fontSize="120"
          fontWeight="900"
          fontFamily="'Heebo', sans-serif"
          fill="url(#gradientTwo)"
          style={{
            opacity: animationPhase === "drawing" ? 1 : 0.9,
            transition: "opacity 0.3s ease",
            paintOrder: "stroke",
            stroke: "url(#gradientTwo)",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            filter: "drop-shadow(0 4px 12px rgba(124,58,237,0.25))",
          }}
        >
          2
        </text>

        {/* "site" text — drawn with stroke animation */}
        <text
          x="180"
          y="110"
          fontSize="120"
          fontWeight="900"
          fontFamily="'Heebo', sans-serif"
          fill="#1f2937"
          style={{
            opacity: animationPhase === "drawing" ? 1 : 0.9,
            transition: "opacity 0.3s ease",
            paintOrder: "stroke",
            stroke: "rgba(31,41,55,0.3)",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
          }}
        >
          site
        </text>

        {/* Animated drawing underline */}
        <line
          x1="45"
          y1="125"
          x2="315"
          y2="125"
          strokeWidth="4"
          stroke="url(#gradientTwo)"
          strokeLinecap="round"
          style={{
            opacity: animationPhase === "drawing" ? 1 : 0,
            transition: animationPhase === "sparkle" ? "opacity 0.3s ease" : "none",
            animation:
              animationPhase === "drawing"
                ? "underlineReveal 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
                : "none",
            filter: "drop-shadow(0 2px 6px rgba(124,58,237,0.2))",
          }}
        />
      </svg>

      {/* Glow aura behind text */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "320px",
          height: "160px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(236,72,153,0.15) 50%, transparent 100%)",
          filter: "blur(40px)",
          opacity: animationPhase === "drawing" ? 1 : animationPhase === "sparkle" ? 1.2 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 5,
        }}
      />

      {/* CSS animations */}
      <style>{`
        @keyframes underlineReveal {
          from {
            stroke-dasharray: 270;
            stroke-dashoffset: 270;
          }
          to {
            stroke-dasharray: 270;
            stroke-dashoffset: 0;
          }
        }

        @keyframes sparkleOut {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.3);
          }
        }

        @media (max-width: 640px) {
          svg {
            max-width: 80vw;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}