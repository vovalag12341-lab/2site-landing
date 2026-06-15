const steps = [
  {
    num: "01",
    title: "פגישת ייעוץ חינם",
    desc: "מבינים את העסק, היעדים והקהל שלך. קובעים יעדים ברורים ומגדירים את המסר המרכזי.",
    duration: "יום 1",
  },
  {
    num: "02",
    title: "עיצוב ואישור",
    desc: "מציגים לך מוקאפ מלא של האתר. שינויים ללא הגבלה עד שאתה מאושר 100%.",
    duration: "ימים 2–5",
  },
  {
    num: "03",
    title: "פיתוח ובנייה",
    desc: "בונים את האתר על WordPress עם כל הפלאגינים, תוכן ואינטגרציות.",
    duration: "ימים 6–12",
  },
  {
    num: "04",
    title: "השקה ומעקב",
    desc: "מעלים את האתר, מחברים דומיין, מגדירים גוגל אנליטיקס ו-Search Console.",
    duration: "יום 13",
  },
  {
    num: "05",
    title: "תמיכה שוטפת",
    desc: "ניהול חודשי מלא — עדכונים, גיבויים, שינויים ותמיכה. אתה מתמקד בעסק.",
    duration: "שוטף",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6" style={{ background: "#050505" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            תהליך העבודה
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            איך זה <span className="gradient-text">עובד?</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute right-[27px] top-4 bottom-4 w-[1px] hidden md:block"
            style={{ background: "linear-gradient(to bottom, #D4A017, transparent)" }}
          />

          <div className="space-y-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 md:gap-8 items-start">
                {/* Step number */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-black text-sm relative z-10"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #D4A017, #F5D06E)"
                      : "rgba(212,160,23,0.1)",
                    border: "1px solid rgba(212,160,23,0.3)",
                    color: i === 0 ? "#000" : "#D4A017",
                  }}
                >
                  {s.num}
                </div>

                <div
                  className="flex-1 rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-lg">{s.title}</h3>
                    <span className="text-yellow-500/60 text-xs font-mono">{s.duration}</span>
                  </div>
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