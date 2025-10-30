import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const projects = [
  {
  title: 'CrackIt: Placement Prep Website',
  tech: 'MongoDB, Express, React, Node.js, Tailwind CSS',
  duration: 'Sep 2025 – Present',
  bullets: [
    'Developed a MERN-based platform to help students prepare for placements.',
    'Implemented backend with Express & MongoDB and built responsive frontend using React + Tailwind CSS.',
    'Currently integrating features like quizzes, coding problems, and progress tracking.'
  ],
  category: 'Full-Stack'
  },
  {
    title: 'ResuMate: AI-Powered Resume Analyzer',
    tech: 'Node.js, Express, NextJS, OpenAI API',
    duration: 'Oct 2025 – Present',
    bullets: [
      'Building an intelligent web app that analyzes uploaded resumes and extracts key insights using AI.',
      'Implemented PDF upload and text extraction using PDF.js with a Node.js + Express backend.',
      'Integrating OpenAI API to evaluate resume content, suggest improvements, and highlight missing skills.',
      'Designed an intuitive React-based frontend for smooth user interaction and real-time feedback.'
    ],
    github: 'https://github.com/dharanshetty05/ResuMate.git',
    category: 'AI/Full-Stack'
  },  
  {
    title: 'Techify: Electronics Management System',
    tech: 'HTML, CSS, Javascript, AngularJS, Spring Boot, SQL',
    duration: 'Feb 2025 – Mar 2025',
    bullets: [
      'Improved frontend responsiveness by 40% using AngularJS.',
      'Integrated with Spring Boot APIs for real-time data sync with SQL backend.'
    ],
    github: 'https://github.com/dharanshetty05/TechifyFrontend.git',
    category: 'Full-Stack'
  },
  {
    title: 'LeetMetric',
    tech: 'HTML, CSS, JavaScript, GraphQL API',
    duration: 'July 2025',
    bullets: [
      'View LeetCode stats at a glance via animated progress bars.',
      'Uses GraphQL API for real-time data & has dark responsive UI.'
    ],
    github: 'https://github.com/dharanshetty05/LeetMetric.git',
    category: 'Frontend'
  },
  {
  title: 'TweetGen',
  tech: 'Python, Django, SQLite, Bootstrap, Django REST Framework ',
  duration: 'July 2025',
  bullets: [
    'Built a Django-based web app for creating, managing, and sharing tweets.',
    'Implemented user authentication with registration, login, logout, and secure password handling.',
    'Added tweet CRUD operations with support for photo uploads.',
    'Developed a responsive UI using Django templates and Bootstrap.',
    'Used SQLite for development (extensible to PostgreSQL/MySQL in production).'
  ],
  github: 'https://github.com/dharanshetty05/TweetGen_Django.git',
  category: 'Full-Stack'
  },
  {
    title: 'Enhanced Biometric Authentication System',
    tech: 'Python, ECC, Blockchain, SVM, HOG',
    duration: 'Sep 2024 – Nov 2024',
    bullets: [
      'Developed a secure face authentication model integrating ML, ECC encryption, and Blockchain.',
      'Used HOG for facial feature extraction and SVM for classification on the LFW dataset, achieving 86% accuracy.',
      'Encrypted recognized facial data using ECC for high-strength security with compact key sizes and implemented a custom Blockchain in Python to store authentication records immutably and detect tampering attempts.',
      'Combined AI, cryptography, and Blockchain to deliver an intelligent & tamper-proof authentication system.'
    ],
    category: 'AI/ML & Security'
  },
  {
    title: 'Blockchain-Based Supply Chain Management System',
    tech: 'Python, Blockchain, Cryptography',
    duration: 'Jun 2024 – Jul 2024',
    bullets: [
      'Built a blockchain to track products using SHA-256 hashing.',
      'Implemented tampering detection and real-time product tracking.'
    ],
    github: 'https://github.com/dharanshetty05/BlockchainSupplyChain.git',
    category: 'Blockchain'
  },
  {
    title: 'QR Code Generator',
    tech: 'Python, tkinter',
    duration: 'April 2023',
    bullets: [
      'Developed a client-server application for generating QR codes from URLs.',
      'The server is responsible for QR code generation, while the client provides a user-friendly graphical interface.'
    ],
    github: 'https://github.com/dharanshetty05/QR-Code-Generator.git',
    category: 'Desktop'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.18, ease: 'easeOut' },
  }),
};

export function ProjectList({ projects, showViewAll }) {
  return (
    <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      {projects.map((project, i) => (
        <motion.div
          key={i}
          variants={cardVariants}
          custom={i}
          whileHover={{ scale: 1.05, boxShadow: '0 12px 40px 0 rgba(59,130,246,.20)' }}
          className="group bg-white dark:bg-[var(--color-card)] rounded-2xl shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-primary-400 transition-all duration-300 border border-neutral-100 dark:border-neutral-800 overflow-hidden cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          {/* Card Header */}
          <div className="p-6 border-b border-neutral-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center mt-2 space-x-4 text-sm text-neutral-600 dark:text-gray-300 transition-colors duration-300">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <FaCode className="mr-1" />
                    {project.category}
                  </div>
                </div>
              </div>
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-neutral-800 rounded-lg transition-all duration-300 group-hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary-400"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.split(', ').map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-gray-300 text-xs font-medium rounded-full transition-all duration-300 group-hover:bg-primary-100 group-hover:text-primary-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Card Body */}
          <div className="p-6">
            <ul className="space-y-3">
              {project.bullets.map((point, i) => (
                <li key={i} className="flex items-start text-neutral-700 dark:text-gray-300 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {/* Card Footer */}
          <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 dark:text-gray-300 uppercase tracking-wide transition-colors duration-300">
                {project.category}
              </span>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-[var(--color-accent)] hover:text-primary-700 dark:hover:text-accent-300 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  View Code
                  <FaExternalLinkAlt className="ml-1" size={12} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
      {showViewAll && (
        <div className="flex items-center justify-center lg:col-span-3 md:col-span-2 col-span-1 mt-4">
          <Link
            to="/MyPortfolio/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-400"
          >
            View All Projects&nbsp;
            <FaExternalLinkAlt className="ml-2" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.15 }}
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-neutral-800 mb-4 dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development, AI/ML, and creative problem-solving
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <FaGithub className="mr-2" />
              Click GitHub icon to view source code
            </div>
          </div>
        </div>
        {/* Projects Grid: All projects here, do not restrict */}
        <ProjectList projects={projects} showViewAll={false} />
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button onClick={() => window.location.href = 'https://github.com/dharanshetty05'} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <FaGithub className="mr-2" />
            View More on GitHub
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
