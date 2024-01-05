
import './App.css';
import Hero from "./Components/hero"

function App() {

  return (
    <div className="App">
      <div className = "HeroSection">
      <Hero/>
      </div>
      <div className = "AboutSection p-5">
        About
      </div>
    </div>
  );
}

export default App;
