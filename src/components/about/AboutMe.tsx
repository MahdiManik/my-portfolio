'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-lg border-4 border-secondary shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Mahdi Hasan"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4 text-primary">Who am I?</h3>
            <h4 className="text-xl font-medium mb-3 text-secondary">I'm Mahdi Hasan, a Full Stack Developer</h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I am a passionate web developer specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. 
              With a deep-rooted love for coding and problem-solving, I approach each project with a commitment to 
              delivering high-quality and efficient solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My journey in web development has been both exciting and challenging, and I thrive on continuous learning. 
              I focus on creating intuitive user experiences with clean, maintainable code. I'm always exploring new 
              technologies and frameworks to stay at the cutting edge of web development.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h5 className="font-bold mb-2 text-primary">Name:</h5>
                <p className="text-gray-700">Mahdi Hasan</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-primary">Email:</h5>
                <p className="text-gray-700">mahdihasan@example.com</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-primary">Location:</h5>
                <p className="text-gray-700">Dhaka, Bangladesh</p>
              </div>
              <div>
                <h5 className="font-bold mb-2 text-primary">Availability:</h5>
                <p className="text-gray-700">Full-time</p>
              </div>
            </div>
            
            <a 
              href="/files/resume.pdf" 
              target="_blank"
              className="btn-primary inline-block px-6 py-3 mt-6 rounded-md font-medium text-sm transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
