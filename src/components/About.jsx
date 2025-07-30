import React from 'react'
import ProfilePic from '../assets/techie.jpg'

const About = () => {
  return (
    <section className='min-h-screen py-16 px-4 bg-gray-100' id='about'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 mb-12'>
            <div className='flex-1'>
                <h2 className='text-4xl font-bold text-gray-800 mb-6'>About Me</h2>
                <p className='text-gray-700 text-lg leading-relaxed'>
                    Hello! I'm <span className='font-semibold'>Dharan Shetty</span>, a passionate software developer with a love for building web applications using modern technologies like React, JavaScript, and Python. I recently completed my B.Tech and interned at KPMG’s Generative AI COE team, working on exciting real-world projects.
                </p>
                <p className='text-gray-700 text-lg mt-4 leading-relaxed'>
                    When I'm not coding, I run a film production house called <span className='font-semibold'>Agasthya Productions</span>, where I direct and edit short films. I'm currently looking for full-time roles where I can apply my frontend skills and grow as a developer.
                </p>
            </div>
            <div className='flex-1 flex justify-center'>
                <img 
                    src={ProfilePic} 
                    alt="Dharan Shetty" 
                    className='rounded-full shadow-xl ring-4 ring-blue-200 w-48 h-48 object-cover transition-transform duration-500 hover:scale-105'/>
            </div>
        </div>
        <div className='max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10'>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">Skills</h3>
            <ul className="flex flex-wrap gap-3">
                <li className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React</li>
                <li className="bg-green-100 text-green-800 px-4 py-2 rounded-full">C++</li>
                <li className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Python</li>
                <li className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Angular</li>
                <li className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full">Javascript</li>
            </ul>
        </div>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Experience</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Consulting Intern at KPMG (Jan–Jun 2025) – Generative AI Team</li>
            <li>Founded and leaded Agasthya Productions and directed various short films and ad films</li>
            <li>Built various projects revolving around Web Development</li>
            </ul>
        </div>
        <div className='max-w-4xl mx-auto text-center mt-10'>
            <a href="/Dharan_Shetty_Resume.pdf" download className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow hover:bg-blue-700  transition">
              Download Resume
            </a>
        </div>
    </section>
)
}

export default About