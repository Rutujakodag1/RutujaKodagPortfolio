import React from 'react';
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
function App() {
  return (
    <div>
      <Router>
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <Routes>
          {/* Default Route: Display all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSlider />
                <Banner />
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
        
      </Router>
    </div>
  );
}

export default App;
