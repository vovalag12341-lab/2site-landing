import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "חבילות", href: "#pricing" },
  { label: "פרויקטים", href: "#projects" },
  { label: "המלצות", href: "#reviews" },
  { label: "תהליך", href: "#process" },
  { label: "שאלות", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black brand-gradient-text">2site</a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="hidden md:block cta-btn text-white text-sm font-bold px-5 py-2.5 rounded-full">
          לקבלת הצעה
        </a>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-1"
          style={{ background: "rgba(7,7,15,0.97)", borderTop: "1px solid rgba(124,58,237,0.1)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-gray-300 hover:text-white text-base border-b transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.04)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-4 block text-center cta-btn text-white font-bold px-5 py-3.5 rounded-full">
            לקבלת הצעה
          </a>
        </div>
      )}
    </header>
  );
}