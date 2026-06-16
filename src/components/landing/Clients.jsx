const clients = [
  "בית הפנקייק המקורי",
  "Elysian Softech",
  "Nadlan FL",
  "ד״ר גילה רוזן",
  "מופון ישראל",
  "הומלי",
  "Top Safe",
  "Living Group",
  "דרך השף",
  "Global Diving Tours",
];

export default function Clients() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-14 overflow-hidden relative" style={{
      background: "linear-gradient(135deg, #faf9ff 0%, #f3f0ff 50%, #f8f5ff 100%)",
      borderTop: "1px solid rgba(124,58,237,0.12)",
      borderBottom: "1px solid rgba(124,58,237,0.12)",
      boxShadow: "0 2px 24px rgba(124,58,237,0.06)",
    }}>
      {/* top gradient line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent 0%, #7c3aed 30%, #a855f7 50%, #ec4899 70%, transparent 100%)", opacity: 0.5 }} />
      <div className="max-w-6xl mx-auto px-5 mb-7 text-center">
        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase font-semibold">
          מותגים ועסקים שבחרו ב־2site
        </p>
      </div>
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track gap-10 items-center py-1">
          {doubled.map((name, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }} />
              <span
                className="font-semibold text-sm whitespace-nowrap cursor-default select-none transition-colors"
                style={{ color: "#374151" }}
                onMouseEnter={e => e.target.style.color = "#7c3aed"}
                onMouseLeave={e => e.target.style.color = "#374151"}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* bottom gradient line */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, #6366f1 30%, #a855f7 50%, #ec4899 70%, transparent 100%)", opacity: 0.3 }} />
    </section>
  );
}