import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const inputStyle = {
  background: "#f8f7ff",
  border: "1px solid rgba(124,58,237,0.2)",
  color: "#111827",
  fontFamily: "'Heebo', sans-serif",
};

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-gray-700 text-xs font-medium mb-1.5">{label}</label>
      {children}
    </div>
  );
}

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", business: "", industry: "", pkg: "", gift: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const sharedInputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all";
  const focusStyle = (e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)");
  const blurStyle = (e) => (e.target.style.borderColor = "rgba(124,58,237,0.2)");

  return (
    <section id="contact" className="py-24 px-5" style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #f3f0ff 100%)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
            צור קשר
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            רוצה לדעת איזו חבילה{" "}
            <span className="brand-gradient-text">מתאימה לעסק שלך?</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            שיחה קצרה, בלי התחייבות — נבין מה העסק שלך צריך ונמליץ על המסלול הנכון.
          </p>
        </div>

        <div className="rounded-3xl p-7 md:p-10"
          style={{ background: "#ffffff", border: "1px solid rgba(124,58,237,0.18)", boxShadow: "0 8px 40px rgba(124,58,237,0.08)" }}>
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#7c3aed" }} />
              <h3 className="text-gray-900 text-2xl font-black mb-2">קיבלנו!</h3>
              <p className="text-gray-500">ניצור איתך קשר בהקדם האפשרי. תודה!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="שם מלא *">
                  <input required value={form.name} onChange={set("name")} placeholder="ישראל ישראלי"
                    className={sharedInputClass} style={inputStyle}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
                <Field label="טלפון *">
                  <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="050-0000000"
                    className={sharedInputClass} style={inputStyle}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
              </div>



              <Field label="בחירת מתנה">
                <select value={form.gift} onChange={set("gift")}
                  className={sharedInputClass + " appearance-none cursor-pointer"} style={inputStyle}
                  onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="" style={{ background: "#fff" }}>בחר מתנה</option>
                  <option value="landing" style={{ background: "#fff" }}>דף נחיתה לפרסום על בסיס האתר</option>
                  <option value="ad" style={{ background: "#fff" }}>פרסומת מקצועית AI — 30 שניות</option>
                  <option value="posts" style={{ background: "#fff" }}>סט 10 פוסטים לסושיאל</option>
                  <option value="crm" style={{ background: "#fff" }}>התממשקות למועדוני לקוחות לאתרי מכירה</option>
                </select>
              </Field>

              <Field label="בחירת מסלול">
                <select value={form.pkg} onChange={set("pkg")}
                  className={sharedInputClass + " appearance-none cursor-pointer"} style={inputStyle}
                  onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="" style={{ background: "#fff" }}>בחר מסלול</option>
                  <option value="starter" style={{ background: "#fff" }}>אתר תוכן / תדמית — ₪450/חודש</option>
                  <option value="shop" style={{ background: "#fff" }}>אתר מכירות / קטלוג — ₪900/חודש</option>
                  <option value="pro" style={{ background: "#fff" }}>תוכן מורחב + SEO — ₪900/חודש</option>
                  <option value="extra" style={{ background: "#fff" }}>Extra SEO — ₪1,200/חודש</option>
                  <option value="unsure" style={{ background: "#fff" }}>לא בטוח, דברו איתי</option>
                </select>
              </Field>

              <Field label="הודעה">
                <textarea rows={3} value={form.message} onChange={set("message")}
                  placeholder="ספר לנו על העסק שלך ומה אתה מחפש..."
                  className={sharedInputClass + " resize-none"} style={inputStyle}
                  onFocus={focusStyle} onBlur={blurStyle} />
              </Field>

              <button type="submit" disabled={loading}
                className="w-full py-4 rounded-xl font-black text-white text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-70 cta-btn">
                {loading
                  ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <><Send size={16} /> חזרו אליי עם הצעה</>}
              </button>

              <p className="text-center text-gray-600 text-xs pt-1">
                ✓ ללא התחייבות · ✓ תגובה מהירה · ✓ ייעוץ חינמי
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}