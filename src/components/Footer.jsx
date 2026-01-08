import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d12] border-t border-neutral-800 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Top */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Dharan Shetty
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              Designing and building modern, high-performance web experiences
              with clarity, intent, and motion.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-primary-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary-400 transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dharanshetty05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/dharan-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="mailto:dharanshetty05@gmail.com"
                  className="hover:text-primary-400 transition"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <span>
            © {new Date().getFullYear()} Dharan Shetty. All rights reserved.
          </span>

          <span className="text-neutral-500">
            Built with React, Tailwind & Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
