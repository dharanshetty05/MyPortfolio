import React from 'react'
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import { projects, ProjectList } from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="transition-colors duration-300"
    >
      <Hero />
      <About />
      {/* Projects Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15 }}
        id="projects"
        className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-down">
            <h2 className="text-5xl font-display font-bold text-neutral-800 mb-4 dark:text-gray-100">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto transition-colors">
              A collection of my recent work showcasing full-stack development, AI/ML, and creative problem-solving
            </p>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {/* GitHub Icon/label not clickable here */}
                Click 'View All Projects' to see everything
              </div>
            </div>
          </div>
          {/* Show only top 3, showViewAll=true for button */}
          <ProjectList projects={projects.slice(0,3)} showViewAll={true} />
        </div>
      </motion.section>
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </motion.div>
  );
}

export default Home