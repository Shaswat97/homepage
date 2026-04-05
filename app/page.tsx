import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DecisionIntelligence from "./components/DecisionIntelligence";
import ProblemsSolved from "./components/ProblemsSolved";
import ProductProof from "./components/ProductProof";
import Flow from "./components/Flow";
import StoryFlow from "./components/StoryFlow";
import Guardrails from "./components/Guardrails";

import Analytics from "./components/Analytics";
import Modules from "./components/Modules";
import IndiaContext from "./components/IndiaContext";
import Trust from "./components/Trust";
import RoleValue from "./components/RoleValue";
import Implementation from "./components/Implementation";
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
      <ProblemsSolved />
      <ProductProof />
      <Flow />
      <StoryFlow />
      <Guardrails />
      <Analytics />
      <RoleValue />
      <Modules />
      <IndiaContext />
      <Trust />
      <Testimonials />
      <Implementation />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
