import { useState } from "react";
import { X, Accessibility, ZoomIn, ZoomOut, Type, Contrast, MousePointer2, RotateCcw } from "lucide-react";

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [bigCursor, setBigCursor] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 130);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    document.body.classList.toggle("high-contrast", next);
  };

  const toggleCursor = () => {
    const next = !bigCursor;
    setBigCursor(next);
    document.body.classList.toggle("big-cursor", next);
  };

  const toggleLinks = () => {
    const next = !underlineLinks;
    setUnderlineLinks(next);
    document.body.classList.toggle("underline-links", next);
  };

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    setBigCursor(false);
    setUnderlineLinks(false);
    document.documentElement.style.fontSize = "100%";
    document.body.classList.remove("high-contrast", "big-cursor", "underline-links");
  };

  const btnClass = (active) =>
    `flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl text-xs font-medium transition-all ${
      active
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;
  const btnStyle = (active) => ({
    background: active ? "rgba(124,58,237,0.35)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${active ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.08)"}`,
  });

  return (
    <>
      <style>{`
        .high-contrast { filter: contrast(1.5) brightness(1.1); }
        .big-cursor, .big-cursor * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M8 2 L8 26 L14 20 L18 30 L21 29 L17 19 L25 19 Z' fill='white' stroke='black' stroke-width='1.5'/%3E%3C/svg%3E") 0 0, auto !important; }
        .underline-links a { text-decoration: underline !important; }
      `}</style>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="פתח תפריט נגישות"
        className="fixed left-5 z-[9998] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105 bottom-40 md:bottom-24"
        style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)", boxShadow: "0 4px 20px rgba(124,58,237,0.5)" }}
      >
        <Accessibility size={20} className="text-white" />
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-40 left-5 z-[9998] w-64 rounded-2xl p-4 shadow-2xl"
          style={{ background: "#0e0d1a", border: "1px solid rgba(124,58,237,0.3)", boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
          role="dialog"
          aria-label="תפריט נגישות"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-sm">נגישות</h2>
            <button onClick={() => setOpen(false)} aria-label="סגור" className="text-gray-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Font size */}
          <div className="mb-3">
            <p className="text-gray-500 text-xs mb-2">גודל טקסט</p>
            <div className="flex items-center gap-2">
              <button onClick={decreaseFontSize} aria-label="הקטן טקסט"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <ZoomOut size={14} /> הקטן
              </button>
              <span className="text-white text-xs font-bold w-10 text-center">{fontSize}%</span>
              <button onClick={increaseFontSize} aria-label="הגדל טקסט"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-all"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <ZoomIn size={14} /> הגדל
              </button>
            </div>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button onClick={toggleContrast} aria-pressed={highContrast} className={btnClass(highContrast)} style={btnStyle(highContrast)}>
              <Contrast size={18} />
              ניגודיות
            </button>
            <button onClick={toggleCursor} aria-pressed={bigCursor} className={btnClass(bigCursor)} style={btnStyle(bigCursor)}>
              <MousePointer2 size={18} />
              סמן גדול
            </button>
            <button onClick={toggleLinks} aria-pressed={underlineLinks} className={btnClass(underlineLinks)} style={btnStyle(underlineLinks)}>
              <Type size={18} />
              קישורים
            </button>
          </div>

          {/* Reset */}
          <button onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs text-gray-500 hover:text-white transition-all"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <RotateCcw size={13} /> איפוס הגדרות
          </button>
        </div>
      )}
    </>
  );
}