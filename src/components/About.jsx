import React from 'react'
import ProfilePic from '../assets/techie.jpg'
import { FaCode, FaFilm, FaLightbulb, FaRocket } from 'react-icons/fa'

const About = () => {
  return (
    <section className='min-h-screen py-20 px-4 bg-gradient-to-br from-neutral-50 to-white' id='about'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-neutral-800 mb-4">
            About Me
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A passionate developer who bridges the gap between technology and creativity
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div className='space-y-8 animate-slide-up'>
            <div className="space-y-6">
              <p className='text-lg text-neutral-700 leading-relaxed'>
                I'm <span className='font-semibold text-primary-600'>Dharan Shetty</span>, a B.Tech graduate and passionate software developer with hands-on experience in building full-stack web applications. My technical strengths lie in <span className='font-semibold text-primary-600'>React, JavaScript, C++, HTML, and Angular</span>. I love crafting intuitive UIs and solving real-world problems through code.
              </p>
              
              <p className='text-lg text-neutral-700 leading-relaxed'>
                I interned at <span className='font-semibold text-primary-600'>KPMG's Generative AI COE team</span>, where I worked on frontend development using modern frameworks like React and Angular, and backend APIs with Spring Boot. I contributed to internal tools like <span className='italic text-accent-600'>ProManager</span> and <span className='italic text-accent-600'>ProScreener</span>, focusing on performance and usability.
              </p>
              
              <p className='text-lg text-neutral-700 leading-relaxed'>
                Beyond software, I led <span className='font-semibold text-primary-600'>Agasthya Productions</span>, a creative space where I directed and edited short films. This blend of tech and storytelling helps me approach problems with both logic and creativity.
              </p>
              
              <p className='text-lg text-neutral-700 leading-relaxed'>
                I'm currently exploring roles in software development where I can apply my frontend expertise, continue learning, and contribute to impactful products.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  <FaCode size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Full-Stack Developer</h4>
                  <p className="text-sm text-neutral-600">React, Angular, Spring Boot</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                  <FaFilm size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Creative Director</h4>
                  <p className="text-sm text-neutral-600">Film Production & Editing</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                  <FaLightbulb size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Problem Solver</h4>
                  <p className="text-sm text-neutral-600">Innovative Solutions</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                  <FaRocket size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Fast Learner</h4>
                  <p className="text-sm text-neutral-600">Adaptable & Curious</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className='flex justify-center lg:justify-end animate-scale-in'>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img 
                src={ProfilePic} 
                alt="Dharan Shetty" 
                className='relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl ring-4 ring-white/50 transition-transform duration-500 hover:scale-105'
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎬</div>
                  <p className="text-sm font-semibold text-neutral-800">Creative</p>
                  <p className="text-xs text-neutral-600">Filmmaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className='mt-20 text-center animate-fade-in'>
          <div className="inline-block p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
            <p className="text-2xl lg:text-3xl font-display font-semibold text-neutral-800 mb-4">
              "Code is my logic, film is my language."
            </p>
            <p className="text-lg text-neutral-600 italic">
              — Dharan Shetty
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About