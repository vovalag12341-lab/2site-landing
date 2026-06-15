export default function Footer() {
  return (
    <footer
      className="py-12 px-6 border-t"
      style={{ background: "#030303", borderColor: "rgba(255,255,255,0.04)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-right">
            <div className="text-2xl font-black gradient-text mb-1">2site</div>
            <div className="text-gray-600 text-xs">בניית אתרי WordPress מקצועית</div>
          </div>

          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#pricing" className="hover:text-yellow-400 transition-colors">מחירים</a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">פרויקטים</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">צור קשר</a>
          </div>

          <div className="text-center">
            <div className="text-gray-600 text-xs">© {new Date().getFullYear()} 2site. כל הזכויות שמורות.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}