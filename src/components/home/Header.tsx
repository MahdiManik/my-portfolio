'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="text-center">
      <h1
        className="text-5xl font-extrabold mb-6"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        My <span className="text-orange-500">Projects</span>
      </h1>
      <p
        className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        Here are some of my recent projects that showcase my skills and expertise in web development.
        Each project has been carefully crafted to demonstrate different aspects of my technical abilities.
      </p>
    </div>
  );
};

export default Header;
