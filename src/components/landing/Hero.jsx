import { ArrowLeft, Star, CheckCircle } from "lucide-react";

const stats = [
  { value: "150+", label: "לקוחות מרוצים" },
  { value: "8+", label: "שנות ניסיון" },
  { value: "99%", label: "שביעות רצון" },
  { value: "48h", label: "זמן תגובה" },
];

export default function Hero({ heroImage }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050505 0%, #0d0d0d 50%, #080808 100%)" }}
    >
      {/* Background image overlay */}
      {heroImage && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,160,23,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,160,23,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl mr-0 ml-auto md:mr-0 md:ml-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-8 fade-in-up">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-xs font-semibold tracking-wide">#1 בבניית אתרי WordPress בישראל</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 fade-in-up" style={{ animationDelay: "0.1s" }}>
            האתר שלך,{" "}
            <span className="gradient-text gold-glow-text block">ניהול ללא בעיות</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl fade-in-up" style={{ animationDelay: "0.2s" }}>
            אתרי WordPress מקצועיים עם תמיכה חודשית מלאה. אנחנו מטפלים בכל הטכני — אתה מתרכז בעסק.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-4 mb-10 fade-in-up" style={{ animationDelay: "0.3s" }}>
            {["עיצוב מותאם אישית", "תמיכה 24/7", "SEO מובנה", "ללא עלויות נסתרות"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle size={14} className="text-yellow-400" />
                {b}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#pricing"
              className="shimmer-btn text-black font-bold px-8 py-4 rounded-full text-base flex items-center gap-2 hover:scale-105 transition-transform"
            >
              לצפייה בחבילות
              <ArrowLeft size={16} />
            </a>
            <a
              href="#contact"
              className="border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              קבל הצעת מחיר חינם
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/5 fade-in-up" style={{ animationDelay: "0.5s" }}>
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}