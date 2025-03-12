'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.png')] bg-repeat"></div>
      </div>
      
      <div className="section-container min-h-screen flex flex-col justify-center py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-secondary">Mahdi Hasan</span>
            </h1>
            <p className="text-xl sm:text-2xl font-light text-gray-300 mb-8">
              A Full-Stack Web Developer, specializing in creating modern and responsive web applications
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link 
                href="/contact" 
                className="btn-secondary"
              >
                Contact Me
              </Link>
              <Link 
                href="/about" 
                className="btn-outline"
              >
                View My Work
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <Link href="https://github.com/MahdiManik" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/mahdi-hasan-manik" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:mahdimaniu@gmail.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="order-1 lg:order-2 relative" data-aos="fade-left">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="w-full max-w-md xl:max-w-lg relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-10 rounded-xl"></div>
                <div className="relative w-full pt-[100%] rounded-xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src="/images/developer1.png"
                    alt="Mahdi Hasan - Web Developer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white px-6 py-3 rounded-lg shadow-xl">
                  <span className="font-bold text-lg">5+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-0 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-light/30 rounded-full blur-xl"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
