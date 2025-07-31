import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Techify: Electronics Management System',
    tech: 'HTML, CSS, AngularJS, Spring Boot, SQL',
    duration: 'Feb 2025 – Mar 2025',
    bullets: [
      'Improved frontend responsiveness by 40% using AngularJS.',
      'Integrated with Spring Boot APIs for real-time data sync with SQL backend.'
    ],
    github: 'https://github.com/dharanshetty05/TechifyFrontend.git'
  },
  {
    title: 'LeetMetric',
    tech: 'HTML, CSS, JavaScript',
    duration: 'July 2025',
    bullets: [
      'View LeetCode stats at a glance via animated progress bars.',
      'Uses GraphQL API for real-time data & has dark responsive UI.'
    ],
    github: 'https://github.com/dharanshetty05/LeetMetric.git'
  },
  {
    title: 'Enhanced Biometric Authentication System',
    tech: 'Python, ECC, Blockchain, SVM',
    duration: 'Sep 2024 – Nov 2024',
    bullets: [
      'Used ECC and a custom blockchain for secure biometric data.',
      'Applied HOG + SVM on LFW dataset for face recognition (86% accuracy).'
    ],
    github: 'https://github.com/your-username/biometric-auth'
  },
  {
    title: 'Blockchain-Based Supply Chain Management System',
    tech: 'Python, Blockchain, Cryptography',
    duration: 'Jun 2024 – Jul 2024',
    bullets: [
      'Built a blockchain to track products using SHA-256 hashing.',
      'Implemented tampering detection and real-time product tracking.'
    ],
    github: 'https://github.com/dharanshetty05/BlockchainSupplyChain.git'
  },
  {
    title: 'QR Code Generator',
    tech: 'Python, tkinter',
    duration: 'April 2023',
    bullets: [
      'Developed a client-server application for generating QR codes from URLs.',
      'The server is responsible for QR code generation, while the client provides a user-friendly graphical interface.'
    ],
    github: 'https://github.com/dharanshetty05/QR-Code-Generator.git'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
<p className="text-center text-gray-500 italic mb-10">
    💡 Click on the GitHub icon to view the source code
  </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-left hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black text-2xl"
                >
                  <FaGithub />
                  
                </a>
              </div>

              
              {project.duration && (
                <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
              )}
              <p className="text-sm font-medium text-indigo-600 mb-4">{project.tech}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {project.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
