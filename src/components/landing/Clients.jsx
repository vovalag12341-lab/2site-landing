const logos = [
  "https://2site.co.il/wp-content/uploads/2025/03/shlomo.webp",
  "https://2site.co.il/wp-content/uploads/2026/04/תלפיות.webp",
  "https://2site.co.il/wp-content/uploads/2025/11/albar.webp",
  "https://2site.co.il/wp-content/uploads/2026/04/בית-הפנקייק.webp",
  "https://2site.co.il/wp-content/uploads/2025/03/cardcom.webp",
  "https://2site.co.il/wp-content/uploads/2025/03/dive.webp",
  "https://2site.co.il/wp-content/uploads/2026/04/homely.webp",
  "https://2site.co.il/wp-content/uploads/2025/01/meta.webp",
  "https://2site.co.il/wp-content/uploads/2025/01/google-1.webp",
  "https://2site.co.il/wp-content/uploads/2025/01/wix.webp",
  "https://2site.co.il/wp-content/uploads/2025/01/wordpresss.webp",
];

export default function Clients() {
  const doubled = [...logos, ...logos];
  
  return (
    <section className="py-14 overflow-hidden relative" style={{ background: "#000" }}>
      <div className="max-w-6xl mx-auto px-5 mb-7 text-center">
        <p style={{ color: "#6b7280", fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: "500" }}>
          לקוחות מובילים שבחרו ב־2site
        </p>
      </div>
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
        <div className="marquee-track gap-8 items-center py-2">
          {doubled.map((logoUrl, i) => (
            <div key={i} className="flex-shrink-0" style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease" }}>
              <img 
                src={logoUrl} 
                alt="client logo"
                loading="eager" 
                draggable={false}
                style={{ 
                  maxHeight: "60px", 
                  maxWidth: "140px", 
                  width: "auto", 
                  height: "auto", 
                  objectFit: "contain", 
                  filter: "grayscale(100%)",
                  opacity: 0.7,
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.opacity = "0.7";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}