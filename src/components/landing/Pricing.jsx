import { Check, Zap } from "lucide-react";

const packages = [
  {
    name: "סטארטר",
    subtitle: "לעסקים קטנים",
    price: 390,
    color: "#666",
    features: [
      "עד 5 עמודים",
      "עיצוב מותאם",
      "SSL מאובטח",
      "גיבוי שבועי",
      "תמיכה בסיסית",
      "דומיין + אחסון",
    ],
    popular: false,
  },
  {
    name: "פרו",
    subtitle: "הכי פופולרי",
    price: 690,
    color: "#D4A017",
    features: [
      "עמודים ללא הגבלה",
      "עיצוב premium",
      "SSL + CDN",
      "גיבוי יומי",
      "תמיכה 24/7",
      "דומיין + אחסון מהיר",
      "SEO בסיסי",
      "ניתוח גוגל אנליטיקס",
      "שינויים שוטפים",
    ],
    popular: true,
  },
  {
    name: "עסקי",
    subtitle: "לעסקים גדולים",
    price: 1190,
    color: "#A855F7",
    features: [
      "הכל בחבילת פרו",
      "חנות WooCommerce",
      "SEO מתקדם",
      "שילוב CRM",
      "עד 3 שינויים/שבוע",
      "מנהל חשבון ייעודי",
      "דוחות חודשיים",
      "אבטחה מתקדמת",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            חבילות מחירים
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            השקעה שמחזירה את <span className="gradient-text">עצמה</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            תשלום חודשי קבוע, ללא הפתעות. כל חבילה כוללת ניהול מלא של האתר.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: pkg.popular
                  ? "linear-gradient(135deg, #1a1400 0%, #120e00 100%)"
                  : "rgba(255,255,255,0.02)",
                border: pkg.popular
                  ? "1px solid rgba(212,160,23,0.5)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: pkg.popular ? "0 0 60px rgba(212,160,23,0.12)" : "none",
              }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 shimmer-btn text-black text-xs font-black px-5 py-1.5 rounded-full flex items-center gap-1.5">
                  <Zap size={11} />
                  הכי פופולרי
                </div>
              )}

              <div className="mb-8">
                <div className="text-sm font-medium mb-1" style={{ color: pkg.color }}>{pkg.subtitle}</div>
                <h3 className="text-2xl font-black text-white mb-4">{pkg.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-white">₪{pkg.price}</span>
                  <span className="text-gray-500 mb-2 text-sm">/חודש</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={14} style={{ color: pkg.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center font-bold py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] text-sm"
                style={{
                  background: pkg.popular
                    ? "linear-gradient(90deg, #D4A017, #F5D06E)"
                    : "rgba(255,255,255,0.06)",
                  color: pkg.popular ? "#000" : "#fff",
                  border: pkg.popular ? "none" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {pkg.popular ? "התחל עכשיו" : "בחר חבילה"}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          * כל החבילות כוללות דומיין + אחסון. מחירים ללא מע"מ. ללא התחייבות לאחר 3 חודשים.
        </p>
      </div>
    </section>
  );
}