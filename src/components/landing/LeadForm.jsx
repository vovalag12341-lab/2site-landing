import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", pkg: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "#050505" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            צור קשר
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            קבל <span className="gradient-text">הצעת מחיר</span> חינם
          </h2>
          <p className="text-gray-500">נחזור אליך תוך שעה בשעות הפעילות</p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: "linear-gradient(135deg, #111 0%, #0d0d0d 100%)",
            border: "1px solid rgba(212,160,23,0.15)",
          }}
        >
          {sent ? (
            <div className="text-center py-8">
              <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-white text-2xl font-bold mb-2">קיבלנו!</h3>
              <p className="text-gray-400">ניצור איתך קשר בהקדם. תודה!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium">שם מלא *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="ישראל ישראלי"
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5 font-medium">טלפון *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="050-0000000"
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1.5 font-medium">אימייל</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1.5 font-medium">חבילה מעניינת</label>
                <select
                  value={form.pkg}
                  onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <option value="" style={{ background: "#111" }}>בחר חבילה</option>
                  <option value="starter" style={{ background: "#111" }}>סטארטר — ₪390/חודש</option>
                  <option value="pro" style={{ background: "#111" }}>פרו — ₪690/חודש</option>
                  <option value="business" style={{ background: "#111" }}>עסקי — ₪1190/חודש</option>
                  <option value="custom" style={{ background: "#111" }}>לא יודע, דברו איתי</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-xs mb-1.5 font-medium">ספר לנו על העסק</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="מה העסק שלך? מה אתה מחפש?"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-black text-base flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70"
                style={{ background: "linear-gradient(90deg, #D4A017, #F5D06E)" }}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    שלח הצעה חינם
                  </>
                )}
              </button>

              <p className="text-center text-gray-600 text-xs">
                ✓ ללא התחייבות · ✓ תגובה תוך שעה · ✓ ייעוץ חינם
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}