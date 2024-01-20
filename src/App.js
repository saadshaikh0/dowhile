
import './App.css';
import ContactUs from "./components/ContactUs"
import "./App.css";
import Hero from "./components/Hero";
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
      <ContactUs/>
    </div>
  );
}

export default App;
