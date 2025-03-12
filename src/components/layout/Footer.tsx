'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mahdi Hasan</h3>
            <p className="text-gray-300 mb-4">
              A passionate web developer specializing in creating beautiful and functional websites with modern technologies.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/MahdiManik" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl text-gray-300 hover:text-secondary transition-colors duration-300" />
              </Link>
              <Link href="https://linkedin.com/in/MahdiManik" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl text-gray-300 hover:text-secondary transition-colors duration-300" />
              </Link>
              <Link href="https://twitter.com/MahdiManik" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl text-gray-300 hover:text-secondary transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-secondary" />
                <a href="mailto:mahdimaniu@gmail.com" className="text-gray-300 hover:text-secondary transition-colors duration-300">
                  mahdimaniu@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to my newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary hover:bg-opacity-90 px-4 py-2 rounded-r-md transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mb-8">
          <button 
            onClick={scrollToTop} 
            className="bg-secondary hover:bg-opacity-90 p-3 rounded-full transition-all duration-300"
          >
            <FaArrowUp className="text-white" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 pt-8 border-t border-gray-700">
          <p> {new Date().getFullYear()} Mahdi Hasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
