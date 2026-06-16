import { useState } from "react";
import { ExternalLink, Clock } from "lucide-react";

const projects = [
  {
    name: "בית הפנקייק המקורי",
    type: "בניית אתרים",
    tag: "מסעדנות",
    url: "https://pancake.co.il",
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/fcde9c6ea_Screenshot2026-06-15at125508.png",
  },
  {
    name: "Elysian Softech",
    type: "בניית אתרים",
    tag: "טכנולוגיה",
    url: "https://elysian-softech.com",
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/187f67026_Screenshot2026-06-15at125516.png",
  },
  {
    name: "הומלי",
    type: "בניית אתרים",
    tag: "נדל״ן",
    url: "https://home-li.co.il",
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/a32d2444a_Screenshot2026-06-15at125522.png",
  },
  {
    name: "מופון ישראל",
    type: "בניית אתרים",
    tag: "שירותים",
    url: "https://mufonisrael.com",
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/6fef46525_Screenshot2026-06-15at125537.png",
  },
  {
    name: "האקדמיה לתזונת תינוקות | ד״ר גילה רוזן",
    type: "בניית אתרים",
    tag: "בריאות",
    url: null,
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/83c569b75_Screenshot2026-06-15at125543.png",
  },
  {
    name: "Group Miller",
    type: "בניית אתרים",
    tag: "נדל״ן",
    url: "https://g-miller.net",
    image: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/52d7e79db_Screenshot2026-06-15at125548.png",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cardContent = (
    <div
      style={{
        flex: "0 0 auto",
        width: "300px",
        height: "220px",
        background: "#0e0d1a",
        border: hovered ? "1px solid rgba(124,58,237,0.5)" : "1px solid rgba(124,58,237,0.14)",
        boxShadow: hovered ? "0 0 40px rgba(124,58,237,0.2)" : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: project.url ? "pointer" : "default",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.image && !imgError ? (
        <img
          src={project.image}
          alt={project.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          onError={() => setImgError(true)}
          draggable={false}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.10) 50%, rgba(236,72,153,0.08) 100%)" }}>
          <div style={{ textAlign: "center", padding: "0 16px" }}>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>🌐</div>
            <div style={{ color: "#fff", fontWeight: "700", fontSize: "12px", lineHeight: 1.3 }}>{project.name}</div>
            <div style={{ color: "#a78bfa", fontSize: "12px", marginTop: "4px" }}>בניית אתרים</div>
          </div>
        </div>
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,7,15,0.97) 0%, rgba(7,7,15,0.55) 40%, rgba(7,7,15,0.08) 70%, transparent 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: "700", fontSize: "13px", lineHeight: 1.3, marginBottom: "2px" }}>{project.name}</div>
          <div style={{ color: "#9ca3af", fontSize: "11px" }}>{project.type}</div>
        </div>
        {project.url ? (
          <div style={{ color: hovered ? "#a78bfa" : "#6b7280", fontSize: "10px", display: "flex", alignItems: "center", gap: "4px", flexShrink: 0, marginRight: "8px" }}>
            <span>צפייה באתר החי</span>
            <ExternalLink size={10} />
          </div>
        ) : (
          <div style={{ color: "#4b5563", fontSize: "10px", display: "flex", alignItems: "center", gap: "4px", flexShrink: 0, marginRight: "8px" }}>
            <Clock size={10} />
            <span>קישור יתווסף בקרוב</span>
          </div>
        )}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ flex: "0 0 auto", textDecoration: "none" }}>
        {cardContent}
      </a>
    );
  }
  return <div style={{ flex: "0 0 auto" }}>{cardContent}</div>;
}

// Duplicate the set twice — track = 2 identical halves, animate -50% to loop seamlessly
const doubled = [...projects, ...projects];

export default function Projects() {
  return (
    <section id="projects" className="py-24" style={{ background: "#05050d", overflow: "hidden" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12">
        <div className="text-center">
          <div className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}>
            פרויקטים אחרונים
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            פרויקטים אחרונים <span className="brand-gradient-text">שבנינו</span>
          </h2>
          <p className="text-gray-600 text-sm mt-3">לחץ על כרטיס לצפייה באתר החי</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          maskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
      >
        <div
          className="projects-track"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "20px",
            width: "max-content",
            willChange: "transform",
            userSelect: "none",
            padding: "16px 0",
          }}
        >
          {doubled.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>

      <style>{`
        @keyframes projectsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .projects-track {
          animation: projectsMarquee 30s linear infinite;
        }
        @media (hover: hover) {
          .projects-track:hover { animation-play-state: paused; }
        }
        @media (prefers-reduced-motion: reduce) {
          .projects-track { animation: none; }
        }
      `}</style>
    </section>
  );
}