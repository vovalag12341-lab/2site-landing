import { useState } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const reviews = [
  {
    name: "דנה לוי",
    role: "בעלת קליניקה",
    text: "2site שינו לי את החיים. האתר שלי נראה מדהים, ה-SEO עלה פלאים ואני מקבלת פניות חדשות כל יום. השירות מקצועי ומהיר.",
    stars: 5,
    avatar: "ד",
  },
  {
    name: "יוסי כהן",
    role: "עורך דין",
    text: "ניסיתי שלושה ספקים לפני 2site. ההבדל עצום — הם מגיבים מהר, מבינים מה אני צריך ומספקים תוצאות אמיתיות.",
    stars: 5,
    avatar: "י",
  },
  {
    name: "מיכל ברק",
    role: "מסעדנית",
    text: "האתר שקיבלתי עקף את כל הציפיות. התפריט האונליין, מערכת ההזמנות — הכל עובד חלק. ממליצה בחום.",
    stars: 5,
    avatar: "מ",
  },
  {
    name: "אבי שמיר",
    role: "יזם נדל\"ן",
    text: "שילמתי פחות ממה שציפיתי וקיבלתי הרבה יותר. האתר מושך לידים, וצוות התמיכה תמיד זמין.",
    stars: 5,
    avatar: "א",
  },
  {
    name: "נועה גרין",
    role: "מעצבת אופנה",
    text: "האתר שלי הוא הפנים של המותג שלי. 2site הבינו את הוויזיה שלי ויצרו משהו שאני גאה להראות לכל לקוח.",
    stars: 5,
    avatar: "נ",
  },
];

export default function Reviews() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === reviews.length - 1 ? 0 : i + 1));

  const r = reviews[idx];

  return (
    <section id="reviews" className="py-24 px-6" style={{ background: "#050505" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            מה לקוחות אומרים
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            <span className="gradient-text">150+</span> עסקים מרוצים
          </h2>
        </div>

        <div
          className="relative rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0d0d0d 100%)",
            border: "1px solid rgba(212,160,23,0.15)",
          }}
        >
          <Quote className="text-yellow-500/20 mx-auto mb-6" size={48} />

          <p className="text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            "{r.text}"
          </p>

          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: r.stars }).map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-sm"
              style={{ background: "linear-gradient(135deg, #D4A017, #F5D06E)" }}
            >
              {r.avatar}
            </div>
            <div className="text-right">
              <div className="text-white font-bold text-sm">{r.name}</div>
              <div className="text-gray-500 text-xs">{r.role}</div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? "24px" : "8px",
                  height: "8px",
                  background: i === idx ? "#D4A017" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Arrow nav */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 hover:text-yellow-400 transition-all"
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 hover:text-yellow-400 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}