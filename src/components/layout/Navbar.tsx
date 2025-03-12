'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#032B44] shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#00d8ba]">Mahdi<span className="text-[#00d8ba]">Hasan</span></Link>
        <Image 
          width={56} 
          height={56} 
          src="/images/developer1.png" 
          alt="Mahdi Hasan logo" 
          className="w-14 h-14"
        />
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300">Home</Link>
          <Link href="/about" className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300">About</Link>
          <Link href="/blog" className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300">Blog</Link>
          <Link href="/contact" className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#00d8ba] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#032B44] fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-[#00d8ba] focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 mt-10 px-8">
          <Link 
            href="/" 
            className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300 text-lg"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300 text-lg"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300 text-lg"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-[#00d8ba] hover:text-[#00d8ba] transition-colors duration-300 text-lg"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
