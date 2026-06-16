import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { name: "רחל כהן", rating: 5, text: "שירות מדהים! הצוות של 2site בנה לנו אתר מקצועי ומרשים תוך זמן קצר. ממליצה בחום!" },
  { name: "דוד לוי", rating: 5, text: "עבודה מעולה, אתר יפה ומהיר, תמיכה טכנית זמינה. 2site הם האנשים הנכונים לעבודה." },
  { name: "מיכל אברהם", rating: 5, text: "קיבלנו אתר מקצועי שהגדיל את הפניות שלנו ב-40%. שירות אדיב ומקצועי לאורך כל הדרך." },
  { name: "יוסי שמיר", rating: 5, text: "2site ליווה אותנו מהתחלה ועד הסוף. האתר יצא מדהים ועמד בכל הציפיות שלנו." },
  { name: "נועה פרידמן", rating: 5, text: "מאוד מרוצה! הם הבינו בדיוק מה אנחנו צריכים ויצרו אתר שמשקף את המותג שלנו בצורה מושלמת." }
];

const colors = ["#7c3aed", "#a855f7", "#6366f1", "#ec4899", "#8b5cf6"];

function ReviewCard({ review, index }) {
  return (
    <div style={{
      width: "280px",
      background: "#ffffff",
      border: "1px solid rgba(124,58,237,0.12)",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px",
    }}>
      {/* Stars */}
      <div style={{ display: "flex", gap: "3px" }}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={14} style={{ fill: "#facc15", color: "#facc15" }} />
        ))}
      </div>

      {/* Review text */}
      <p style={{ color: "#374151", fontSize: "13px", lineHeight: 1.6, flex: 1 }}>
        "{review.text}"
      </p>

      {/* Reviewer info */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid rgba(124,58,237,0.08)", paddingTop: "12px" }}>
        <div style={{ 
          width: "36px", 
          height: "36px", 
          borderRadius: "50%", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "#fff", 
          fontSize: "13px", 
          fontWeight: "700", 
          flexShrink: 0, 
          background: colors[index % colors.length]
        }}>
          {review.name.charAt(0)}
        </div>
        <div>
          <div style={{ color: "#111827", fontSize: "12px", fontWeight: "600" }}>{review.name}</div>
          <div style={{ color: "#9ca3af", fontSize: "11px" }}>ביקורת מאומתת</div>
        </div>
        <div style={{ marginLeft: "auto", color: "#9ca3af", fontSize: "12px" }}>Google</div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [autoplay, setAutoplay] = useState(true);
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24" style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #f3f0ff 100%)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
          ביקורות Google
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-3">
          מה לקוחות <span className="brand-gradient-text">אומרים עלינו</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[0,1,2,3,4].map(i => <Star key={i} size={16} style={{ fill: "#facc15", color: "#facc15" }} />)}
          </div>
          <span style={{ color: "#111", fontWeight: "700" }}>5.0</span>
          <span style={{ color: "#6b7280", fontSize: "14px" }}>· {reviews.length} ביקורות Google</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 overflow-hidden">
        <div 
          style={{
            display: "flex",
            gap: "20px",
            animation: autoplay ? "scrollReviews 40s linear infinite" : "none",
            width: "fit-content",
          }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} index={i % reviews.length} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollReviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * ${reviews.length} - 20px * ${reviews.length}));
          }
        }
      `}</style>
    </section>
  );
}