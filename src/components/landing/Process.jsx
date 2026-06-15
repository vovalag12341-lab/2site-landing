const steps = [
  {
    num: "01",
    title: "שיחת אפיון קצרה",
    desc: "מבינים את העסק, הקהל, המסר והמטרות. שיחה של 20 דקות שמונחת את הכיוון.",
  },
  {
    num: "02",
    title: "בחירת מסלול והתאמת מבנה",
    desc: "מתאימים את החבילה הנכונה ובונים מפת האתר — עמודים, מבנה, תוכן ראשוני.",
  },
  {
    num: "03",
    title: "עיצוב ובנייה ב־WordPress",
    desc: "מעצבים ובונים את האתר. אתה מאשר, אנחנו מתקנים — עד שהכל מושלם.",
  },
  {
    num: "04",
    title: "עלייה לאוויר + תחזוקה וליווי",
    desc: "מעלים את האתר, מחברים דומיין, מגדירים analytics — ואנחנו ממשיכים ללוות.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-5" style={{ background: "#07070f" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
            תהליך עבודה
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            איך <span className="brand-gradient-text">זה עובד?</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-[26px] top-8 bottom-8 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #7c3aed, rgba(236,72,153,0.3), transparent)" }} />

          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full flex items-center justify-center font-black text-sm relative z-10"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)"
                      : "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: i === 0 ? "#fff" : "#a78bfa",
                    boxShadow: i === 0 ? "0 0 20px rgba(124,58,237,0.4)" : "none",
                  }}>
                  {s.num}
                </div>
                <div className="flex-1 rounded-2xl p-5 card-hover"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.08)" }}>
                  <h3 className="text-white font-bold text-base mb-1.5">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}