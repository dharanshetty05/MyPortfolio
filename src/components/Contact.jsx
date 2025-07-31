import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-700 text-lg mb-8">
          Whether you have a project in mind, want to collaborate, or just want to say hello — I'm just a click away.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-10">
          <a 
            href="https://www.linkedin.com/in/dharan-shetty" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 text-3xl hover:scale-110 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a 
            href="https://github.com/dharanshetty05" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black text-3xl hover:scale-110 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a 
            href="mailto:dharanshetty05@gmail.com" 
            className="text-red-500 text-3xl hover:scale-110 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="mailto:dharanshetty05@gmail.com" 
          className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
        >
          Send Me an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
