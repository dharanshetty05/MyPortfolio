import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology (B.Tech)",
      institution: "PES University, Bengaluru",
      duration: "2021 – 2025",
      location: "Bengaluru, Karnataka",
      description: "Major in Computer Science and Engineering. Participated in extra-curricular activities, member of various college clubs and completed multiple academic projects.",
      achievements: ["Computer Science & Engineering", "Active in College Clubs", "Multiple Academic Projects"],
      grade: "Completed"
    },
    {
      level: "Higher Secondary Education (12th Grade)",
      institution: "Alvas Pre-University College, Moodbidre",
      duration: "2019 – 2021",
      location: "Moodbidre, Karnataka",
      description: "Studied Physics, Chemistry, Mathematics, and Computer Science (PCMC). Scored 99%.",
      achievements: ["PCMC Stream", "99% Score", "Science Focus"],
      grade: "99%"
    },
    {
      level: "Secondary School (10th Grade)",
      institution: "Little Rock Indian School, Brahmavar, Udupi",
      duration: "2007 – 2019",
      location: "Udupi, Karnataka",
      description: "Completed schooling with excellent marks. Scored 93.2%.",
      achievements: ["Complete Schooling", "Excellent Performance", "Foundation Years"],
      grade: "93.2%"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.18 }}
      className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-white dark:from-gray-900 dark:to-neutral-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-down">
          <h2 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Education Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            My academic path that shaped my foundation in technology and problem-solving
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8 gap-4`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <FaGraduationCap className="text-white text-sm" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} animate-slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-neutral-100 p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-white mb-2 transition-colors duration-300">
                          {edu.level}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-gray-300 font-medium mb-2 transition-colors duration-300">
                          <FaMapMarkerAlt className="mr-2 text-sm" />
                          {edu.institution}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          <FaAward className="mr-1" />
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    {/* Duration & Location */}
                    <div className="flex items-center text-sm text-neutral-500 mb-4">
                      <FaCalendarAlt className="mr-2" />
                      {edu.duration}
                      <span className="mx-2">•</span>
                      <FaMapMarkerAlt className="mr-2" />
                      {edu.location}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-full"
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
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-50 to-accent-50 text-neutral-700 rounded-xl border border-primary-100">
            <FaGraduationCap className="mr-2 text-primary-600" />
            <span className="font-medium">Continuously learning and growing</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
