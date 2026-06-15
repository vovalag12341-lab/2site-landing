import { useRef, useState } from "react";
import { ExternalLink, Clock } from "lucide-react";

// thum.io: free screenshot service, returns real page thumbnails
const thumb = (url) =>
  `https://image.thum.io/get/width/640/crop/480/${url}`;

const projects = [
  {
    name: "בית הפנקייק המקורי",
    type: "בניית אתרים",
    tag: "מסעדנות",
    url: "https://pancake.co.il",
    image: thumb("https://pancake.co.il"),
  },
  {
    name: "Elysian Softech",
    type: "בניית אתרים",
    tag: "טכנולוגיה",
    url: "https://elysian-softech.com",
    image: thumb("https://elysian-softech.com"),
  },
  {
    name: "הומלי",
    type: "בניית אתרים",
    tag: "ריהוט ועיצוב",
    url: "https://home-li.co.il",
    image: thumb("https://home-li.co.il"),
  },
  {
    name: "מופון ישראל",
    type: "בניית אתרים",
    tag: "שירותים",
    url: "https://mufonisrael.com",
    image: thumb("https://mufonisrael.com"),
  },
  {
    name: "ד״ר גילה רוזן | תזונת תינוקות",
    type: "בניית אתרים",
    tag: "בריאות",
    url: null,
    image: null,
  },
  {
    name: "Group Miller",
    type: "בניית אתרים",
    tag: "נדל״ן",
    url: "https://g-miller.net",
    image: thumb("https://g-miller.net"),
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
      {project.image && !imgError ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
          draggable={false}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(168,85,247,0.10) 50%, rgba(236,72,153,0.08) 100%)" }}>
          <div className="text-center px-4">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-white font-bold text-xs leading-tight">{project.name}</div>
            <div className="text-purple-400 text-xs mt-1">בניית אתרים</div>
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