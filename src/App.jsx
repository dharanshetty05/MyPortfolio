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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
