const projects = [
  { name: "בית הפנקייק המקורי", type: "אתר תדמית + מנו", tag: "מסעדנות", color: "#7c3aed" },
  { name: "Elysian Softech", type: "אתר תוכן + SEO", tag: "טכנולוגיה", color: "#a855f7" },
  { name: "הומלי", type: "אתר שירותים", tag: "ריהוט ועיצוב", color: "#6366f1" },
  { name: "מופון ישראל", type: "אתר תוכן מורחב", tag: "שירותים", color: "#8b5cf6" },
  { name: "ד״ר גילה רוזן", type: "אתר קליניקה", tag: "בריאות", color: "#a78bfa" },
  { name: "Group Miller", type: "אתר תדמית", tag: "עסקים", color: "#7c3aed" },
  { name: "Nadlan FL", type: "אתר נדל״ן + SEO", tag: "נדל״ן", color: "#ec4899" },
  { name: "דרך השף", type: "אתר שירותי קייטרינג", tag: "קולינריה", color: "#f472b6" },
  { name: "Top Safe", type: "אתר תוכן + לידים", tag: "ביטחון", color: "#c084fc" },
  { name: "Living Group Webinars", type: "אתר ווביניארים", tag: "חינוך", color: "#818cf8" },
];

// Visual mockup card per project
function ProjectCard({ project }) {
  const initials = project.name.slice(0, 2);
  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden cursor-default select-none"
      style={{
        width: "260px",
        background: "#0e0d1a",
        border: "1px solid rgba(124,58,237,0.15)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.color}60`;
        e.currentTarget.style.boxShadow = `0 0 30px ${project.color}20`;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(124,58,237,0.15)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Thumbnail area */}
      <div className="relative h-36 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}08 100%)` }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Mock browser */}
        <div className="relative w-36 rounded-lg overflow-hidden"
          style={{ background: "#12111e", border: `1px solid ${project.color}30` }}>
          <div className="flex items-center gap-1 px-2 py-1.5" style={{ background: "#0a091a" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          </div>
          <div className="p-2">
            <div className="h-6 w-full rounded mb-1.5"
              style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }} />
            <div className="h-1.5 w-full rounded mb-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="h-1.5 w-3/4 rounded mb-1" style={{ background: "rgba(255,255,255,0.05)" }} />
            <div className="grid grid-cols-3 gap-1 mt-2">
              {[0,1,2].map(i => (
                <div key={i} className="h-5 rounded" style={{ background: `${project.color}20` }} />
              ))}
            </div>
          </div>
        </div>
        {/* Tag badge */}
        <div className="absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
          style={{ background: `${project.color}70`, backdropFilter: "blur(8px)" }}>
          {project.tag}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-sm mb-1">{project.name}</h3>
        <p className="text-gray-500 text-xs">{project.type}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const doubled = [...projects, ...projects];

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
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div className="marquee-track gap-5 py-2">
          {doubled.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}