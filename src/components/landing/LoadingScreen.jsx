import { useEffect, useState } from "react";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const steps = [15, 35, 55, 72, 88, 100];
    let i = 0;
    const iv = setInterval(() => {
      if (i < steps.length) { setProgress(steps[i]); i++; }
      else {
        clearInterval(iv);
        setTimeout(() => { setFadeOut(true); setTimeout(onDone, 700); }, 400);
      }
    }, 340);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "#03020a",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Logo with pulse glow */}
      <div className="relative mb-8 text-center">
        <img
          src="https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/6e6f6d011_2site_logo_transparent_cropped.png"
          alt="2site"
          className="loading-pulse select-none"
          style={{ width: "220px", height: "auto", objectFit: "contain" }}
          draggable={false}
        />
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-30 pulse-glow pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(236,72,153,0.3) 60%, transparent 80%)",
            transform: "scale(1.5)",
          }}
        />
      </div>

      <p
        className="text-gray-400 text-sm md:text-base mb-10 tracking-wide"
        style={{ fontFamily: "'Heebo', sans-serif" }}
      >
        מכינים לך אתר שמוכר...
      </p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #7c3aed, #a855f7, #ec4899)",
          }}
        />
      </div>
    </div>
  );
}