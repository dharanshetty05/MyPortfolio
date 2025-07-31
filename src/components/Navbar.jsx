import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">DHARAN SHETTY</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
        <li><Link to="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link></li>
        <li><Link to="/skills" className="text-gray-700 hover:text-blue-600">Skills</Link></li>
        <li><Link to="/education" className="text-gray-700 hover:text-blue-600">Education</Link></li>
        <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar