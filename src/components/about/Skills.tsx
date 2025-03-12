'use client';

import { useEffect } from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <FaCode className="text-4xl text-secondary" />,
      skills: [
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
        { name: 'React.js', proficiency: 92 },
        { name: 'Next.js', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'Tailwind CSS', proficiency: 88 },
      ],
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <FaServer className="text-4xl text-secondary" />,
      skills: [
        { name: 'Node.js', proficiency: 88 },
        { name: 'Express.js', proficiency: 85 },
        { name: 'REST API', proficiency: 90 },
        { name: 'GraphQL', proficiency: 75 },
        { name: 'Authentication', proficiency: 85 },
      ],
    },
    {
      id: 3,
      title: 'Database',
      icon: <FaDatabase className="text-4xl text-secondary" />,
      skills: [
        { name: 'MongoDB', proficiency: 90 },
        { name: 'Firebase', proficiency: 85 },
        { name: 'MySQL', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 75 },
      ],
    },
    {
      id: 4,
      title: 'Tools & Deployment',
      icon: <FaTools className="text-4xl text-secondary" />,
      skills: [
        { name: 'Git & GitHub', proficiency: 92 },
        { name: 'Docker', proficiency: 78 },
        { name: 'Vercel', proficiency: 88 },
        { name: 'AWS', proficiency: 75 },
        { name: 'CI/CD', proficiency: 80 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading" data-aos="fade-up">
          My <span>Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white p-8 rounded-lg shadow-lg" 
              data-aos="fade-up"
              data-aos-delay={(category.id - 1) * 100}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-primary ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-secondary">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-secondary h-2.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
