import "./App.css";
import Hero from "./components/hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <div className="HeroSection">
        <Hero />
      </div>
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
