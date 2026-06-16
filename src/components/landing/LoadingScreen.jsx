import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Drawing: 1.4s, sparkle: 0.3s, fade: 0.45s = total ~2.15s
    const doneTimer = setTimeout(() => {
      setDone(true);
      setTimeout(onDone, 450); // Let fade out complete
    }, 1700);

    return () => clearTimeout(doneTimer);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center transition-all duration-[450ms] ease-out ${
        done ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
      }`}
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(109, 53, 255, 0.14), transparent 35%),
          radial-gradient(circle at 70% 60%, rgba(255, 79, 195, 0.12), transparent 35%),
          #fbfaff
        `,
      }}
    >
      <svg
        width="320"
        height="140"
        viewBox="0 0 320 140"
        className="relative z-10"
        style={{ maxWidth: "80vw", height: "auto" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for "2" */}
          <linearGradient id="gradTwo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Text "2" - drawn with stroke */}
        <text
          x="50"
          y="100"
          fontSize="88"
          fontWeight="900"
          fontFamily="'Heebo', sans-serif"
          textAnchor="middle"
          fill="none"
          stroke="url(#gradTwo)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          style={{
            animation: "drawLogo 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            filter: "drop-shadow(0 2px 8px rgba(124, 58, 237, 0.25))",
          }}
        >
          2
        </text>

        {/* Text "site" - drawn with stroke */}
        <text
          x="180"
          y="100"
          fontSize="88"
          fontWeight="900"
          fontFamily="'Heebo', sans-serif"
          textAnchor="middle"
          fill="none"
          stroke="#1f2937"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="500"
          strokeDashoffset="500"
          style={{
            animation: "drawLogo 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.1s",
            filter: "drop-shadow(0 1px 4px rgba(0, 0, 0, 0.15))",
          }}
        >
          site
        </text>

        {/* Brush cursor - small circle that moves along */}
        <circle
          cx="10"
          cy="100"
          r="6"
          fill="url(#gradTwo)"
          opacity="0.7"
          filter="url(#glow)"
          style={{
            animation: "brushCursor 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.05s",
          }}
        />
      </svg>

      {/* Sparkle particles - appear after drawing */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          opacity: done ? 0 : 1,
          animation: "sparkleGlow 0.3s ease-out 1.4s forwards",
        }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={160 + (Math.random() - 0.5) * 200}
            cy={70 + (Math.random() - 0.5) * 100}
            r={Math.random() * 2 + 1}
            fill={["#7c3aed", "#a855f7", "#ec4899", "#6366f1"][i % 4]}
            style={{
              animation: `sparkleOut 0.5s ease-out 1.4s forwards`,
            }}
          />
        ))}
      </svg>

      <style>{`
        @keyframes drawLogo {
          from {
            stroke-dashoffset: var(--offset);
            opacity: 1;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        text[style*="drawLogo"] {
          --offset: 500;
        }

        text:nth-of-type(1)[style*="drawLogo"] {
          --offset: 300;
        }

        @keyframes brushCursor {
          0% {
            transform: translateX(-100px) translateY(0) rotate(-15deg);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(200px) translateY(-20px) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes sparkleGlow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes sparkleOut {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(
              calc((var(--i, 0) - 3) * 40px),
              calc((var(--i, 0) % 2 - 0.5) * 60px)
            )
            scale(0.2);
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