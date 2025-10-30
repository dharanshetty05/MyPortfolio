import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub
} from 'react-icons/fa';
import { 
  SiCplusplus, SiAngular, SiMongodb, SiTailwindcss, SiMysql, SiSpringboot, SiCanva
} from 'react-icons/si';
import { PiChatsCircleBold } from 'react-icons/pi';
import { FaDiagramNext } from 'react-icons/fa6';
import { FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiDjango } from "react-icons/si";
import { SiOpenai } from "react-icons/si";
import { SiAdobepremierepro } from 'react-icons/si';
import { FaVideo } from "react-icons/fa";

const skills = {
  'Frontend Development': [
    { name: 'React.js', icon: <FaReact className="text-blue-500" />, level: 90 },
    { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400" />, level: 88 },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
    { name: 'Angular', icon: <SiAngular className="text-red-500" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" />, level: 85 },
    { name: 'NextJS', icon: <FaDiagramNext className="text-green-500" />, level: 35 }
  ],
  'Backend Development': [
    { name: 'Python', icon: <FaPython className="text-blue-600" />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 82 },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700" />, level: 80 },
    { name: 'Django', icon: <SiDjango className="text-green-700" />, level: 75 },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-800" />, level: 72 },
    { name: 'C++', icon: <SiCplusplus className="text-blue-700" />, level: 78 },
    { name: 'RESTful APIs', icon: <FaNetworkWired className="text-yellow-600" />, level: 83 },
  ],
  'Databases & Tools': [
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, level: 75 },
    { name: 'Git', icon: <FaGit className="text-orange-500" />, level: 85 },
    { name: 'GitHub', icon: <FaGithub className="text-black" />, level: 90 },
  ],
  'Creative Tools': [
    { name: 'Canva', icon: <SiCanva className="text-teal-500" />, level: 85 },
    { name: 'Adobe Premiere Pro', icon: <SiAdobepremierepro className="text-pink-600" />, level: 80 },
    { name: 'CapCut', icon: <FaVideo className="text-black" />, level: 75 },
    { name: 'ChatGPT', icon: <SiOpenai className="text-green-600" />, level: 88 }
  ]
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.18 }}
      className="py-20 px-4 bg-white dark:bg-neutral-950" id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical skills and creative abilities
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
                ${activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-gray-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:scale-105'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              custom={i}
              whileHover={{ scale: 1.06, boxShadow: '0 6px 28px 0 rgba(59,130,246,0.12)' }}
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 dark:border-neutral-800 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-50 dark:from-neutral-800 to-accent-50 dark:to-neutral-800 rounded-2xl group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <div className="text-3xl">
                  {skill.icon}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white text-center mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Skill Level */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-neutral-600 dark:text-gray-300">
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
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-neutral-100 text-neutral-600 dark:text-gray-300 rounded-xl transition-colors duration-300">
            <span className="text-2xl mr-2">🚀</span>
            <span className="font-medium">Continuously learning and expanding my skill set</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
