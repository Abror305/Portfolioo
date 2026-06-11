import { useMode } from "./context/ModeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MatrixRain from "./components/MatrixRain";
import "./App.css";

function App() {
  const { isHack } = useMode();

  return (
    <div className="app-shell">
      {/* Background layers */}
      <div className="bg-fx" aria-hidden="true">
        <div className="grid" />
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      {isHack && <MatrixRain />}
      {isHack && <div className="scanlines" aria-hidden="true" />}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
