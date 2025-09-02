import React, { useState } from 'react';
import { 
  FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub
} from 'react-icons/fa';
import { 
  SiCplusplus, SiAngular, SiMongodb, SiTailwindcss, SiMysql, SiSpringboot, SiCanva, SiAdobecreativecloud 
} from 'react-icons/si';
import { PiChatsCircleBold } from 'react-icons/pi';

const skills = {
  'Frontend Development': [
    { name: 'React', icon: <FaReact className="text-blue-500" />, level: 90 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 85 },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
    { name: 'Angular', icon: <SiAngular className="text-red-500" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
  ],
  'Backend Development': [
    { name: 'Python', icon: <FaPython className="text-blue-600" />, level: 85 },
    { name: 'C++', icon: <SiCplusplus className="text-blue-700" />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 75 },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-800" />, level: 70 },
  ],
  'Databases & Tools': [
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, level: 75 },
    { name: 'Git', icon: <FaGit className="text-orange-500" />, level: 85 },
    { name: 'GitHub', icon: <FaGithub className="text-black" />, level: 90 },
  ],
  'Creative Tools': [
    { name: 'Canva', icon: <SiCanva className="text-teal-500" />, level: 85 },
    { name: 'Adobe Premiere Pro', icon: <SiAdobecreativecloud className="text-pink-600" />, level: 80 },
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  return (
    <section className="py-20 px-4 bg-white" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-neutral-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills[activeCategory].map((skill, index) => (
            <div 
              key={skill.name}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-100"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-neutral-800 text-center mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-600">
                  <span>Proficiency</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-neutral-100 text-neutral-600 rounded-xl">
            <span className="text-2xl mr-2">🚀</span>
            <span className="font-medium">Continuously learning and expanding my skill set</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
