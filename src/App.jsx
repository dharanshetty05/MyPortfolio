import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hero from './components/Hero';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      {/* <Hero /> */}
      
    </div>
  )
}

export default App
