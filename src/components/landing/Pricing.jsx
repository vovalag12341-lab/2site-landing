import { Check, Zap } from "lucide-react";

const packages = [
  {
    id: "starter",
    name: "אתר תוכן / תדמית",
    price: "450",
    popular: false,
    cta: "אני רוצה להתחיל",
    features: [
      "אתר WordPress מקצועי עד 5 מסכים",
      "התאמה מלאה למובייל",
      "עמודי תוכן מרכזיים",
      "עיצוב נקי ומקצועי",
      "אחסון ותחזוקה שוטפת",
      "דומיין ללא עלות",
    ],
    note: "ללא דמי הקמה | התחייבות לשנה",
  },
  {
    id: "pro",
    name: "תוכן מורחב + SEO",
    price: "900",
    popular: true,
    cta: "בחרתי במסלול הפופולרי",
    features: [
      "אתר WordPress מקצועי עד 9 מסכים",
      "עיצוב בהתאמה אישית",
      "מערכת ניהול תוכן נוחה",
      "SEO ופריסת מילות מפתח",
      "התאמה לקמפיינים ולידים",
      "תחזוקה ועדכונים שוטפים",
    ],
    note: "ללא דמי הקמה | התחייבות לשנה",
  },
  {
    id: "extra",
    name: "תוכן מורחב Extra SEO",
    price: "1,200",
    popular: false,
    cta: "דברו איתי על Extra",
    features: [
      "אתר WordPress מתקדם עד 20 מסכים",
      "אפיון מעמיק יותר",
      "עיצוב מותאם מותג",
      "מבנה עמודים רחב",
      "ביצועים, SEO וחוויית משתמש",
      "גיבויים ועדכונים שוטפים",
    ],
    note: "ללא דמי הקמה | התחייבות לשנה",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5" style={{ background: "#07070f" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
            חבילות WordPress
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            השקעה שמחזירה <span className="brand-gradient-text">את עצמה</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            תשלום חודשי קבוע, ללא הפתעות. הכל כלול — עיצוב, פיתוח, אחסון, תחזוקה.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id}
              className="relative rounded-2xl p-7 card-hover flex flex-col"
              style={{
                background: pkg.popular
                  ? "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(236,72,153,0.06) 100%)"
                  : "rgba(255,255,255,0.02)",
                border: pkg.popular
                  ? "1px solid rgba(124,58,237,0.45)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: pkg.popular ? "0 0 50px rgba(124,58,237,0.12)" : "none",
              }}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-white text-xs font-black px-5 py-1.5 rounded-full cta-btn">
                  <Zap size={11} /> הכי פופולרי
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-black text-xl mb-4">{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-white">₪{pkg.price}</span>
                  <span className="text-gray-500 text-sm mb-1.5">/ חודש + מע״מ</span>
                </div>
                <p className="text-xs font-medium" style={{ color: "#7c3aed" }}>{pkg.note}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-7">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: "#a78bfa" }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className="block text-center font-bold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.02]"
                style={{
                  background: pkg.popular ? "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)" : "rgba(124,58,237,0.12)",
                  color: pkg.popular ? "#fff" : "#a78bfa",
                  border: pkg.popular ? "none" : "1px solid rgba(124,58,237,0.2)",
                }}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          * המחירים עשויים להשתנות בהתאם לאפיון, היקף האתר וצרכי העסק.
        </p>
      </div>
    </section>
  );
}