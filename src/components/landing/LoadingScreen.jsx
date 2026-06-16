import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [animationDone, setAnimationDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Drawing animation takes ~2s, then hold for 0.4s, then fade out
    const drawTimer = setTimeout(() => setAnimationDone(true), 1950);
    const fadeTimer = setTimeout(() => setFadeOut(true), 2350);
    const doneTimer = setTimeout(onDone, 3050);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #faf9ff 0%, #f3f0ff 50%, #f8f5ff 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(124,58,237,0.12) 0%, rgba(168,85,247,0.06) 30%, transparent 70%)",
        }}
      />

      {/* Subtle particles/dots background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.4 }}
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx={`${20 + i * 8}%`}
            cy={`${15 + (i % 3) * 25}%`}
            r={Math.random() * 1.5 + 0.5}
            fill={["#7c3aed", "#a855f7", "#ec4899", "#6366f1"][i % 4]}
            opacity={Math.random() * 0.4 + 0.1}
            filter="url(#glow)"
          />
        ))}
      </svg>

      {/* Logo with drawing animation */}
      <div className="relative mb-8 text-center z-10">
        <svg
          width="240"
          height="140"
          viewBox="0 0 240 140"
          className="mx-auto"
          style={{ maxWidth: "80vw", height: "auto" }}
        >
          <defs>
            <linearGradient id="gradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="gradientFullBrand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="40%" stopColor="#a855f7" />
              <stop offset="70%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <filter id="shadowGlow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* "2" text - animated draw */}
          <text
            x="40"
            y="70"
            fontSize="72"
            fontWeight="900"
            fontFamily="'Heebo', sans-serif"
            fill="url(#gradientPurple)"
            style={{
              opacity: animationDone ? 1 : 0,
              transition: "opacity 0.6s ease 0.2s",
              filter: "drop-shadow(0 2px 8px rgba(124,58,237,0.2))",
            }}
          >
            2
          </text>

          {/* "site" text - animated draw */}
          <text
            x="95"
            y="70"
            fontSize="72"
            fontWeight="900"
            fontFamily="'Heebo', sans-serif"
            fill="#1f2937"
            style={{
              opacity: animationDone ? 1 : 0,
              transition: "opacity 0.6s ease 0.4s",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
            }}
          >
            site
          </text>

          {/* Underline with gradient - animated */}
          <line
            x1="40"
            y1="85"
            x2="200"
            y2="85"
            strokeWidth="3"
            stroke="url(#gradientFullBrand)"
            strokeLinecap="round"
            style={{
              opacity: animationDone ? 1 : 0,
              transition: "opacity 0.4s ease 0.6s",
              filter: "drop-shadow(0 1px 4px rgba(124,58,237,0.15))",
            }}
          />

          {/* Tagline - animated */}
          <text
            x="120"
            y="125"
            fontSize="11"
            fontWeight="600"
            fontFamily="'Heebo', sans-serif"
            fill="#7c3aed"
            textAnchor="middle"
            letterSpacing="0.05em"
            style={{
              opacity: animationDone ? 1 : 0,
              transition: "opacity 0.4s ease 0.8s",
            }}
          >
            מעצבים לך עתיד
          </text>
        </svg>

        {/* Glow effect behind logo */}
        <div
          className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.12) 50%, transparent 80%)",
            transform: "scale(1.8)",
            opacity: animationDone ? 1 : 0.3,
            transition: "opacity 0.6s ease 0.5s",
          }}
        />
      </div>

      {/* Subtle loading text */}
      <p
        className="text-center text-xs tracking-wide font-medium"
        style={{
          color: "#7c3aed",
          opacity: animationDone ? 0 : 0.7,
          transition: "opacity 0.4s ease 1.5s",
        }}
      >
        מכינים לך אתר שמוכר...
      </p>
    </div>
  );
}