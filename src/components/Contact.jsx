import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-neutral-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hello — I'm just a click away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Get in Touch
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
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
                  <h4 className="font-semibold text-neutral-800">Email</h4>
                  <a 
                    href="mailto:dharanshetty05@gmail.com" 
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
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
                  <h4 className="font-semibold text-neutral-800">Location</h4>
                  <p className="text-neutral-600">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800">Available for</h4>
                  <p className="text-neutral-600">Full-time opportunities & Freelance projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & CTA */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Connect With Me
              </h3>
              <p className="text-lg text-neutral-600 mb-8">
                Follow my journey and stay updated with my latest projects and insights.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/dharan-shetty" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaLinkedin size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">LinkedIn</h4>
                  <p className="text-sm text-neutral-600">Professional Network</p>
                </div>
              </a>

              <a 
                href="https://github.com/dharanshetty05" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaGithub size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-800 mb-2">GitHub</h4>
                  <p className="text-sm text-neutral-600">Code Repository</p>
                </div>
              </a>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <a 
                href="mailto:dharanshetty05@gmail.com" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Send Me an Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-neutral-200">
          <p className="text-neutral-500">
            Looking forward to hearing from you! Let's create something amazing together. ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
