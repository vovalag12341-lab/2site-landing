import { useState } from "react";

const projects = [
  {
    name: "בית הפנקייק המקורי",
    category: "אתר הזמנות",
    image: "https://2site.co.il/wp-content/uploads/2026/04/pancake.webp",
    url: "https://2site.co.il/works/בית-הפנקייק-המקורי-אתר-הזמנות-חדש/"
  },
  {
    name: "הומלי",
    category: "בניית אתרים",
    image: "https://2site.co.il/wp-content/uploads/2025/12/homely.webp",
    url: "https://home-li.co.il"
  },
  {
    name: "Nadlan FL",
    category: "נדל\"ן",
    image: "https://2site.co.il/wp-content/uploads/2026/02/flnadlan.webp",
    url: "https://nadlan-fl.co.il"
  },
  {
    name: "G-Miller",
    category: "נדל\"ן",
    image: "https://2site.co.il/wp-content/uploads/2025/02/new-millerz-1024x1013.avif",
    url: "https://g-miller.net/"
  },
  {
    name: "מופון ישראל",
    category: "אתר תדמית",
    image: "https://2site.co.il/wp-content/uploads/2026/04/Gemini_Generated_Image_9x50g99x50g99x50_800x800.jpg",
    url: "https://2site.co.il/works/מופון-ישראל/"
  },
  {
    name: "עידית בן דב – עיצוב פנים",
    category: "בניית אתרים",
    image: "https://2site.co.il/wp-content/uploads/2025/11/idit-brn-dov.webp",
    url: "http://iditbendov.co.il"
  },
  {
    name: "Orocosmetics",
    category: "חנות אונליין",
    image: "https://2site.co.il/wp-content/uploads/2025/02/oriyan.webp",
    url: "https://orocosmetics.co.il/"
  },
  {
    name: "Atheno Group",
    category: "בניית אתרים",
    image: "https://2site.co.il/wp-content/uploads/2025/11/atheno-group.webp",
    url: "https://athenogroup.gr/"
  }
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", textDecoration: "none" }}>
      <div
        style={{
          width: "280px",
          height: "360px",
          background: "#111",
          border: hovered ? "1px solid rgba(124,58,237,0.4)" : "1px solid rgba(124,58,237,0.12)",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          transform: hovered ? "translateY(-8px)" : "translateY(0)",
          transition: "all 0.3s ease",
          flexShrink: 0,
          cursor: "pointer",
          boxShadow: hovered ? "0 12px 40px rgba(124,58,237,0.2)" : "0 2px 12px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image section (top 60%) */}
        <div style={{ width: "100%", height: "216px", overflow: "hidden", background: "#000" }}>
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.name}
              loading="eager"
              draggable={false}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transition: "transform 0.3s ease",
                transform: hovered ? "scale(1.05)" : "scale(1)"
              }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(124,58,237,0.18), rgba(236,72,153,0.08))" }}>
              <div style={{ textAlign: "center", padding: "0 16px" }}>
                <div style={{ fontSize: "40px", marginBottom: "8px" }}>🌐</div>
              </div>
            </div>
          )}
        </div>

        {/* Content section (bottom 40%) */}
        <div style={{ width: "100%", height: "144px", padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px", lineHeight: 1.3, marginBottom: "6px" }}>
              {project.name}
            </div>
            <div style={{ display: "inline-block", padding: "4px 10px", background: "rgba(124,58,237,0.15)", borderRadius: "6px", color: "#a78bfa", fontSize: "11px", fontWeight: "600" }}>
              {project.category}
            </div>
          </div>
          <div style={{ color: "#a78bfa", fontSize: "12px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px" }}>
            <span>לצפייה בפרוייקט ←</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const [autoplay, setAutoplay] = useState(true);
  const doubled = [...projects, ...projects];

  return (
    <section id="projects" className="pt-24 pb-12" style={{ background: "linear-gradient(180deg, #f3f0ff 0%, #f8f7ff 100%)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12 text-center">
        <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)", color: "#7c3aed" }}>
          עבודות אחרונות שלנו
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900">
          עבודות אחרונות <span className="brand-gradient-text">שלנו</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 overflow-hidden">
        <div 
          style={{
            display: "flex",
            gap: "20px",
            animation: autoplay ? "scrollProjects 40s linear infinite" : "none",
            width: "fit-content",
          }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {doubled.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollProjects {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * ${projects.length} - 20px * ${projects.length}));
          }
        }
      `}</style>
    </section>
  );
}