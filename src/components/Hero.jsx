import React from 'react'
import ProfileImg from '../assets/profile.jpg'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-b from-blue-100 to-white px-10 py-6">
        <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Hi! I am Dharan Shetty</h1>
            <p className="mt-4 text-lg font-bold md:text-xl text-gray-600">Frontend Developer | Creative Coder</p>
            <p className="mt-4 text-gray-600 max-w-md">
                A frontend developer passionate about building fast, responsive, and accessible websites using modern technologies
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:red-700 transition">
                View Projects
            </button>
        </div>
        
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img 
                src={ProfileImg} 
                alt="Dharan Shetty" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl transition-transform duration-500 hover:scale-105" />
        </div>
    </section>
  )
}

export default Hero