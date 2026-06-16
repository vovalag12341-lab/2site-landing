import { Star } from "lucide-react";
import StableCarousel from "./StableCarousel";

const reviews = [
  { name: "רחל כהן", text: "שירות מדהים! הצוות של 2site בנה לנו אתר מקצועי ומרשים תוך זמן קצר. ממליחה בחום!", stars: 5, initials: "ר", color: "#7c3aed" },
  { name: "דוד לוי", text: "עבודה מעולה, אתר יפה ומהיר, תמיכה טכנית זמינה. 2site הם האנשים הנכונים לעבודה.", stars: 5, initials: "ד", color: "#a855f7" },
  { name: "מיכל אברהם", text: "קיבלנו אתר מקצועי שהגדיל את הפניות שלנו ב-40%. שירות אדיב ומקצועי לאורך כל הדרך.", stars: 5, initials: "מ", color: "#6366f1" },
  { name: "יוסי שמיר", text: "2site ליווה אותנו מהתחלה ועד הסוף. האתר יצא מדהים ועמד בכל הציפיות שלנו.", stars: 5, initials: "י", color: "#ec4899" },
  { name: "נועה פרידמן", text: "מאוד מרוצה! הם הבינו בדיוק מה אנחנו צריכים ויצרו אתר שמשקף את המותג שלנו בצורה מושלמת.", stars: 5, initials: "נ", color: "#8b5cf6" },
];

function ReviewCard({ review }) {
  return (
    <div style={{
      width: "100%",
      background: "#ffffff",
      border: "1px solid rgba(124,58,237,0.1)",
      borderRadius: "16px",
      padding: "20px",
      boxShadow: "0 2px 16px rgba(124,58,237,0.06)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <div style={{ display: "flex", gap: "2px" }}>
          {Array.from({ length: review.stars }).map((_, i) => (
            <Star key={i} size={13} style={{ fill: "#facc15", color: "#facc15" }} />
          ))}
        </div>
        <span style={{ fontSize: "12px", color: "#9ca3af", fontWeight: "500" }}>Google</span>
      </div>
      <p style={{ color: "#374151", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        "{review.text}"
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "12px", fontWeight: "700", flexShrink: 0, background: `linear-gradient(135deg, ${review.color}, ${review.color}99)` }}>
          {review.initials}
        </div>
        <div>
          <div style={{ color: "#111827", fontSize: "12px", fontWeight: "600" }}>{review.name}</div>
          <div style={{ color: "#9ca3af", fontSize: "12px" }}>ביקורת מאומתת</div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24" style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #f3f0ff 100%)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
          ביקורות Google
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
          מה הלקוחות <span className="brand-gradient-text">אומרים עלינו</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[0,1,2,3,4].map(i => <Star key={i} size={16} style={{ fill: "#facc15", color: "#facc15" }} />)}
          </div>
          <span style={{ color: "#111", fontWeight: "700" }}>5.0</span>
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