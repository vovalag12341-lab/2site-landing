import { ArrowLeft, CheckCircle } from "lucide-react";

const trustTags = [
  "194+ פרויקטים",
  "לקוחות מכל הארץ",
  "תחזוקה שוטפת",
  "עיצוב בהתאמה אישית",
  "מוכן לקמפיינים ולידים",
];

// Mock browser/site mockup as JSX
function SiteMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.6) 0%, rgba(236,72,153,0.3) 100%)" }} />

      {/* Browser chrome */}
      <div className="relative rounded-2xl overflow-hidden border"
        style={{ background: "#12111a", borderColor: "rgba(124,58,237,0.3)", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}>

        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ background: "#0d0c17", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 rounded text-xs text-gray-600"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            www.my-business.co.il
          </div>
        </div>

        {/* Page hero mock */}
        <div className="p-5">
          <div className="rounded-xl p-5 mb-3"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(236,72,153,0.08) 100%)", border: "1px solid rgba(124,58,237,0.15)" }}>
            <div className="h-2.5 w-32 rounded mb-2" style={{ background: "rgba(167,139,250,0.5)" }} />
            <div className="h-4 w-48 rounded mb-1.5" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="h-4 w-40 rounded mb-4" style={{ background: "rgba(255,255,255,0.1)" }} />
            <div className="h-2 w-36 rounded mb-1" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="h-2 w-28 rounded mb-5" style={{ background: "rgba(255,255,255,0.05)" }} />
            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg,#7c3aed,#ec4899)" }}>
              צרו קשר עכשיו
            </div>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {["שירות A", "שירות B", "שירות C"].map((s) => (
              <div key={s} className="rounded-lg p-2.5 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-4 h-4 rounded-full mx-auto mb-1.5"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }} />
                <div className="h-1.5 w-full rounded" style={{ background: "rgba(255,255,255,0.1)" }} />
              </div>
            ))}
          </div>

          {/* Testimonial mock */}
          <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex gap-0.5 mb-2">
              {[0,1,2,3,4].map(i => <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: "#f59e0b" }} />)}
            </div>
            <div className="h-1.5 w-full rounded mb-1" style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="h-1.5 w-4/5 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-3 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
        style={{ background: "rgba(124,58,237,0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(167,139,250,0.3)" }}>
        ✓ SEO מוכן
      </div>
      <div className="absolute -bottom-3 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
        style={{ background: "rgba(236,72,153,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(244,114,182,0.3)" }}>
        📱 מותאם מובייל
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#07070f" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Radial gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(124,58,237,0.12) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 70% 60%, rgba(236,72,153,0.07) 0%, transparent 65%)" }} />

      <div className="relative max-w-6xl mx-auto px-5 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 text-xs font-semibold"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", color: "#c084fc" }}>
              ⚡ 194+ פרויקטים הושלמו בהצלחה
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-6"
              style={{ lineHeight: 1.18 }}>
              אתר מקצועי לעסק שלך —{" "}
              <span className="brand-gradient-text">
                בלי כאבי ראש ובלי הוצאה חד־פעמית כבדה
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              2site מקימה, מעצבת, מאחסנת ומתחזקת עבורך אתר WordPress מקצועי במודל חודשי — עם צוות אמיתי שמלווה אותך גם אחרי העלייה לאוויר.
            </p>

            {/* Trust tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-9">
              {trustTags.map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-xs font-medium text-gray-300 px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <CheckCircle size={11} style={{ color: "#a78bfa" }} />
                  {t}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <a href="#contact"
                className="cta-btn text-white font-bold px-7 py-4 rounded-full text-base flex items-center justify-center gap-2">
                רוצה אתר לעסק שלי
                <ArrowLeft size={16} />
              </a>
              <a href="#pricing"
                className="text-gray-300 hover:text-white font-semibold px-7 py-4 rounded-full text-base transition-all flex items-center justify-center"
                style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
                צפייה בחבילות
              </a>
            </div>
          </div>

          {/* Mockup */}
          <div className="flex-1 w-full lg:max-w-[400px]">
            <SiteMockup />
          </div>
        </div>
      </div>
    </section>
  );
}