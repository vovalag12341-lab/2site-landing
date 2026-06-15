export default function FloatingCTA() {
  const waLink = "https://wa.me/972515967005";

  return (
    <>
      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-5 pt-3"
        style={{ background: "linear-gradient(to top, #07070f 60%, transparent)" }}>
        <a href="#contact"
          className="block w-full text-center cta-btn text-white font-black py-4 rounded-2xl text-base"
          style={{ boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}>
          לקבלת הצעה
        </a>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.5L4 29l7.75-1.813A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.87-.54-5.5-1.47l-.39-.23-4.6 1.08 1.1-4.48-.25-.4A9.93 9.93 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.47-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.19-.57-.34z"/>
        </svg>
      </a>
    </>
  );
}