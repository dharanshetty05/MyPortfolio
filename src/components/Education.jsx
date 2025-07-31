import React from 'react';

const Education = () => {
  const educationData = [
    {
      level: "Bachelor of Technology (B.Tech)",
      institution: "PES University Bengaluru",
      duration: "2021 – 2025",
      description: "Major in Computer Science. Participated in extra-curricular activities and completed multiple academic projects.",
    },
    {
      level: "Higher Secondary Education (12th Grade)",
      institution: "Alvas Pre-University College, Moodbidre",
      duration: "2019 – 2021",
      description: "Studied Physics, Chemistry, Mathematics, and Computer Science (PCMC). Scored 99%.",
    },
    {
      level: "Secondary School (10th Grade)",
      institution: "Little Rock Indian School, Brahmavar, Udupi",
      duration: "2007 – 2019",
      description: "Completed schooling with excellent marks. Scored 93.2%.",
    }
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🎓 Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 shadow-md rounded bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-semibold">{edu.level}</h3>
              <p className="text-gray-600 text-lg">{edu.institution}</p>
              <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
              <p className="text-gray-700">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
