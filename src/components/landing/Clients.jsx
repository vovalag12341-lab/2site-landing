const logos = [
  "נובה טק", "פרמה ישראל", "ביג דיל", "מנוף גרופ",
  "סקיי לינה", "גרינפוד", "ארבן סטייל", "פרופורמה",
  "קווליטי פלוס", "נקסטליין",
];

export default function Clients() {
  return (
    <section className="py-16 border-y border-white/5" style={{ background: "#070707" }}>
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-600 text-xs tracking-widest uppercase mb-10">
          מאמינים בנו מעל 150 עסקים בישראל
        </p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-gray-700 font-bold text-sm tracking-wide hover:text-gray-400 transition-colors duration-200 cursor-default select-none"
              style={{ letterSpacing: "0.1em" }}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}