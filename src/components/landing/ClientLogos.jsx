import StableCarousel from "./StableCarousel";

const logos = [
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/2f1c9ef40_image.png", name: "שלמה" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/dbb5f351b_image.png", name: "Dive Assure" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/fa3f62b92_image.png", name: "בית הפנקייק" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/b03fde9da_image.png", name: "אלבר" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/24ffd08b2_image.png", name: "Albar logo 2" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/8f781817c_image.png", name: "Logo 4" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/4f6b97708_image.png", name: "Logo 5" },
  { img: "https://media.base44.com/images/public/6a2fb5817da3de73a8100bb8/d9c281d62_image.png", name: "Logo 8" },
  { name: "תלפיות" },
  { name: "Cardcom" },
  { name: "Homely" },
  { name: "Elysian", sub: "Softech" },
  { name: "מופון", sub: "ישראל" },
  { name: "ד״ר גילה", sub: "רוזן" },
  { name: "Top Safe" },
  { name: "Living", sub: "Group" },
  { name: "דרך", sub: "השף" },
  { name: "Global Diving", sub: "Tours" },
];

function LogoItem({ logo }) {
  if (logo.img) {
    return (
      <div style={{ width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={logo.img}
          alt={logo.name}
          loading="eager"
          draggable={false}
          style={{ maxHeight: "65px", maxWidth: "120px", width: "auto", height: "auto", objectFit: "contain", opacity: 0.85 }}
        />
      </div>
    );
  }
  return (
    <div style={{ width: "100%", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ padding: "8px 12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
        <div style={{ color: "#9ca3af", fontWeight: "700", fontSize: "14px", lineHeight: 1.2 }}>{logo.name}</div>
        {logo.sub && <div style={{ color: "#6b7280", fontWeight: "500", fontSize: "11px", lineHeight: 1.2 }}>{logo.sub}</div>}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <section className="py-14" style={{ background: "#07070f", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
        <p style={{ color: "#6b7280", fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: "500" }}>
          לקוחות מובילים שבחרו ב־2site
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-10">
        <StableCarousel
          items={logos}
          renderItem={(logo) => <LogoItem logo={logo} />}
          slidesPerView={{ mobile: 3, tablet: 5, desktop: 6 }}
          gap={12}
          autoplayDelay={3000}
          showArrows={false}
          showDots={false}
        />
      </div>
    </section>
  );
}