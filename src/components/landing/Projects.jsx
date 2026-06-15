import { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "בית הפנקייק המקורי",
    type: "אתר תדמית + תפריט",
    tag: "מסעדנות",
    url: "https://pancake.co.il",
    color: "#7c3aed",
    accent: "#a855f7",
  },
  {
    name: "Elysian Softech",
    type: "אתר תוכן + SEO",
    tag: "טכנולוגיה",
    url: "https://elysian-softech.com",
    color: "#6366f1",
    accent: "#818cf8",
  },
  {
    name: "הומלי",
    type: "אתר שירותים",
    tag: "ריהוט ועיצוב",
    url: "https://home-li.co.il",
    color: "#8b5cf6",
    accent: "#a78bfa",
  },
  {
    name: "מופון ישראל",
    type: "אתר תוכן מורחב",
    tag: "שירותים",
    url: "https://mufonisrael.com",
    color: "#7c3aed",
    accent: "#c084fc",
  },
  {
    name: "דרך השף / Food Steps",
    type: "אתר שירותי קייטרינג",
    tag: "קולינריה",
    url: "https://food-steps.co.il",
    color: "#ec4899",
    accent: "#f472b6",
  },
  {
    name: "Group Miller",
    type: "אתר תדמית עסקי",
    tag: "עסקים",
    url: "https://g-miller.net",
    color: "#a855f7",
    accent: "#c084fc",
  },
];

// Browser-style mockup thumbnail
function BrowserMockup({ project }) {
  return (
    <div className="w-full rounded-xl overflow-hidden"
      style={{ background: "#0a091a", border: `1px solid ${project.color}35` }}>
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#07060f", borderBottom: `1px solid ${project.color}20` }}>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 mx-2 px-2 py-0.5 rounded text-xs text-gray-600"
          style={{ background: "rgba(255,255,255,0.04)", fontSize: "9px" }}>
          {project.url.replace("https://", "")}
        </div>
      </div>
      {/* Page content mockup */}
      <div className="p-3">
        {/* Hero strip */}
        <div className="rounded-lg p-3 mb-2.5"
          style={{ background: `linear-gradient(120deg, ${project.color}22 0%, ${project.accent}12 100%)` }}>
          <div className="h-2 rounded mb-1.5" style={{ width: "55%", background: `${project.color}60` }} />
          <div className="h-1.5 rounded mb-1" style={{ width: "80%", background: "rgba(255,255,255,0.1)" }} />
          <div className="h-1.5 rounded mb-3" style={{ width: "65%", background: "rgba(255,255,255,0.07)" }} />
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-white" style={{ background: `${project.color}80`, fontSize: "8px", fontFamily: "'Heebo', sans-serif" }}>
            צרו קשר
          </div>
        </div>
        {/* Cards row */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-4 h-4 rounded-md mb-1.5 mx-auto" style={{ background: `${project.color}40` }} />
              <div className="h-1 rounded mx-auto" style={{ width: "80%", background: "rgba(255,255,255,0.08)" }} />
            </div>
          ))}
        </div>
        {/* Footer strip */}
        <div className="h-4 rounded-lg" style={{ background: `${project.color}15` }} />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 rounded-2xl overflow-hidden block"
      style={{
        width: "280px",
        background: "#0e0d1a",
        border: hovered ? `1px solid ${project.color}55` : "1px solid rgba(124,58,237,0.14)",
        boxShadow: hovered ? `0 0 35px ${project.color}22` : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative p-4 pb-3"
        style={{ background: `linear-gradient(135deg, ${project.color}12 0%, ${project.accent}07 100%)` }}>
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative">
          <BrowserMockup project={project} />
        </div>
        {/* Tag */}
        <div className="absolute top-3 right-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: `${project.color}80`, backdropFilter: "blur(8px)", fontSize: "10px" }}>
          {project.tag}
        </div>
      </div>

      {/* Info */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-sm mb-0.5 leading-tight">{project.name}</h3>
          <p className="text-gray-500 text-xs">{project.type}</p>
        </div>
        <div className="flex items-center gap-1 text-xs font-medium flex-shrink-0 mr-3 transition-all"
          style={{ color: hovered ? project.color : "#4b5563" }}>
          <span style={{ fontSize: "10px" }}>צפייה באתר</span>
          <ExternalLink size={11} />
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [paused, setPaused] = useState(false);

  // Duplicate for seamless loop
  const doubled = [...projects, ...projects, ...projects];

  // Touch/drag swipe
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
  const onMouseUp = () => { setIsDragging(false); };

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

  return (
    <section id="projects" className="py-24 overflow-hidden" style={{ background: "#05050d" }}>
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

      {/* Scrollable marquee container */}
      <div
        className="relative overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 7%, black 93%, transparent 100%)" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { if (!isDragging) setPaused(false); }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 py-4"
          style={{
            width: "max-content",
            animation: paused ? "none" : "marqueeProjects 36s linear infinite",
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
          {doubled.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeProjects {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * ${projects.length} - 20px * ${projects.length})); }
        }
      `}</style>
    </section>
  );
}