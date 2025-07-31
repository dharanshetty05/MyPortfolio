import React from 'react';
import { 
  FaReact, FaJs, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaGit, FaGithub
} from 'react-icons/fa';
import { 
  SiCplusplus, SiAngular, SiMongodb, SiTailwindcss, SiMysql, SiSpringboot, SiCanva, SiAdobecreativecloud 
} from 'react-icons/si';
import { PiChatsCircleBold } from 'react-icons/pi'; // for ChatGPT (closest generic icon)

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-700" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'Python', icon: <FaPython className="text-blue-600" /> },
  { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'Git', icon: <FaGit className="text-orange-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-800" /> },
  { name: 'Canva', icon: <SiCanva className="text-teal-500" /> },
  { name: 'Adobe Premiere Pro', icon: <SiAdobecreativecloud className="text-pink-600" /> },
];

const Skills = () => {
  return (
    <section className="bg-white py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
            >
              {skill.icon ? (
                <div className="text-4xl mb-2">{skill.icon}</div>
              ) : (
                <div className="w-12 h-12 flex items-center justify-center bg-gray-300 rounded-full mb-2 text-lg font-semibold text-gray-700">
                  {skill.name.split(' ').map(word => word[0]).join('')}
                </div>
              )}
              <p className="text-gray-700 font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
