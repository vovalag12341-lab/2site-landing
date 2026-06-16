import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, RotateCcw, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";

const WA_PHONE = "972515967005";
const WA_MSG = encodeURIComponent("היי 2site, אשמח לקבל פרטים על בניית אתר במודל חבילות.");
const WA_LINK = `https://wa.me/${WA_PHONE}?text=${WA_MSG}`;

const STORAGE_KEY = "2site_chat_v1";

// ─── Flow definitions ────────────────────────────────────────────────────────

const INITIAL_MSG = {
  id: "init",
  role: "bot",
  text: "היי, אני העוזר הדיגיטלי של 2site 👋 אשמח לעזור לך להבין איזו חבילת אתר מתאימה לעסק שלך.",
  chips: [
    { label: "אני צריך אתר תדמית", action: "branding" },
    { label: "אני צריך אתר מכירות / קטלוג", action: "shop" },
    { label: "אני לא בטוח מה מתאים לי", action: "unsure" },
    { label: "רוצה שנציג יחזור אליי", action: "lead" },
  ],
};

const BOT_REPLIES = {
  branding: {
    text: "יש לנו מסלולי WordPress חודשיים החל מ־₪450 לחודש + מע״מ, כולל הקמה, עיצוב, אחסון ותחזוקה. לעסק שרוצה יותר עמודים ו־SEO יש גם מסלולים מתקדמים ב־₪900 ו־₪1,200 לחודש + מע״מ.",
    chips: [
      { label: "השאירו פרטים", action: "lead" },
      { label: "מה ההבדל בין החבילות?", action: "diff" },
      { label: "דברו איתי בוואטסאפ", action: "wa" },
    ],
  },
  shop: {
    text: "לעסקים שרוצים לקבל הזמנות, פניות או להציג קטלוג מוצרים, יש מסלול אתר מכירות/קטלוג החל מ־₪950 לחודש + מע״מ, כולל עיצוב, בנייה, ממשק ניהול, אחסון ותחזוקה.",
    chips: [
      { label: "השאירו פרטים", action: "lead" },
      { label: "מתאים לי אתר מכירות", action: "lead" },
      { label: "דברו איתי בוואטסאפ", action: "wa" },
    ],
  },
  diff: {
    text: "חבילת ₪450 — עד 5 עמודים, תדמית.\nחבילת ₪900 — עד 9 עמודים + SEO.\nחבילת ₪1,200 — Extra SEO מורחב.\nחבילת ₪950 — מכירות / קטלוג עד 4 עמודים.\n\nכל החבילות כוללות: WordPress, עיצוב, אחסון, תחזוקה, דומיין ללא עלות.",
    chips: [
      { label: "השאירו פרטים", action: "lead" },
      { label: "דברו איתי בוואטסאפ", action: "wa" },
    ],
  },
};

// Unsure flow — 3 questions
const UNSURE_STEPS = [
  {
    key: "goal",
    text: "מה המטרה העיקרית של האתר?",
    chips: ["תדמית", "לידים", "מכירות", "קטלוג", "לא בטוח"],
  },
  {
    key: "pages",
    text: "כמה עמודים בערך צריך?",
    chips: ["עד 5", "עד 9", "יותר מ־10", "לא יודע"],
  },
  {
    key: "existing",
    text: "יש לך כבר אתר קיים?",
    chips: ["כן", "לא", "צריך לשדרג אתר קיים"],
  },
];

function getRecommendation(answers) {
  const { goal, pages } = answers;
  if (goal === "מכירות" || goal === "קטלוג") {
    return "לפי הבחירות שלך, חבילת **אתר מכירות/קטלוג ב־₪950 לחודש** נשמעת הכי מתאימה. כוללת עיצוב, ממשק ניהול, אחסון ותחזוקה.";
  }
  if (pages === "עד 9" || pages === "יותר מ־10" || goal === "לידים") {
    return "לפי הבחירות שלך, חבילת **תוכן מורחב + SEO ב־₪900 לחודש** (או ₪1,200 עם Extra SEO) תתן לך את הכי הרבה ערך.";
  }
  return "לפי הבחירות שלך, חבילת **אתר תדמית ב־₪450 לחודש** מתאימה לך — עיצוב מקצועי, עד 5 עמודים, כולל הכל.";
}

