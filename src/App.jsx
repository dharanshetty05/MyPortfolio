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

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/education' element={<Education />}/>
      </Routes>
      {/* <Hero /> */}
      
    </div>
  )
}

export default App
