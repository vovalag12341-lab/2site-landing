import { ArrowLeft, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";

const trustTags = [
  "194+ פרויקטים",
  "לקוחות מכל הארץ",
  "תחזוקה שוטפת",
  "עיצוב בהתאמה אישית",
  "מוכן לקמפיינים ולידים",
];

function SiteMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto" style={{ direction: "ltr" }}>
      {/* Ambient glow layers */}
      <div className="absolute -inset-6 blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.7) 0%, rgba(236,72,153,0.4) 50%, transparent 75%)" }} />
      <div className="absolute -inset-2 blur-xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(99,102,241,0.5) 0%, transparent 60%)" }} />

      {/* Floating analytics card — top left */}
      <div className="absolute -top-4 -left-6 z-20 px-3 py-2.5 rounded-xl text-white"
        style={{ background: "rgba(13,12,23,0.92)", backdropFilter: "blur(14px)", border: "1px solid rgba(124,58,237,0.35)", boxShadow: "0 8px 32px rgba(124,58,237,0.2)", animation: "float1 4s ease-in-out infinite" }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }}>
            <TrendingUp size={11} className="text-white" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">+47% לידים</div>
            <div className="text-gray-500" style={{ fontSize: "9px" }}>החודש האחרון</div>
          </div>
        </div>
      </div>

      {/* Floating reviews badge — bottom right */}
      <div className="absolute -bottom-4 -right-5 z-20 px-3 py-2.5 rounded-xl"
        style={{ background: "rgba(13,12,23,0.92)", backdropFilter: "blur(14px)", border: "1px solid rgba(236,72,153,0.3)", boxShadow: "0 8px 32px rgba(236,72,153,0.15)", animation: "float2 5s ease-in-out infinite" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[0,1,2,3,4].map(i => <Star key={i} size={9} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          <div className="text-white font-bold" style={{ fontSize: "11px" }}>5.0 Google</div>
        </div>
        <div className="text-gray-500 mt-0.5 text-right" style={{ fontSize: "9px" }}>50+ ביקורות מאומתות</div>
      </div>

      {/* Floating mobile-ready badge — right */}
      <div className="absolute top-1/2 -right-5 z-20 px-2.5 py-2 rounded-xl"
        style={{ background: "rgba(13,12,23,0.92)", backdropFilter: "blur(14px)", border: "1px solid rgba(99,102,241,0.3)", boxShadow: "0 8px 24px rgba(99,102,241,0.15)", animation: "float3 6s ease-in-out infinite", transform: "translateY(-50%)" }}>
        <div className="text-center">
          <div className="text-base mb-0.5">📱</div>
          <div className="text-white font-bold" style={{ fontSize: "9px" }}>Mobile</div>
          <div className="text-green-400 font-bold" style={{ fontSize: "9px" }}>Ready</div>
        </div>
      </div>

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: "#0d0c17", border: "1px solid rgba(124,58,237,0.35)", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)" }}>

        {/* Browser top bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{ background: "#09090f", borderColor: "rgba(255,255,255,0.05)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
          </div>
          <div className="flex-1 flex items-center gap-1.5 mx-3 px-3 py-1 rounded-md"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "rgba(39,201,63,0.6)" }} />
            <span className="text-gray-600" style={{ fontSize: "10px" }}>your-business.co.il</span>
          </div>
        </div>

        {/* Site content */}
        <div className="p-4" dir="rtl">

          {/* Hero section */}
          <div className="rounded-xl p-4 mb-3 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.1) 100%)", border: "1px solid rgba(124,58,237,0.2)" }}>
            {/* dot decorations */}
            <div className="absolute top-2 left-2 w-12 h-12 rounded-full opacity-20 blur-lg"
              style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
            <div className="mb-2 flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full" style={{ background: "#a78bfa" }} />
              <div className="h-1.5 w-16 rounded" style={{ background: "rgba(167,139,250,0.5)" }} />
            </div>
            <div className="text-white font-black text-sm mb-0.5 leading-tight">האתר החדש שלך</div>
            <div className="text-purple-300 font-semibold mb-2" style={{ fontSize: "10px" }}>מוכן לקמפיינים · לידים מהיום הראשון</div>
            <div className="h-1.5 w-full rounded mb-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="h-1.5 w-3/4 rounded mb-4" style={{ background: "rgba(255,255,255,0.05)" }} />
            <button className="px-4 py-1.5 rounded-full text-white font-bold"
              style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)", fontSize: "10px", boxShadow: "0 4px 14px rgba(124,58,237,0.4)" }}>
              צרו קשר עכשיו ←
            </button>
          </div>

          {/* Services row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { icon: "🎨", label: "עיצוב" },
              { icon: "⚡", label: "מהירות" },
              { icon: "📈", label: "SEO" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg p-2 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(124,58,237,0.12)" }}>
                <div className="text-sm mb-1">{s.icon}</div>
                <div className="text-gray-400 font-medium" style={{ fontSize: "9px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Reviews + mini analytics row */}
          <div className="grid grid-cols-2 gap-2">
            {/* Reviews */}
            <div className="rounded-lg p-2.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex gap-0.5 mb-1.5">
                {[0,1,2,3,4].map(i => <Star key={i} size={8} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <div className="text-white font-bold" style={{ fontSize: "11px" }}>5.0</div>
              <div className="text-gray-600" style={{ fontSize: "8px" }}>Google Reviews</div>
            </div>
            {/* Analytics */}
            <div className="rounded-lg p-2.5"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}>
              <div className="flex items-center gap-1 mb-1">
                <Users size={9} style={{ color: "#a78bfa" }} />
                <div className="text-gray-400" style={{ fontSize: "8px" }}>מבקרים החודש</div>
              </div>
              <div className="text-white font-black" style={{ fontSize: "13px" }}>1,240</div>
              <div className="text-green-400 font-semibold" style={{ fontSize: "8px" }}>↑ 23% מחודש שעבר</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(5px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(-50%) translateX(0px); }
          50% { transform: translateY(-50%) translateX(4px); }
        }
      `}</style>
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
              אתר מקצועי לעסק שלך{" "}
              <span className="brand-gradient-text">
                כולל ליווי מלא ותחזוקה ללא הגבלה לאחר ההקמה!
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              2site מעצבת לך אתר מרשים בעיצוב אישי — כולל אחסון, אחריות טכנית, דומיין ותחזוקה מלאה לשינויים ועדכונים לאחר ההשקה ללא תשלום נוסף. צוות גדול ומנוסה בעל ניסיון של מאות פרויקטים בין לאומיים.
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