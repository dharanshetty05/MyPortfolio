import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hero from './components/Hero';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/MyPortfolio" element={<Home />} />
          <Route path="/MyPortfolio/about" element={<About />} />
          <Route path="/MyPortfolio/projects" element={<Projects />} />
          <Route path="/MyPortfolio/skills" element={<Skills />} />
          <Route path="/MyPortfolio/experience" element={<Experience />} />
          <Route path="/MyPortfolio/education" element={<Education />} />
          <Route path="/MyPortfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
