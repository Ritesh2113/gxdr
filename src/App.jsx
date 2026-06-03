import CoreFeaturesPage from "./pages/CoreFeaturesPage";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LiveAttackFeedPage from "./pages/LiveAttackFeedPage";
import AISecurityPage from "./pages/AISecurityPage";
import ThreatHeatmapPage from "./pages/ThreatHeatmapPage";
import DashboardPreviewPage from "./pages/DashboardPreviewPage";
import AttackReplayPage from "./pages/AttackReplayPage";
import HowItWorksPage from "./pages/HowItWorksPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
  path="/live-attack-feed"
  element={<LiveAttackFeedPage />}
/>

<Route
  path="/ai-security"
  element={<AISecurityPage />}
/>

<Route
  path="/dashboard-preview"
  element={<DashboardPreviewPage />}
/>

<Route
  path="/attack-replay"
  element={<AttackReplayPage />}
/>
<Route
  path="/core-features"
  element={<CoreFeaturesPage />}
/>
<Route
  path="/how-it-works"
  element={<HowItWorksPage />}
/>
<Route
  path="/threat-heatmap"
  element={<ThreatHeatmapPage />}
/>
    </Routes>
    
  );
}

export default App;