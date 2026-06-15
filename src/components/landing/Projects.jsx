import { useState } from "react";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "בוטיק מינימל",
    category: "חנות אונליין",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tag: "WooCommerce",
  },
  {
    title: "קליניקת פרימיום",
    category: "שירותי בריאות",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    tag: "WordPress",
  },
  {
    title: "משרד עורכי דין",
    category: "שירותים מקצועיים",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=600&q=80",
    tag: "Business",
  },
  {
    title: "מסעדת שף",
    category: "מזון ואירוח",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    tag: "Restaurant",
  },
  {
    title: "סטודיו יוגה",
    category: "כושר ובריאות",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80",
    tag: "Booking",
  },
  {
    title: "חברת נדל\"ן",
    category: "נדל\"ן",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tag: "Real Estate",
  },
];

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const visible = 3;

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(projects.length - visible, i + 1));

  const shown = projects.slice(idx, idx + visible);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: "#050505" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <div>
            <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-4">
              פרויקטים אחרונים
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              עבודות <span className="gradient-text">שמדברות</span> בעד עצמן
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={prev}
              disabled={idx === 0}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 hover:text-yellow-400 disabled:opacity-20 transition-all"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={next}
              disabled={idx >= projects.length - visible}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 hover:text-yellow-400 disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {shown.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: "#111" }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 right-0 p-5 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-yellow-400 text-xs font-semibold mb-1">{p.category}</div>
                    <h3 className="text-white font-bold text-lg">{p.title}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} className="text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-xs text-gray-300 px-3 py-1 rounded-full border border-white/10">
                {p.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex justify-center gap-3 mt-8 md:hidden">
          <button onClick={prev} disabled={idx === 0} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 disabled:opacity-20">
            <ChevronRight size={16} />
          </button>
          <button onClick={next} disabled={idx >= projects.length - 1} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-yellow-500/50 disabled:opacity-20">
            <ChevronLeft size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}