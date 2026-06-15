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
    <section className="py-16 overflow-hidden" style={{ background: "#07070f", borderTop: "1px solid rgba(124,58,237,0.08)", borderBottom: "1px solid rgba(124,58,237,0.08)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
        <p className="text-gray-600 text-xs tracking-[0.3em] uppercase font-medium">
          מותגים ועסקים שבחרו ב־2site
        </p>
      </div>
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)" }}>
        <div className="marquee-track gap-10 items-center py-1">
          {doubled.map((name, i) => (
            <div key={i} className="flex-shrink-0 flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(124,58,237,0.5)" }} />
              <span className="text-gray-500 font-semibold text-sm hover:text-gray-300 transition-colors whitespace-nowrap cursor-default select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}