import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import AuroraBackground from "./components/AuroraBackground";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import WaveDivider from "./components/WaveDivider";
import SideElements from "./components/SideElements";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Certifications = lazy(() => import("./components/Certifications"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return (
    <div className="py-32 flex justify-center">
      <div className="w-6 h-6 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <Preloader />
      <div className="bg-surface min-h-screen">
        <AuroraBackground />
        <ParticleBackground />
        <Navbar />
        <Hero />
        <WaveDivider />
        <Suspense fallback={<SectionFallback />}><About /></Suspense>
        <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
        <Suspense fallback={<SectionFallback />}><Projects /></Suspense>
        <Suspense fallback={<SectionFallback />}><Education /></Suspense>
        <Suspense fallback={<SectionFallback />}><Skills /></Suspense>
        <Suspense fallback={<SectionFallback />}><Certifications /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
        <SideElements />
        <ScrollToTop />
        <CustomCursor />
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
