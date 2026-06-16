const logos = [
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/2f1c9ef40_image.png", name: "שלמה" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/dbb5f351b_image.png", name: "Dive Assure" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/fa3f62b92_image.png", name: "בית הפנקייק" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/b03fde9da_image.png", name: "אלבר" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/24ffd08b2_image.png", name: "Albar logo 2" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/8f781817c_image.png", name: "Logo 4" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/4f6b97708_image.png", name: "Logo 5" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/d9c281d62_image.png", name: "Logo 8" },
  // text-only logos
  { name: "תלפיות", sub: null },
  { name: "Cardcom", sub: null },
  { name: "Homely", sub: null },
  { name: "Elysian", sub: "Softech" },
  { name: "מופון", sub: "ישראל" },
  { name: "ד״ר גילה", sub: "רוזן" },
  { name: "Top Safe", sub: null },
  { name: "Living", sub: "Group" },
  { name: "דרך", sub: "השף" },
  { name: "Global Diving", sub: "Tours" },
];

function LogoItem({ logo }) {
  if (logo.img) {
    return (
      <div
        className="flex-shrink-0 flex items-center justify-center logo-item-img"
        style={{ width: "400px", height: "200px" }}
      >
        <img
          src={logo.img}
          alt={logo.name}
          draggable={false}
          style={{
            maxHeight: "180px",
            maxWidth: "380px",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            opacity: 0.9,
            filter: "none",
            transition: "opacity 0.3s ease",
            userSelect: "none",
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 flex flex-col items-center justify-center logo-item-text"
      style={{ width: "400px", height: "200px", cursor: "default" }}
    >
      <div
        className="px-4 py-2 rounded-xl text-center transition-all duration-300"
        style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
      >
        <div className="text-gray-400 font-bold leading-tight" style={{ fontSize: "24px", letterSpacing: "0.03em" }}>
          {logo.name}
        </div>
        {logo.sub && (
          <div className="text-gray-600 font-medium leading-tight" style={{ fontSize: "20px", letterSpacing: "0.05em" }}>
            {logo.sub}
          </div>
        )}
      </div>
    </div>
  );
}

const GAP = 32;
const ITEM_W = 400 + GAP;
const SET_WIDTH = logos.length * ITEM_W;

export default function ClientLogos() {
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
            gap: `${GAP}px`,
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
          animation: clientLogosScroll 5s linear infinite;
        }
        .client-logos-track:hover {
          animation-play-state: paused;
        }
        @keyframes clientLogosScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${SET_WIDTH}px); }
        }
        .logo-item-img:hover img {
          opacity: 1 !important;
        }
        .logo-item-text > div:hover {
          border-color: rgba(124,58,237,0.3) !important;
          background: rgba(124,58,237,0.06) !important;
        }
        .logo-item-text > div:hover .text-gray-400 {
          color: #e5e7eb !important;
        }
      `}</style>
    </section>
  );
}