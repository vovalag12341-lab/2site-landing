import { useState } from "react";
import LoadingScreen from "@/components/landing/LoadingScreen";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Pricing from "@/components/landing/Pricing";
import Projects from "@/components/landing/Projects";
import Benefits from "@/components/landing/Benefits";
import Reviews from "@/components/landing/Reviews";
import Process from "@/components/landing/Process";
import FAQ from "@/components/landing/FAQ";
import LeadForm from "@/components/landing/LeadForm";
import FloatingCTA from "@/components/landing/FloatingCTA";
import SalesChat from "@/components/landing/SalesChat";
import AccessibilityWidget from "@/components/landing/AccessibilityWidget";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <div dir="rtl" style={{ background: "#07070f", minHeight: "100vh" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
        {/* Video header - mobile only (Shorts) */}
        <div className="block md:hidden w-full relative" style={{ background: "#000", lineHeight: 0 }}>
          <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
            <iframe
              src={`https://www.youtube.com/embed/Yb1z4YMmi64?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=Yb1z4YMmi64&controls=0&showinfo=0&rel=0&modestbranding=1`}
              title="2site mobile video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          <button
            onClick={() => setMuted(!muted)}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: muted ? "rgba(124,58,237,0.85)" : "rgba(0,0,0,0.7)",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: "50px",
              padding: "12px 28px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backdropFilter: "blur(10px)",
              zIndex: 10,
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {muted ? "🔇 הסר השתקה" : "🔊 השתק"}
          </button>
        </div>

        {/* Video header - desktop only */}
        <div className="hidden md:block w-full relative" style={{ background: "#000", lineHeight: 0 }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              id="yt-video"
              src={`https://www.youtube.com/embed/dT1YU-VzF8s?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=dT1YU-VzF8s&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1`}
              title="2site intro video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
          {/* Mute/Unmute button */}
          <button
            onClick={() => setMuted(!muted)}
            style={{
              position: "absolute",
              bottom: "28px",
              left: "28px",
              background: muted ? "rgba(124,58,237,0.85)" : "rgba(0,0,0,0.7)",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: "50px",
              padding: "14px 32px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backdropFilter: "blur(10px)",
              zIndex: 10,
              boxShadow: "0 4px 24px rgba(124,58,237,0.4)",
              transition: "all 0.2s ease",
            }}
          >
            {muted ? "🔇 הסר השתקה" : "🔊 השתק"}
          </button>
        </div>
        <Navbar />
        <Hero />
        <Clients />
        <Pricing />
        <Projects />
        <Benefits />
        <Reviews />
        <Process />
        <FAQ />
        <LeadForm />
        <Footer />
        <FloatingCTA />
        <SalesChat />
        <AccessibilityWidget />
      </div>
    </div>
  );
}