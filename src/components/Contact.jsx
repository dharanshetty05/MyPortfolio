import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-neutral-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Whether you have a project in mind, want to collaborate, or just want to say hello — I'm just a click away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and creativity.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:dharanshetty05@gmail.com" 
                    className="text-primary-600 dark:text-white hover:text-primary-700 transition-colors duration-200"
                  >
                    dharanshetty05@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Available for</h4>
                  <p className="text-gray-600 dark:text-gray-300">Full-time opportunities & Freelance projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Connect With Me
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
                Follow my journey and stay updated with my latest projects and insights.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/dharan-shetty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-accent-400/60 transition-all duration-300 border border-neutral-100 dark:border-neutral-800 transform hover:-translate-y-2 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary-400 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">LinkedIn</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Professional Network</p>
                </div>
              </a>

              <a 
                href="https://github.com/dharanshetty05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-accent-400/60 transition-all duration-300 border border-neutral-100 dark:border-neutral-800 transform hover:-translate-y-2 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary-400 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaGithub size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">GitHub</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Code Repository</p>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <a 
                href="mailto:dharanshetty05@gmail.com"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-accent-400/60 border-2 border-transparent hover:border-primary-300 dark:hover:border-accent-400 transform transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-neutral-200">
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Looking forward to hearing from you! Let's create something amazing together. ✨
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
