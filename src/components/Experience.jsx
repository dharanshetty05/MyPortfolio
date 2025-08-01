import React from 'react';

const Experience = () => {
  const workData = [
    {
      title: "Consulting Intern – Generative AI COE",
      company: "KPMG Global Services, Bengaluru",
      duration: "Jan 2025 – Jun 2025",
      responsibilities: [
        "Contributed to the GenAI COE team within the Consulting Division.",
        "Worked on building frontend for GenAI tools like ProManager and ProScreener with HTML, CSS, JavaScript, and AngularJS.",
        "Enhanced frontend UI responsiveness and dashboard performance.",
        "Collaborated using React, Spring Boot, Python, and MySQL.",
        "Gained hands-on experience with enterprise-grade AI applications."
      ]
    },
    {
      title: "Founder",
      company: "Agasthya Productions, Mangaluru",
      duration: "March 2023 – Present",
      responsibilities: [
        "Founded an independent film and content studio focused on regional storytelling.",
        "Directed & produced short films like *Fortunes*, *Karma*, and award-winning ad films.",
        "Managed scriptwriting, cinematography, editing, sound design, original music and marketing.",
        "Led a small creative team handling social media and marketing.",
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">💼 Work Experience</h2>
        <div className="space-y-8">
          {workData.map((work, index) => (
            <div
              key={index}
              className="border-l-4 border-green-500 pl-4 shadow-md rounded bg-gray-50 p-6"
            >
              <h3 className="text-2xl font-semibold">{work.title}</h3>
              <p className="text-gray-600 text-lg">{work.company}</p>
              <p className="text-sm text-gray-500 mb-2">{work.duration}</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {work.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
