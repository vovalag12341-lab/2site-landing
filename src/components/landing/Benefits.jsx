const benefits = [
  {
    icon: "🔗",
    title: "הכל במקום אחד",
    desc: "אפיון, עיצוב, פיתוח, תחזוקה ושיווק — בלי לרוץ בין ספקים שונים.",
  },
  {
    icon: "📊",
    title: "ניסיון עם מאות פרויקטים",
    desc: "194+ אתרים שבנינו לעסקים מכל הענפים — עם תוצאות מדידות.",
  },
  {
    icon: "🎯",
    title: "ממוקד בלידים, לא רק עיצוב",
    desc: "מתאים לעסקים שרוצים לידים ולא רק אתר יפה. חשיבה שיווקית בכל שלב.",
  },
  {
    icon: "🤝",
    title: "צוות שממשיך ללוות",
    desc: "אחרי העלייה לאוויר אנחנו עדיין כאן — שינויים, עדכונים, שאלות.",
  },
  {
    icon: "⚙️",
    title: "WordPress גמיש",
    desc: "פלטפורמה נוחה לניהול עצמי, עם אפשרות שנמשיך לנהל עבורך.",
  },
  {
    icon: "💡",
    title: "חשיבה שיווקית מהיום הראשון",
    desc: "כבר באפיון חושבים על מבנה, מסר, קריאה לפעולה והכנה לקמפיינים.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-5" style={{ background: "linear-gradient(180deg, #f3f0ff 0%, #f8f7ff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
            למה 2site
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            למה עסקים <span className="brand-gradient-text">בוחרים בנו</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(124,58,237,0.1)",
                boxShadow: "0 2px 16px rgba(124,58,237,0.05)",
              }}>
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-gray-900 font-bold text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}