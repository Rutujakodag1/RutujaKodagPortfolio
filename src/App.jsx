import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import SkillSection from "./components/skill";
import Achievements from "./components/Achievement";
import ContactMe from "./components/ContactMe";
import ProjectsSection from "./components/Projects";
import HeroSlider from "./components/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Experience from "./components/Experience";

function App() {
  // Default dark mode if no preference saved
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") return true;
      if (savedTheme === "light") return false;
    }
    return true; // Default dark
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Apply theme & save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className={`bg-gradient-to-br 
      from-white via-gray-100 to-gray-200 
      dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] 
      text-[#1f2937] dark:text-[#f8fafc] min-h-screen transition-colors`}>

      <Router>
        <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={
            <>
              <HeroSlider />
              <Banner />
              <Experience />
              <SkillSection />
              <ProjectsSection />
              <Achievements />
              
              <ContactMe />
            </>
          } />
          <Route path="/about" element={
            <>
              <Banner />
              <Experience />     {/* Moved up */}
              <SkillSection />
              <ProjectsSection />
              <Achievements />
              <ContactMe />
            </>
          } />
          <Route path="/skills" element={<SkillSection />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
