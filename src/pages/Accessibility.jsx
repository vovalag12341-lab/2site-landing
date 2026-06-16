export default function Accessibility() {
  return (
    <div dir="rtl" style={{ background: "#07070f", minHeight: "100vh" }} className="py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block transition-colors">← חזרה לאתר</a>

        <h1 className="text-4xl font-black text-white mb-3">הצהרת נגישות</h1>
        <p className="text-gray-500 text-sm mb-10">עדכון אחרון: יוני 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">מחויבות לנגישות</h2>
            <p>חברת 2site מחויבת להנגשת שירותיה הדיגיטליים לכלל המשתמשים, לרבות אנשים עם מוגבלויות. אנו פועלים בהתאם לתקן הישראלי (ת"י 5568) ולהנחיות WCAG 2.1 ברמה AA.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">פעולות הנגשה שבוצעו</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>תמיכה בניווט מלא באמצעות מקלדת</li>
              <li>תיאורי alt לכלל התמונות המשמעותיות</li>
              <li>ניגודיות צבעים תקנית בין טקסט לרקע</li>
              <li>תגיות ARIA לרכיבי ממשק דינמיים</li>
              <li>תמיכה בקוראי מסך (Screen Readers)</li>
              <li>כפתור נגישות לשינוי גודל גופן, ניגודיות וסמן</li>
              <li>מבנה כותרות היררכי וסדור</li>
              <li>שפת הדף מוגדרת כעברית</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">מידת הנגישות</h2>
            <p>האתר עומד ברמת נגישות AA לפי תקן WCAG 2.1. אנו ממשיכים לשפר ולבחון את הנגישות באופן שוטף.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">דפדפנים וטכנולוגיות נתמכות</h2>
            <p>האתר תומך בדפדפנים עדכניים: Chrome, Firefox, Safari, Edge. תואם לקוראי מסך NVDA ו-VoiceOver.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">פניות בנושא נגישות</h2>
            <p>נתקלתם בבעיית נגישות? נשמח לעזור ולתקן. ניתן לפנות אלינו:</p>
            <div className="mt-3 p-4 rounded-xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <p className="font-semibold text-white">רכז הנגישות של 2site</p>
              <p className="text-sm mt-1">דוא"ל: <a href="mailto:info@2site.co.il" className="text-purple-400 hover:text-purple-300">info@2site.co.il</a></p>
              <p className="text-sm">טלפון: <a href="tel:0527733882" className="text-purple-400 hover:text-purple-300">052-773-3882</a></p>
              <p className="text-xs text-gray-500 mt-2">זמן מענה: עד 5 ימי עסקים</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">עדכון ההצהרה</h2>
            <p>הצהרה זו עודכנה לאחרונה ביוני 2026 ותיבחן מחדש אחת לשנה.</p>
          </section>
        </div>
      </div>
    </div>
  );
}