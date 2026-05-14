import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import AuroraBackground from "./components/AuroraBackground";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import WaveDivider from "./components/WaveDivider";
import SideElements from "./components/SideElements";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="bg-surface min-h-screen">
        <AuroraBackground />
        <ParticleBackground />
        <Navbar />
        <Hero />
        <WaveDivider />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
        <SideElements />
        <ScrollToTop />
        <CustomCursor />
      </div>
    </ThemeProvider>
  );
}

export default App;
