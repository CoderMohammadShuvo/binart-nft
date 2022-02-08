import "./App.css";
import AdvantageHolder from "./components/AdvantageHolder/AdvantageHolder";
import AdvanceMinter from "./components/AdvantageMinter/AdvanceMinter";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Roadmap from "./components/Roadmap/Roadmap";
import Slider from "./components/Slider/Slider";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
function App() {
  return (
    <div className="app">
      <HeroSection />
      <WhoWeAre />
      <Slider />
      <AdvanceMinter />
      <AdvantageHolder />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
