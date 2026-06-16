import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "מה כלול במחיר החודשי?",
    a: "אחסון מהיר, SSL, גיבויים שוטפים, עדכוני WordPress ופלאגינים, תמיכה טכנית ושינויים שוטפים — הכל בתשלום אחד קבוע.",
  },
  {
    q: "האם האתר באמת שלי?",
    a: "כן. האתר, הדומיין והתוכן שייכים לך לחלוטין. אם תחליט לעבור לספק אחר — תקבל העברה מסודרת.",
  },
  {
    q: "כמה זמן לוקח להקים אתר?",
    a: "בדרך כלל 7–14 ימי עסקים מרגע אישור העיצוב. תלוי במורכבות ובמהירות האישורים מצדך.",
  },
  {
    q: "האם אפשר לשדרג מסלול בהמשך?",
    a: "בהחלט. אפשר לשדרג בכל עת. לא צריך להתחיל מאפס — מרחיבים את האתר הקיים.",
  },
  {
    q: "האם האתר מתאים לפרסום ממומן?",
    a: "כן, זה חלק מרכזי בחשיבה שלנו כבר מהאפיון. דפי הנחיתה מוכנים לקמפיינים ב-Meta וגוגל.",
  },
  {
    q: "האם אתם מתחזקים את האתר אחרי העלייה לאוויר?",
    a: "זה בדיוק המודל שלנו. התחזוקה, העדכונים, השינויים וה-support — כלולים בחבילה החודשית.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-5" style={{ background: "linear-gradient(180deg, #f3f0ff 0%, #f8f7ff 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
            שאלות נפוצות
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            יש לך <span className="brand-gradient-text">שאלות?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                border: open === i ? "1px solid rgba(124,58,237,0.35)" : "1px solid rgba(124,58,237,0.1)",
                background: open === i ? "rgba(124,58,237,0.04)" : "#ffffff",
                boxShadow: "0 2px 12px rgba(124,58,237,0.04)",
              }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right gap-4">
                <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">{faq.q}</span>
                <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: open === i ? "linear-gradient(135deg,#7c3aed,#ec4899)" : "rgba(124,58,237,0.12)" }}>
                  {open === i
                    ? <Minus size={12} className="text-white" />
                    : <Plus size={12} style={{ color: "#a78bfa" }} />}
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}