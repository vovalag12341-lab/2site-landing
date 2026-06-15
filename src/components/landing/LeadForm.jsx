import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(124,58,237,0.15)",
  color: "#fff",
  fontFamily: "'Heebo', sans-serif",
};

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-gray-400 text-xs font-medium mb-1.5">{label}</label>
      {children}
    </div>
  );
}

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", business: "", industry: "", pkg: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  const sharedInputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all";
  const focusStyle = (e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)");
  const blurStyle = (e) => (e.target.style.borderColor = "rgba(124,58,237,0.15)");

  return (
    <section id="contact" className="py-24 px-5" style={{ background: "#07070f" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
            צור קשר
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            רוצה לדעת איזו חבילה{" "}
            <span className="brand-gradient-text">מתאימה לעסק שלך?</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            שיחה קצרה, בלי התחייבות — נבין מה העסק שלך צריך ונמליץ על המסלול הנכון.
          </p>
        </div>

        <div className="rounded-3xl p-7 md:p-10"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(124,58,237,0.18)" }}>
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#a78bfa" }} />
              <h3 className="text-white text-2xl font-black mb-2">קיבלנו!</h3>
              <p className="text-gray-400">ניצור איתך קשר בהקדם האפשרי. תודה!</p>
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

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="שם העסק">
                  <input value={form.business} onChange={set("business")} placeholder="שם החברה / עסק"
                    className={sharedInputClass} style={inputStyle}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
                <Field label="תחום העסק">
                  <input value={form.industry} onChange={set("industry")} placeholder="לדוגמה: נדל״ן, בריאות, מסעדנות"
                    className={sharedInputClass} style={inputStyle}
                    onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
              </div>

              <Field label="בחירת מסלול">
                <select value={form.pkg} onChange={set("pkg")}
                  className={sharedInputClass + " appearance-none cursor-pointer"} style={inputStyle}
                  onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="" style={{ background: "#0e0d1a" }}>בחר מסלול</option>
                  <option value="starter" style={{ background: "#0e0d1a" }}>אתר תוכן / תדמית — ₪450/חודש</option>
                  <option value="pro" style={{ background: "#0e0d1a" }}>תוכן מורחב + SEO — ₪900/חודש</option>
                  <option value="extra" style={{ background: "#0e0d1a" }}>Extra SEO — ₪1,200/חודש</option>
                  <option value="unsure" style={{ background: "#0e0d1a" }}>לא בטוח, דברו איתי</option>
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