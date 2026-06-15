import { MessageCircle, X, Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-5 pt-3"
        style={{ background: "linear-gradient(to top, #07070f 60%, transparent)" }}>
        <a href="#contact"
          className="block w-full text-center cta-btn text-white font-black py-4 rounded-2xl text-base"
          style={{ boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}>
          לקבלת הצעה
        </a>
      </div>

      {/* Floating contact button — desktop */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        {open && (
          <div className="absolute bottom-16 left-0 w-52 rounded-2xl p-4"
            style={{ background: "#0e0d1a", border: "1px solid rgba(124,58,237,0.2)", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
            <p className="text-white text-xs font-bold mb-3 text-right">צרו קשר</p>
            <a href="tel:+972501234567"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2">
              <Phone size={13} style={{ color: "#a78bfa" }} /> 050-000-0000
            </a>
            <a href="https://wa.me/972501234567" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors py-2">
              <MessageCircle size={13} style={{ color: "#a78bfa" }} /> WhatsApp
            </a>
          </div>
        )}
        <button onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 cta-btn"
          style={{ boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}>
          {open ? <X size={20} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
        </button>
      </div>
    </>
  );
}