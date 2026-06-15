import { useRef, useState } from "react";
import { ExternalLink, Clock } from "lucide-react";

const projects = [
  {
    name: "בית הפנקייק המקורי",
    type: "בניית אתרים",
    tag: "מסעדנות",
    url: "https://pancake.co.il",
    image: "https://ugc.base44.com/prod/attachments/2d90e7d3-9ba7-4d66-9e9f-98cf8a9c0f40_Screenshot%202025-05-21%20at%2014.09.31.png",
  },
  {
    name: "Elysian Softech",
    type: "בניית אתרים",
    tag: "טכנולוגיה",
    url: "https://elysian-softech.com",
    image: "https://ugc.base44.com/prod/attachments/b02d2040-64d4-4b22-a6b0-aa5a1a2f7c3e_Screenshot%202025-05-21%20at%2014.10.00.png",
  },
  {
    name: "הומלי",
    type: "בניית אתרים",
    tag: "ריהוט ועיצוב",
    url: "https://home-li.co.il",
    image: "https://ugc.base44.com/prod/attachments/c1a5f9b8-2f3e-4d1a-8e7c-6b5d3f2a1e9d_Screenshot%202025-05-21%20at%2014.10.15.png",
  },
  {
    name: "מופון ישראל",
    type: "בניית אתרים",
    tag: "שירותים",
    url: "https://mufonisrael.com",
    image: "https://ugc.base44.com/prod/attachments/d3e7f1a2-5c8b-4e9d-b6a0-7f2c1d8e3f4a_Screenshot%202025-05-21%20at%2014.10.30.png",
  },
  {
    name: "האקדמיה לתזונת תינוקות | ד״ר גילה רוזן",
    type: "בניית אתרים",
    tag: "בריאות",
    url: null,
    image: "https://ugc.base44.com/prod/attachments/e4f8a2b3-6d9c-4f0e-c7b1-8a3d2e9f4a5b_Screenshot%202025-05-21%20at%2014.10.45.png",
  },
  {
    name: "Group Miller",
    type: "בניית אתרים",
    tag: "עסקים",
    url: "https://g-miller.net",
    image: "https://ugc.base44.com/prod/attachments/f5a9b3c4-7e0d-4a1f-d8c2-9b4e3f0a5b6c_Screenshot%202025-05-21%20at%2014.11.00.png",
  },
];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cardContent = (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden relative"
      style={{
        width: "300px",
        height: "220px",
        background: "#0e0d1a",
        border: hovered
          ? "1px solid rgba(124,58,237,0.5)"
          : "1px solid rgba(124,58,237,0.14)",
        boxShadow: hovered ? "0 0 40px rgba(124,58,237,0.2)" : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: project.url ? "pointer" : "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Screenshot thumbnail */}
      {!imgError ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
          draggable={false}
        />
      ) : (
        /* Fallback mockup if image fails */
        <div className="w-full h-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(99,102,241,0.08) 100%)" }}>
          <div className="text-center px-4">
            <div className="text-4xl mb-3">🖥️</div>
            <div className="text-white font-bold text-sm">{project.name}</div>
          </div>
        </div>
      )}

      {/* Dark gradient overlay at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(7,7,15,0.97) 0%, rgba(7,7,15,0.55) 40%, rgba(7,7,15,0.08) 70%, transparent 100%)",
        }}
      />

      {/* Tag top-right */}
      <div
        className="absolute top-3 right-3 text-white font-semibold px-2.5 py-1 rounded-full"
        style={{
          background: "rgba(124,58,237,0.75)",
          backdropFilter: "blur(8px)",
          fontSize: "10px",
          border: "1px solid rgba(167,139,250,0.3)",
        }}
      >
        {project.tag}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-end justify-between">
        <div>
          <h3 className="text-white font-bold text-sm leading-tight mb-0.5">{project.name}</h3>
          <p className="text-gray-400" style={{ fontSize: "11px" }}>{project.type}</p>
        </div>

        {project.url ? (
          <div
            className="flex items-center gap-1 flex-shrink-0 mr-2 transition-all"
            style={{ color: hovered ? "#a78bfa" : "#6b7280", fontSize: "10px" }}
          >
            <span>צפייה באתר החי</span>
            <ExternalLink size={10} />
          </div>
        ) : (
          <div
            className="flex items-center gap-1 flex-shrink-0 mr-2"
            style={{ color: "#4b5563", fontSize: "10px" }}
          >
            <Clock size={10} />
            <span>קישור יתווסף בקרוב</span>
          </div>
        )}
      </div>
    </div>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
        style={{ textDecoration: "none" }}
      >
        {cardContent}
      </a>
    );
  }

  return <div className="flex-shrink-0">{cardContent}</div>;
}

export default function Projects() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [paused, setPaused] = useState(false);

  const tripled = [...projects, ...projects, ...projects];

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    setPaused(true);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(trackRef.current.scrollLeft);
    setPaused(true);
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onTouchEnd = () => setPaused(false);

  const cardW = 300;
  const gap = 20;
  const totalWidth = projects.length * (cardW + gap);

  return (
    <section id="projects" className="py-24 overflow-hidden" style={{ background: "#05050d" }}>
      <div className="max-w-6xl mx-auto px-5 mb-12">
        <div className="text-center">
          <div
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa" }}
          >
            פרויקטים אחרונים
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            פרויקטים אחרונים <span className="brand-gradient-text">שבנינו</span>
          </h2>
          <p className="text-gray-600 text-sm mt-3">לחץ על כרטיס לצפייה באתר החי</p>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { if (!isDragging) setPaused(false); }}
      >
        <div
          ref={trackRef}
          className="flex py-4"
          style={{
            gap: `${gap}px`,
            width: "max-content",
            animation: paused ? "none" : `marqueeProjects ${projects.length * 6}s linear infinite`,
            cursor: isDragging ? "grabbing" : "grab",
            overflowX: "hidden",
            userSelect: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {tripled.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeProjects {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>
    </section>
  );
}