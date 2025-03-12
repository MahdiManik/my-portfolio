'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Senior Front-End Developer',
      company: 'Tech Innovations Ltd',
      period: '2023 - Present',
      description: 'Leading front-end development for complex web applications using React, Next.js, and modern JavaScript libraries.'
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'WebSolutions Inc',
      period: '2021 - 2023',
      description: 'Developed and maintained full-stack applications using MERN stack (MongoDB, Express.js, React, Node.js).'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Digital Craft Agency',
      period: '2020 - 2021',
      description: 'Built responsive websites and implemented front-end designs using HTML, CSS, and JavaScript frameworks.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'BSc in Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2020',
      description: 'Specialized in software engineering with a focus on web technologies and database systems.'
    },
    {
      id: 2,
      degree: 'Full-Stack Web Development',
      institution: 'Programming Heroes Bootcamp',
      period: '2020',
      description: 'Intensive coding bootcamp focused on modern web development technologies and best practices.'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Experience & <span className="text-orange-500">Education</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-6 text-center">Work Experience</h3>
          <div className="relative border-l-2 border-orange-500 pl-8 ml-4 space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-10 top-1"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-orange-500 font-medium">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Timeline */}
        <div data-aos="fade-left">
          <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
          <div className="relative border-l-2 border-orange-500 pl-8 ml-4 space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="relative">
                <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-10 top-1"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-orange-500 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 mb-2">{edu.period}</p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
