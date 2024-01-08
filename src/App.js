
import './App.css';
import Hero from "./Components/hero"
import ContactUs from "./Components/contactUs"

function App() {

  return (
    <div className="App">
      <div className = "HeroSection">
      <Hero/>
      </div>
      <ContactUs/>
    </div>
  );
}

export default App;
