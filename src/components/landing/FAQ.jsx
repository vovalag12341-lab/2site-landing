import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "האם אני יכול לבטל את המנוי בכל עת?",
    a: "לאחר תקופת התחייבות ראשונית של 3 חודשים, ניתן לבטל בהודעה של 30 יום מראש. לא תחויב בעלות ביטול.",
  },
  {
    q: "מה קורה לאתר שלי אם אני עוזב?",
    a: "האתר שלך שייך לך. נעביר לך את כל הקבצים, הבסיס נתונים והדומיין ללא עלות.",
  },
  {
    q: "כמה זמן לוקח לבנות אתר חדש?",
    a: "בדרך כלל 7–14 ימי עסקים מרגע אישור העיצוב. לאתרים פשוטים יותר — אפשר גם תוך 5 ימים.",
  },
  {
    q: "האם אוכל לערוך את האתר בעצמי?",
    a: "כן! תקבל גישה מלאה ל-WordPress עם הדרכה. לשינויים גדולים — צוות שלנו זמין.",
  },
  {
    q: "האם ה-SEO מובטח?",
    a: "אנחנו מבצעים אופטימיזציה מקצועית, אך גוגל לא מבטיח דירוגים לאף אחד. מה שאנחנו כן מבטיחים — אתר מהיר, מובנה נכון ומותאם לחיפוש.",
  },
  {
    q: "האם אתם עושים גם עיצוב לוגו?",
    a: "כן, בחבילות פרו ועסקי ניתן להוסיף חבילת עיצוב מיתוג מלאה בתוספת תשלום.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            שאלות נפוצות
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            יש לך <span className="gradient-text">שאלות?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border transition-all duration-300"
              style={{
                border: open === i ? "1px solid rgba(212,160,23,0.3)" : "1px solid rgba(255,255,255,0.05)",
                background: open === i ? "rgba(212,160,23,0.04)" : "rgba(255,255,255,0.02)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-right"
              >
                <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mr-4 transition-all"
                  style={{ background: open === i ? "#D4A017" : "rgba(255,255,255,0.05)" }}
                >
                  {open === i
                    ? <Minus size={13} className="text-black" />
                    : <Plus size={13} className="text-gray-400" />
                  }
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}