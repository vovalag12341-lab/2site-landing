import { Star } from "lucide-react";
import StableCarousel from "./StableCarousel";

const reviews = [
  { name: "ענת פינקו", text: "עובדת עם 2site גם לצורך אישי וגם במסגרת החברה שבה אני עובדת. חברה שנותנת מענה מקצועי, מקיף וזמינות גבוהה.", stars: 5, initials: "ע", color: "#7c3aed" },
  { name: "שרון לוי שלום", text: "חברה מצויינת, שירות אישי, מהיר, יעיל ולא מתפשר על איכות.", stars: 5, initials: "ש", color: "#a855f7" },
  { name: "Itay Margolin", text: "2site מקצועיים ואדיבים, החל מתהליך ההיכרות ועד מסירת האתר. היו קשובים לצרכים וזמינים. תודה רבה על הכל.", stars: 5, initials: "I", color: "#6366f1" },
  { name: "לינה אמין", text: "חוויה מעולה! שירות מהיר, יחס אישי וסבלנות אין קץ. תודה על אתר מהמם.", stars: 5, initials: "ל", color: "#ec4899" },
  { name: "Global Diving Tours", text: "שירות מעולה, אתר ממיר, היה מוכן תוך ימים בודדים, ביצועים טובים גם בקמפיין. מומלץ בחום.", stars: 5, initials: "G", color: "#8b5cf6" },
  { name: "Sam P", text: "ממליץ בחום על החברה, שירות מעולה ותמיד זמינים לכל מטרה.", stars: 5, initials: "S", color: "#a78bfa" },
  { name: "Geila Rozen", text: "שמחה שמצאתי את 2site לצורך הקמת האתר וניהולו. מקצוענות בלתי מתפשרת, סבלנות ואנשים טובים.", stars: 5, initials: "G", color: "#c084fc" },
  { name: "מיר ויצמן", text: "שירות מקצועי עם זמינות גבוהה.", stars: 5, initials: "מ", color: "#818cf8" },
  { name: "Yossi Rosenblum", text: "ממליץ בחום. וובה עשה עבודה מדהימה. חברה מקצועית, יסודית והוגנת.", stars: 5, initials: "Y", color: "#7c3aed" },
];

function ReviewCard({ review }) {
  return (
    <div style={{
      width: "100%",
      background: "#0e0d1a",
      border: "1px solid rgba(124,58,237,0.12)",
      borderRadius: "16px",
      padding: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} size={13} style={{ fill: "#facc15", color: "#facc15" }} />
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#4b5563", fontWeight: "500" }}>Google</span>
      </div>
      <p style={{ color: "#d1d5db", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        "{review.text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "700", flexShrink: 0, background: `linear-gradient(135deg, ${review.color}, ${review.color}99)` }}>
          {review.initials}
        </div>
        <div>
          <div style={{ color: "#fff", fontSize: "12px", fontWeight: "600" }}>{review.name}</div>
          <div style={{ color: "#4b5563", fontSize: "12px" }}>ביקורת מאומתת</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24" style={{ background: "#07070f" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
          ביקורות Google
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          מה הלקוחות <span className="brand-gradient-text">אומרים עלינו</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[0,1,2,3,4].map(i => <Star key={i} size={16} style={{ fill: "#facc15", color: "#facc15" }} />)}
          </div>
          <span style={{ color: "#fff", fontWeight: "700" }}>5.0</span>
          <span style={{ color: "#6b7280", fontSize: "14px" }}>· {reviews.length} ביקורות Google</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-10">
        <StableCarousel
          items={reviews}
          renderItem={(review) => <ReviewCard review={review} />}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          gap={20}
          autoplayDelay={3000}
          showArrows={true}
          showDots={true}
        />
      </div>
    </section>
  );
}