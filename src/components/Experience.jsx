import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding, FaRocket, FaFilm, FaCode } from 'react-icons/fa';

const Experience = () => {
  const workData = [
    {
      title: "Consulting Intern – GenAI COE",
      company: "KPMG Global Services",
      location: "Bengaluru, Karnataka",
      duration: "Jan 2025 – Jun 2025",
      type: "Internship",
      icon: <FaCode />,
      color: "blue",
      responsibilities: [
        "Contributed to the GenAI COE team within the Consulting Division.",
        "Worked on building frontend for GenAI tools like ProManager and ProScreener with HTML, CSS, JavaScript, and AngularJS.",
        "Enhanced frontend UI responsiveness and dashboard performance.",
        "Collaborated using React, Spring Boot, Python, and MySQL.",
        "Gained hands-on experience with enterprise-grade AI applications."
      ],
      technologies: ["React", "AngularJS", "Spring Boot", "Python", "MySQL", "HTML/CSS", "JavaScript"],
      achievements: ["Frontend Development", "AI Tools", "Enterprise Applications", "Performance Optimization"]
    },
    {
      title: "Founder & Director",
      company: "Agasthya Productions",
      location: "Bengaluru, Karnataka",
      duration: "March 2023 – August 2025",
      type: "Entrepreneurship",
      icon: <FaFilm />,
      color: "purple",
      responsibilities: [
        "Founded an independent film and content studio focused on regional storytelling.",
        "Directed & produced short films and award-winning ad films.",
        "Managed scriptwriting, cinematography, editing, sound design, original music and marketing.",
        "Led a small creative team handling social media and marketing.",
      ],
      technologies: ["Adobe Premiere Pro", "Canva", "Film Production", "Creative Direction", "Team Leadership"],
      achievements: ["Film Direction", "Content Creation", "Team Management", "Creative Leadership"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        light: 'bg-blue-100',
        border: 'border-blue-200'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        light: 'bg-purple-100',
        border: 'border-purple-200'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.24 }}
      className="py-20 px-4 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through technology consulting and creative entrepreneurship
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 to-primary-500"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {workData.map((work, index) => {
              const colors = getColorClasses(work.color);
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8 gap-4`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 ${colors.bg} rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center`}>
                    <div className="text-white text-sm">
                      {work.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-100 p-6 md:p-8">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-white mb-2 group-hover:text-primary-600 transition-colors duration-300">
                            {work.title}
                          </h3>
                          <div className="flex items-center text-primary-600 dark:text-gray-300 font-medium mb-2 transition-colors duration-300">
                            <FaBuilding className="mr-2 text-sm" />
                            {work.company}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium transition-colors duration-300`}>
                            <FaRocket className="mr-1" />
                            {work.type}
                          </div>
                        </div>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex items-center text-sm text-neutral-500 dark:text-gray-300 mb-4 transition-colors duration-300">
                        <FaCalendarAlt className="mr-2" />
                        {work.duration}
                        <span className="mx-2 text-xs font-medium text-neutral-500 dark:text-gray-300 transition-colors duration-300">•</span>
                        <FaMapMarkerAlt className="mr-2" />
                        {work.location}
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {work.responsibilities.map((item, i) => (
                            <li key={i} className="flex items-start text-neutral-600 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3 mb-4">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {work.achievements.map((achievement, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full transition-colors duration-300"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden h-8"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-50 to-primary-50 text-neutral-700 rounded-xl border border-accent-100 transition-colors duration-300">
            <FaBriefcase className="mr-2 text-accent-600" />
            <span className="font-medium">Ready for new challenges and opportunities</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
