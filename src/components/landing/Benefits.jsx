import { Shield, Zap, TrendingUp, Clock, Headphones, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "מהיר כמו ברק",
    desc: "אתרים שנטענים תוך שניה אחת. מהירות = יותר לקוחות ודירוג גבוה יותר בגוגל.",
    color: "#FBBF24",
  },
  {
    icon: Shield,
    title: "מאובטח לגמרי",
    desc: "SSL, גיבויים יומיים, הגנה מפני פריצות. האתר שלך מוגן 24/7.",
    color: "#34D399",
  },
  {
    icon: TrendingUp,
    title: "SEO מקצועי",
    desc: "כלי SEO מובנים, מבנה URL נכון, ותוכן מותאם לגוגל — יותר תנועה אורגנית.",
    color: "#60A5FA",
  },
  {
    icon: Clock,
    title: "תמיד מעודכן",
    desc: "עדכוני WordPress, פלאגינים ותוכן — אנחנו מטפלים בהכל בשבילך.",
    color: "#F87171",
  },
  {
    icon: Headphones,
    title: "תמיכה אנושית",
    desc: "לא בוט, לא תסריטים. אדם אמיתי שמגיב תוך שעה לכל שאלה.",
    color: "#C084FC",
  },
  {
    icon: Award,
    title: "עיצוב premium",
    desc: "תבניות מקצועיות מותאמות אישית לעסק שלך. לא תבנית גנרית.",
    color: "#D4A017",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6" style={{ background: "#070707" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
            למה לבחור בנו
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            הכל <span className="gradient-text">כלול</span> בחבילה
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            אחסון, אבטחה, עדכונים, SEO ותמיכה — הכל בתשלום חודשי אחד קבוע.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl p-7 border border-white/5 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${b.color}15` }}
              >
                <b.icon size={22} style={{ color: b.color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}