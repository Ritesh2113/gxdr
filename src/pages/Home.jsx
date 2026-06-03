import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ThreatFeed from "../components/ThreatFeed";
import LiveStats from "../components/LiveStats";
import AISecurity from "../components/AISecurity";
import ThreatHeatmap from "../components/ThreatHeatmap";
import DashboardPreview from "../components/DashboardPreview";
import AttackReplay from "../components/AttackReplay";
import HowItWorks from "../components/HowItWorks";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      {/*<LiveStats />*/}
      {/* <ThreatFeed /> */}
      {/* <AISecurity /> */}
      {/* <ThreatHeatmap /> */}
      {/* <Features /> */}
     {/* <DashboardPreview /> */}
     {/* <AttackReplay /> */}
      {/* <HowItWorks /> */}
      <Partners />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default Home;