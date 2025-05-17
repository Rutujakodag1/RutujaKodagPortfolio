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
import Footer from './components/Footer';
function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#EEE1DB] to-[#DEECE1]'>
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
                <div className="border-t-2 border-gray-400 dark:border-gray-600 mx-auto my-4 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-[1250px] mb-10"></div>

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
