import React, {useState, useEffect} from 'react';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import SkillSection from './components/skill';
import Achievements from './components/Achievement';
import ContactMe from './components/ContactMe';
// import WelcomePage from './components/Hero';
// import Default from './'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsSection from './components/Projects';
import HeroSlider from './components/Hero';
import Footer from './components/Footer';
function App() {

const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark';
});
    // Load theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else if (savedTheme === 'light') {
      setDarkMode(false);
    }
  }, []);

  // Apply theme + save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bg-gradient-to-br 
from-white via-gray-100 to-gray-200 
dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] 
text-[#1f2937] dark:text-[#f8fafc] min-h-screen transition-colors">

      <Router>
        {/* Navbar */}
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>

        {/* Main Content */}
        <Routes>
          {/* Default Route: Display all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <Banner />
                {/* <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-10"></div> */}

                <SkillSection />
                <Achievements />
                <ProjectsSection />
                <ContactMe />
              </>
            }
          />

            <Route path='/about' element={
              <>
              <Banner />
              <ProjectsSection />
              <SkillSection />
              <Achievements />
              <ContactMe />
              </>
            }
            />
          {/* Routes for specific sections */}
          <Route path="/skills" element={<SkillSection />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path='/projects' element={<ProjectsSection />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
