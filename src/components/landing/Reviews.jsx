import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "ענת פינקו",
    text: "עובדת עם 2site גם לצורך אישי וגם במסגרת החברה שבה אני עובדת. חברה שנותנת מענה מקצועי, מקיף וזמינות גבוהה.",
    stars: 5,
    initials: "ע",
    color: "#7c3aed",
  },
  {
    name: "שרון לוי שלום",
    text: "חברה מצויינת, שירות אישי, מהיר, יעיל ולא מתפשר על איכות.",
    stars: 5,
    initials: "ש",
    color: "#a855f7",
  },
  {
    name: "Itay Margolin",
    text: "2site מקצועיים ואדיבים, החל מתהליך ההיכרות ועד מסירת האתר. היו קשובים לצרכים וזמינים. תודה רבה על הכל.",
    stars: 5,
    initials: "I",
    color: "#6366f1",
  },
  {
    name: "לינה אמין",
    text: "חוויה מעולה! שירות מהיר, יחס אישי וסבלנות אין קץ. תודה על אתר מהמם.",
    stars: 5,
    initials: "ל",
    color: "#ec4899",
  },
  {
    name: "Global Diving Tours",
    text: "שירות מעולה, אתר ממיר, היה מוכן תוך ימים בודדים, ביצועים טובים גם בקמפיין. מומלץ בחום.",
    stars: 5,
    initials: "G",
    color: "#8b5cf6",
  },
  {
    name: "Sam P",
    text: "ממליץ בחום על החברה, שירות מעולה ותמיד זמינים לכל מטרה.",
    stars: 5,
    initials: "S",
    color: "#a78bfa",
  },
  {
    name: "Geila Rozen",
    text: "שמחה שמצאתי את 2site לצורך הקמת האתר וניהולו. מקצוענות בלתי מתפשרת, סבלנות ואנשים טובים.",
    stars: 5,
    initials: "G",
    color: "#c084fc",
  },
  {
    name: "מיר ויצמן",
    text: "שירות מקצועי עם זמינות גבוהה.",
    stars: 5,
    initials: "מ",
    color: "#818cf8",
  },
  {
    name: "Yossi Rosenblum",
    text: "ממליץ בחום. וובה עשה עבודה מדהימה. חברה מקצועית, יסודית והוגנת.",
    stars: 5,
    initials: "Y",
    color: "#7c3aed",
  },
];

function ReviewCard({ review }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-5 w-72"
      style={{
        background: "#0e0d1a",
        border: "1px solid rgba(124,58,237,0.12)",
      }}
    >
      {/* Google logo + stars */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xs text-gray-600 font-medium">Google</span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">"{review.text}"</p>

      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}99)` }}>
          {review.initials}
        </div>
        <div>
          <div className="text-white text-xs font-semibold">{review.name}</div>
          <div className="text-gray-600 text-xs">ביקורת מאומתת</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const quadrupled = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 overflow-hidden" style={{ background: "#07070f" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
          ביקורות Google
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          מה הלקוחות <span className="brand-gradient-text">אומרים עלינו</span>
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[0,1,2,3,4].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-white font-bold">5.0</span>
          <span className="text-gray-500 text-sm">· {reviews.length} ביקורות Google</span>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "max-content",
            willChange: "transform",
            animationPlayState: paused ? "paused" : "running",
            animation: "reviewsMarquee 1000s linear infinite",
          }}
        >
          {quadrupled.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>

      <style>{`
        @keyframes reviewsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}