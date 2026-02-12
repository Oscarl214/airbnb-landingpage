import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <LeadForm />
      <Footer />
    </div>
  );
}
