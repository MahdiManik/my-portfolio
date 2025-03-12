'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.',
      image: '/images/projects/project1.jpg',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/MahdiManik/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.vercel.app',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Built with React, Express, Socket.io, and MongoDB for seamless team collaboration.',
      image: '/images/projects/project2.jpg',
      tags: ['React', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/MahdiManik/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A modern blogging platform with rich text editing, comments, and social sharing features. Uses Next.js for frontend and Firebase for backend services.',
      image: '/images/projects/project3.jpg',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/MahdiManik/blog-platform',
      demo: 'https://blog-platform-demo.vercel.app',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading" data-aos="fade-up">
          My <span>Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden card-shadow hover:translate-y-[-5px] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(project.id - 1) * 100}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Link 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
                  >
                    <FaGithub /> Code
                  </Link>
                  <Link 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="btn-primary inline-block px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
