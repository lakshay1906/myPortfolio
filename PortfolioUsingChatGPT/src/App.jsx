import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Pages/Navbar";
import HeroSection from "./Components/Pages/Hero";
import SkillPage from "./Components/Pages/Skills";
import Projects from "./Components/Pages/Projects";
import Education from "./Components/Pages/Education";
import Contact from "./Components/Pages/Contact";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar scrolled={scrollPosition > 30} />
      <HeroSection />
      <SkillPage />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
