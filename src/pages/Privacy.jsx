export default function Privacy() {
  return (
    <div dir="rtl" style={{ background: "#07070f", minHeight: "100vh" }} className="py-20 px-5">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 inline-block transition-colors">← חזרה לאתר</a>

        <h1 className="text-4xl font-black text-white mb-3">מדיניות פרטיות</h1>
        <p className="text-gray-500 text-sm mb-10">עדכון אחרון: יוני 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">כללי</h2>
            <p>חברת 2site ("החברה", "אנחנו") מכבדת את פרטיות המשתמשים באתר <strong className="text-white">2site.co.il</strong>. מדיניות זו מסבירה אילו מידע אנו אוספים, כיצד אנו משתמשים בו ואיך אנו מגנים עליו.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">מידע שאנו אוספים</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">מידע שנמסר מרצון</strong> — שם, טלפון, דוא"ל ופרטי עסק שנמסרים בטופס יצירת הקשר.</li>
              <li><strong className="text-white">מידע טכני</strong> — כתובת IP, סוג דפדפן, מערכת הפעלה, עמודים שנצפו וזמן שהייה (דרך Google Analytics).</li>
              <li><strong className="text-white">עוגיות (Cookies)</strong> — לשיפור חוויית הגלישה וניתוח תנועה באתר.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">שימוש במידע</h2>
            <p>המידע שנאסף משמש אך ורק למטרות הבאות:</p>
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li>חזרה אליכם בנוגע לפנייתכם</li>
              <li>שיפור תוכן האתר וחוויית המשתמש</li>
              <li>ניתוח סטטיסטי פנימי (אנונימי)</li>
              <li>משלוח עדכונים ומבצעים — בהסכמה בלבד</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">שיתוף מידע עם צדדים שלישיים</h2>
            <p>איננו מוכרים, משכירים או מעבירים את פרטיכם לצדדים שלישיים, למעט:</p>
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li>ספקי שירות הפועלים מטעמנו (כגון Google Analytics) תחת הסכמי סודיות</li>
              <li>כאשר הדבר נדרש על פי חוק או צו שיפוטי</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">עוגיות (Cookies)</h2>
            <p>האתר משתמש בעוגיות לצורך ניתוח תנועה ושיפור הביצועים. ניתן לנהל עוגיות דרך הגדרות הדפדפן שלכם. ביטול עוגיות עלול לפגוע בחלק מפונקציות האתר.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">אבטחת מידע</h2>
            <p>אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי, כולל הצפנת SSL, גישה מוגבלת למסדי נתונים ובדיקות אבטחה תקופתיות.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">זכויות המשתמש</h2>
            <p>בהתאם לחוק הגנת הפרטיות הישראלי ותקנות ה-GDPR, יש לכם זכות:</p>
            <ul className="space-y-2 list-disc list-inside mt-2">
              <li>לעיין במידע שנאסף עליכם</li>
              <li>לתקן מידע שגוי</li>
              <li>לבקש מחיקת המידע</li>
              <li>לבטל הסכמה לקבלת שיווק</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">יצירת קשר</h2>
            <div className="p-4 rounded-xl" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
              <p className="font-semibold text-white">2site — ממונה על הגנת הפרטיות</p>
              <p className="text-sm mt-1">דוא"ל: <a href="mailto:info@2site.co.il" className="text-purple-400 hover:text-purple-300">info@2site.co.il</a></p>
              <p className="text-sm">טלפון: <a href="tel:0527733882" className="text-purple-400 hover:text-purple-300">052-773-3882</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">עדכוני המדיניות</h2>
            <p>החברה שומרת לעצמה את הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר. המשך שימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.</p>
          </section>
        </div>
      </div>
    </div>
  );
}