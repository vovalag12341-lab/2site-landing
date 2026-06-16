export default function Footer() {
  return (
    <footer className="py-10 px-5"
      style={{ background: "#0a091a", borderTop: "1px solid rgba(124,58,237,0.12)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="text-right">
          <img src="https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/a96e9efdd_2site_logo_transparent_cropped.png" alt="2site" style={{ height: "60px", width: "auto", objectFit: "contain" }} />
        </div>
        <div className="flex gap-7 text-sm text-gray-600">
          <a href="#pricing" className="hover:text-gray-200 transition-colors">חבילות</a>
          <a href="#projects" className="hover:text-gray-200 transition-colors">פרויקטים</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">צור קשר</a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 text-xs text-gray-600">
            <a href="/accessibility" className="hover:text-gray-200 transition-colors">הצהרת נגישות</a>
            <a href="/privacy" className="hover:text-gray-200 transition-colors">מדיניות פרטיות</a>
          </div>
          <div className="text-gray-700 text-xs">
            © {new Date().getFullYear()} 2site. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
}