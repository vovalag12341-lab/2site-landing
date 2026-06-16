import { useState } from "react";
import LoadingScreen from "@/components/landing/LoadingScreen";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Pricing from "@/components/landing/Pricing";
import Projects from "@/components/landing/Projects";
import Benefits from "@/components/landing/Benefits";
import ClientLogos from "@/components/landing/ClientLogos";
import Reviews from "@/components/landing/Reviews";
import Process from "@/components/landing/Process";
import FAQ from "@/components/landing/FAQ";
import LeadForm from "@/components/landing/LeadForm";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);

  return (
    <div dir="rtl" style={{ background: "#07070f", minHeight: "100vh" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
        {/* Video header - mobile only (Shorts) */}
        <div className="block md:hidden w-full" style={{ background: "#000", lineHeight: 0 }}>
          <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden" }}>
            <iframe
              src="https://www.youtube.com/embed/Yb1z4YMmi64?autoplay=1&mute=1&loop=1&playlist=Yb1z4YMmi64&controls=0&showinfo=0&rel=0&modestbranding=1"
              title="2site mobile video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
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
              bottom: "20px",
              left: "20px",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "50px",
              padding: "10px 20px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backdropFilter: "blur(8px)",
              zIndex: 10,
              transition: "all 0.2s ease",
            }}
          >
            {muted ? "🔇 הסר השתקה" : "🔊 השתק"}
          </button>
        </div>
        <Navbar />
        <Hero />
        <Clients />
        <ClientLogos />
        <Pricing />
        <Projects />
        <Benefits />
        <Reviews />
        <Process />
        <FAQ />
        <LeadForm />
        <Footer />
        <FloatingCTA />
      </div>
    </div>
  );
}