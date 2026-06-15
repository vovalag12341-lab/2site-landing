import { useState } from "react";
import LoadingScreen from "@/components/landing/LoadingScreen";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Clients from "@/components/landing/Clients";
import Pricing from "@/components/landing/Pricing";
import Projects from "@/components/landing/Projects";
import Reviews from "@/components/landing/Reviews";
import Benefits from "@/components/landing/Benefits";
import Process from "@/components/landing/Process";
import FAQ from "@/components/landing/FAQ";
import LeadForm from "@/components/landing/LeadForm";
import FloatingCTA from "@/components/landing/FloatingCTA";
import Footer from "@/components/landing/Footer";

const HERO_IMAGE = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div dir="rtl" style={{ background: "#050505", minHeight: "100vh" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}

      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Navbar />
        <Hero heroImage={HERO_IMAGE} />
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
      </div>
    </div>
  );
}