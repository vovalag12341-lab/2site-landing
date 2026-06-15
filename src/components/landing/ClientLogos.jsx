const logos = [
  { name: "Shlomo", sub: "GROUP" },
  { name: "תלפיות", sub: null },
  { name: "Albar", sub: null },
  { name: "בית הפנקייק", sub: "המקורי" },
  { name: "Cardcom", sub: null },
  { name: "Dive", sub: "TOURS" },
  { name: "Homely", sub: null },
  { name: "Elysian", sub: "Softech" },
  { name: "מופון", sub: "ישראל" },
  { name: "ד״ר גילה", sub: "רוזן" },
  { name: "Top Safe", sub: null },
  { name: "Living", sub: "Group" },
  { name: "דרך", sub: "השף" },
  { name: "Global Diving", sub: "Tours" },
];

const ITEM_W = 140;
const SET_WIDTH = logos.length * ITEM_W;

function LogoItem({ logo }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center logo-item"
      style={{ width: `${ITEM_W}px`, cursor: "default" }}
    >
      <div
        className="px-4 py-2.5 rounded-xl text-center transition-all duration-300"
        style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="text-gray-400 font-bold leading-tight" style={{ fontSize: "13px", letterSpacing: "0.03em" }}>
          {logo.name}
        </div>
        {logo.sub && (
          <div className="text-gray-600 font-medium leading-tight" style={{ fontSize: "10px", letterSpacing: "0.05em" }}>
            {logo.sub}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  // Triple the array for truly gapless loop
  const tripled = [...logos, ...logos, ...logos];

  return (
    <section className="py-14" style={{ background: "#07070f", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
        <p className="text-gray-500 text-xs tracking-[0.25em] uppercase font-medium">
          לקוחות מובילים שבחרו ב־2site
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="client-logos-track"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "max-content",
            willChange: "transform",
            userSelect: "none",
          }}
        >
          {tripled.map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>

      <style>{`
        .client-logos-track {
          animation: clientLogosScroll ${logos.length * 2.2}s linear infinite;
        }
        .client-logos-track:hover {
          animation-play-state: paused;
        }
        @keyframes clientLogosScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${SET_WIDTH + 16 * logos.length}px); }
        }
        .logo-item > div:hover {
          border-color: rgba(124,58,237,0.3) !important;
          background: rgba(124,58,237,0.06) !important;
        }
        .logo-item > div:hover .text-gray-400 {
          color: #e5e7eb !important;
        }
      `}</style>
    </section>
  );
}