// Lead form steps
const LEAD_FIELDS = [
  { key: "fullName", label: "מה שמך המלא?", placeholder: "ישראל ישראלי", type: "text" },
  { key: "phone", label: "מה מספר הטלפון שלך?", placeholder: "050-0000000", type: "tel" },
  { key: "businessName", label: "שם העסק שלך?", placeholder: "שם החברה / עסק", type: "text" },
  { key: "businessField", label: "מה תחום העסק?", placeholder: "נדל״ן, בריאות, מסעדנות...", type: "text" },
  { key: "message", label: "הודעה חופשית (אופציונלי):", placeholder: "ספר לנו עוד...", type: "text", optional: true },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function SalesChat() {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [chips, setChips] = useState([]);
  const [phase, setPhase] = useState("idle"); // idle | chat | unsure | lead | done
  const [unsureStep, setUnsureStep] = useState(0);
  const [unsureAnswers, setUnsureAnswers] = useState({});
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState({});
  const [inputVal, setInputVal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [websiteType, setWebsiteType] = useState("");
  const bottomRef = useRef(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { messages: m, phase: p, chips: c, unsureStep: us, unsureAnswers: ua, leadStep: ls, leadData: ld, websiteType: wt } = JSON.parse(saved);
        if (m?.length) {
          setMessages(m); setPhase(p || "chat"); setChips(c || []);
          setUnsureStep(us || 0); setUnsureAnswers(ua || {});
          setLeadStep(ls || 0); setLeadData(ld || {}); setWebsiteType(wt || "");
          return;
        }
      }
    } catch {}
    initChat();
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (messages.length === 0) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, phase, chips, unsureStep, unsureAnswers, leadStep, leadData, websiteType }));
    } catch {}
  }, [messages, phase, chips, unsureStep, unsureAnswers, leadStep, leadData, websiteType]);

  // Badge after 4s
  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, chips]);

  function initChat() {
    setMessages([{ role: "bot", text: INITIAL_MSG.text }]);
    setChips(INITIAL_MSG.chips);
    setPhase("chat");
    setUnsureStep(0); setUnsureAnswers({});
    setLeadStep(0); setLeadData({});
    setWebsiteType("");
  }

  function addMsg(role, text) {
    setMessages(prev => [...prev, { role, text }]);
  }

  function botReply(text, nextChips = []) {
    setTyping(true);
    setChips([]);
    setTimeout(() => {
      setTyping(false);
      addMsg("bot", text);
      setChips(nextChips);
    }, 900);
  }

  function handleChip(chip) {
    setShowBadge(false);
    const { label, action } = chip;
    addMsg("user", label);
    setChips([]);

    if (action === "wa") {
      window.open(WA_LINK, "_blank");
      botReply("פתחתי את הוואטסאפ עבורך 👋 נשמח לענות שם!");
      return;
    }
    if (action === "lead") {
      setWebsiteType(prev => prev || label);
      startLead();
      return;
    }
    if (action === "unsure") {
      setPhase("unsure");
      setUnsureStep(0);
      botReply(UNSURE_STEPS[0].text, UNSURE_STEPS[0].chips.map(c => ({ label: c, action: `unsure_${c}` })));
      return;
    }
    if (BOT_REPLIES[action]) {
      const r = BOT_REPLIES[action];
      botReply(r.text, r.chips);
      return;
    }
    if (action?.startsWith("unsure_")) {
      handleUnsureAnswer(label);
      return;
    }
  }

  function handleUnsureAnswer(label) {
    const step = UNSURE_STEPS[unsureStep];
    const newAnswers = { ...unsureAnswers, [step.key]: label };
    setUnsureAnswers(newAnswers);

    if (unsureStep < UNSURE_STEPS.length - 1) {
      const next = unsureStep + 1;
      setUnsureStep(next);
      botReply(UNSURE_STEPS[next].text, UNSURE_STEPS[next].chips.map(c => ({ label: c, action: `unsure_${c}` })));
    } else {
      // Final recommendation
      const rec = getRecommendation(newAnswers);
      setPhase("chat");
      botReply(rec, [
        { label: "השאירו פרטים", action: "lead" },
        { label: "דברו איתי בוואטסאפ", action: "wa" },
      ]);
    }
  }

  function startLead() {
    setPhase("lead");
    setLeadStep(0);
    setLeadData({});
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      addMsg("bot", LEAD_FIELDS[0].label);
    }, 700);
  }

  async function handleLeadInput(e) {
    e.preventDefault();
    const val = inputVal.trim();
    const field = LEAD_FIELDS[leadStep];
    if (!val && !field.optional) return;

    addMsg("user", val || "—");
    const newData = { ...leadData, [field.key]: val };
    setLeadData(newData);
    setInputVal("");

    if (leadStep < LEAD_FIELDS.length - 1) {
      const next = leadStep + 1;
      setLeadStep(next);
      botReply(LEAD_FIELDS[next].label);
    } else {
      // Submit
      setSubmitting(true);
      setTyping(true);
      setChips([]);
      try {
        await base44.entities.LandingLead.create({
          fullName: newData.fullName || "",
          phone: newData.phone || "",
          businessName: newData.businessName || "",
          businessField: newData.businessField || "",
          websiteType: websiteType || "לא צוין",
          message: newData.message || "",
          source: "chatbot",
        });
      } catch {}
      setTyping(false);
      setSubmitting(false);
      setPhase("done");
      addMsg("bot", "מעולה, קיבלנו את הפרטים 🙌 נציג של 2site יחזור אליך עם המלצה לחבילה המתאימה.");
      setChips([{ label: "דברו איתי בוואטסאפ", action: "wa" }]);
    }
  }

  function resetChat() {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setChips([]);
    setPhase("idle");
    setUnsureStep(0); setUnsureAnswers({});
    setLeadStep(0); setLeadData({});
    setInputVal(""); setWebsiteType("");
    setTimeout(initChat, 50);
  }

  const showInput = phase === "lead" && !submitting;

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => { setOpen(true); setShowBadge(false); }}
        aria-label="פתח צ'אט"
        style={{
          position: "fixed",
          bottom: "96px",
          right: "16px",
          zIndex: 9999,
          background: "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)",
          border: "none",
          borderRadius: "50px",
          padding: "14px 20px",
          display: open ? "none" : "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(124,58,237,0.5)",
          color: "#fff",
          fontFamily: "'Heebo', sans-serif",
          fontWeight: "700",
          fontSize: "14px",
          direction: "rtl",
          // Mobile: icon only
          "@media (max-width: 640px)": {
            padding: "14px",
            borderRadius: "50%",
            gap: "0",
            width: "56px",
            height: "56px",
            display: open ? "none" : "flex",
            justifyContent: "center",
          }
        }}
        className="chat-button"
      >
        <MessageCircle size={18} className="chat-icon" />
        <span className="chat-text">צריכים עזרה?</span>
        {showBadge && (
          <span style={{
            position: "absolute",
            top: "-8px",
            left: "-8px",
            background: "#ec4899",
            color: "#fff",
            fontSize: "10px",
            fontWeight: "700",
            borderRadius: "50%",
            width: "12px",
            height: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(236,72,153,0.5)",
          }} />
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div
          dir="rtl"
          style={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            zIndex: 9999,
            width: "clamp(320px, 95vw, 380px)",
            height: "clamp(400px, 85vh, 560px)",
            background: "#ffffff",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 16px 60px rgba(124,58,237,0.18), 0 2px 8px rgba(0,0,0,0.08)",
            animation: "chatSlideUp 0.28s ease",
            overflow: "hidden",
            fontFamily: "'Heebo', sans-serif",
          }}
        >
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg,#7c3aed,#a855f7,#ec4899)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "900", fontSize: "11px", color: "#fff", flexShrink: 0,
              }}>2S</div>
              <div>
                <div style={{ color: "#fff", fontWeight: "800", fontSize: "14px", lineHeight: 1.2 }}>
                  העוזר הדיגיטלי של 2site
                </div>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "11px", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  זמין עכשיו
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              <button onClick={resetChat} title="איפוס שיחה"
                style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "6px", cursor: "pointer", color: "#fff", display: "flex" }}>
                <RotateCcw size={14} />
              </button>
              <button onClick={() => setOpen(false)}
                style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "8px", padding: "6px", cursor: "pointer", color: "#fff", display: "flex" }}>
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-start" : "flex-end" }}>
                <div style={{
                  maxWidth: "82%",
                  padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  ...(msg.role === "user"
                    ? { background: "linear-gradient(135deg,#7c3aed,#a855f7)", color: "#fff" }
                    : { background: "#f8f7ff", border: "1px solid rgba(124,58,237,0.12)", color: "#1f2937" }
                  ),
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ background: "#f8f7ff", border: "1px solid rgba(124,58,237,0.12)", borderRadius: "4px 16px 16px 16px", padding: "12px 16px", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", display: "inline-block", animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Chips */}
            {!typing && chips.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "flex-end", marginTop: "4px" }}>
                {chips.map((chip, i) => (
                  <button key={i} onClick={() => handleChip(chip)} style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    borderRadius: "50px",
                    padding: "7px 14px",
                    color: "#c084fc",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontFamily: "'Heebo', sans-serif",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                    onMouseEnter={e => { e.target.style.background = "rgba(124,58,237,0.25)"; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(124,58,237,0.1)"; e.target.style.color = "#c084fc"; }}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          {showInput && (
            <form onSubmit={handleLeadInput} style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(124,58,237,0.1)",
              background: "#fff",
              display: "flex",
              gap: "8px",
              flexShrink: 0,
            }}>
              <input
                autoFocus
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                placeholder={LEAD_FIELDS[leadStep]?.placeholder || "הקלד..."}
                type={LEAD_FIELDS[leadStep]?.type || "text"}
                style={{
                  flex: 1,
                  background: "#f8f7ff",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  color: "#111827",
                  fontSize: "13px",
                  fontFamily: "'Heebo', sans-serif",
                  outline: "none",
                  direction: "rtl",
                }}
              />
              <button type="submit" style={{
                background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                border: "none",
                borderRadius: "12px",
                padding: "10px 14px",
                cursor: "pointer",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}>
                <Send size={15} />
              </button>
            </form>
          )}

          {/* Optional: skip for optional field */}
          {showInput && LEAD_FIELDS[leadStep]?.optional && (
            <button onClick={() => { setInputVal(""); handleLeadInput({ preventDefault: () => {} }); }}
              style={{ background: "none", border: "none", color: "#6b7280", fontSize: "11px", paddingBottom: "10px", cursor: "pointer", fontFamily: "'Heebo', sans-serif" }}>
              דלג על שאלה זו
            </button>
          )}
        </div>
      )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30%            { transform: translateY(-4px); opacity: 1; }
        }
        @media (max-width: 640px) {
          .chat-text { display: none; }
          .chat-button { width: 56px; height: 56px; padding: 14px; gap: 0; justify-content: center; border-radius: 50%; }
        }
      `}</style>
    </>
  );
}