import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Background from './components/Background'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* Sections */}
      <main>
        <Hero id="hero"/>
        <About id="about"/>
        <Projects id="projects"/>
        <Skills id="skills"/>
        <Background id="background"/>
        <Contact id="contact"/>
        <Footer id="footer"/>
      </main>
    </div>
  )
}

export default App
