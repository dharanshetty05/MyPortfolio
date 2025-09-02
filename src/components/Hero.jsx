import React from 'react'
import ProfileImg from '../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Hi! I'm Dharan
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-neutral-600">
                Full-Stack Developer & Creative Coder
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              Passionate about building fast, responsive, and accessible web applications using modern technologies. 
              I blend technical expertise with creative problem-solving to create impactful digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Projects
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <a
                href="/DHS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl border-2 border-primary-200 hover:border-primary-300 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a 
                href="https://github.com/dharanshetty05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-neutral-600 hover:text-primary-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dharan-shetty" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-neutral-600 hover:text-primary-600 transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img 
                src={ProfileImg} 
                alt="Dharan Shetty" 
                className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl ring-4 ring-white/50 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero