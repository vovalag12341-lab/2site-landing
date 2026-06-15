import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }}
      >
        <a
          href="#contact"
          className="block w-full text-center shimmer-btn text-black font-black py-4 rounded-2xl text-base pulse-gold"
        >
          קבל הצעת מחיר חינם עכשיו →
        </a>
      </div>

      {/* Floating contact button — desktop */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        {open && (
          <div
            className="absolute bottom-14 left-0 rounded-2xl p-4 mb-2 w-52"
            style={{
              background: "#111",
              border: "1px solid rgba(212,160,23,0.2)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            <p className="text-white text-xs font-bold mb-3">דבר איתנו עכשיו</p>
            <a
              href="tel:+972501234567"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors py-1.5"
            >
              <Phone size={14} />
              050-000-0000
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors py-1.5"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
          style={{ background: "linear-gradient(135deg, #D4A017, #F5D06E)" }}
        >
          {open ? <X size={20} className="text-black" /> : <MessageCircle size={22} className="text-black" />}
        </button>
      </div>
    </>
  );
}