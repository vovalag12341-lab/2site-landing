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

  return (
    <div dir="rtl" style={{ background: "#07070f", minHeight: "100vh" }}>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
        <Navbar />
        <Hero />
        <Clients />
        <Pricing />
        <Projects />
        <Benefits />
        <ClientLogos />
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