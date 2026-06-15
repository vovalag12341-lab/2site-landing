import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "מחירים", href: "#pricing" },
  { label: "פרויקטים", href: "#projects" },
  { label: "ביקורות", href: "#reviews" },
  { label: "תהליך", href: "#process" },
  { label: "שאלות", href: "#faq" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,160,23,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-black gradient-text">2site</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-400 hover:text-yellow-400 text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+972501234567"
          className="hidden md:flex items-center gap-2 shimmer-btn text-black text-sm font-bold px-5 py-2.5 rounded-full"
        >
          <Phone size={14} />
          התקשר עכשיו
        </a>

        {/* Mobile menu btn */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-900/30 px-6 pb-6 pt-2">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-yellow-400 text-base border-b border-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+972501234567"
            className="mt-4 flex items-center justify-center gap-2 shimmer-btn text-black font-bold px-5 py-3 rounded-full w-full"
          >
            <Phone size={14} />
            התקשר עכשיו
          </a>
        </div>
      )}
    </header>
  );
}