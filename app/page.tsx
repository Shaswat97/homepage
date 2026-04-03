import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DecisionIntelligence from "./components/DecisionIntelligence";
import Challenges from "./components/Challenges";
import Flow from "./components/Flow";
import Guardrails from "./components/Guardrails";

import Analytics from "./components/Analytics";
import Modules from "./components/Modules";
import IndiaContext from "./components/IndiaContext";
import Trust from "./components/Trust";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <DecisionIntelligence />
      <Challenges />
      <Flow />
      <Guardrails />

      <Analytics />
      <Modules />
      <IndiaContext />
      <Trust />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
