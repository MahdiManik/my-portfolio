'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaClock, FaUser, FaTags } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPosts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Building Responsive Websites with Tailwind CSS',
      excerpt: 'Learn how to create beautiful, responsive websites quickly using the utility-first CSS framework, Tailwind CSS.',
      image: '/images/blog/tailwind-css.jpg',
      date: 'March 5, 2025',
      author: 'Mahdi Hasan',
      category: 'Web Development',
      tags: ['Tailwind CSS', 'Responsive Design', 'CSS'],
      slug: 'building-responsive-websites-with-tailwind-css',
    },
    {
      id: 2,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Explore the new features and improvements in Next.js 14 and how they can enhance your React applications.',
      image: '/images/blog/nextjs.jpg',
      date: 'February 20, 2025',
      author: 'Mahdi Hasan',
      category: 'JavaScript Frameworks',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'getting-started-with-nextjs-14',
    },
    {
      id: 3,
      title: 'MongoDB Atlas: Cloud Database Made Simple',
      excerpt: 'A comprehensive guide to setting up and optimizing MongoDB Atlas for your web applications.',
      image: '/images/blog/mongodb.jpg',
      date: 'January 15, 2025',
      author: 'Mahdi Hasan',
      category: 'Databases',
      tags: ['MongoDB', 'Database', 'Cloud'],
      slug: 'mongodb-atlas-cloud-database-made-simple',
    },
    {
      id: 4,
      title: 'Mastering TypeScript for React Developers',
      excerpt: 'Learn how to leverage TypeScript in your React projects to write safer, more maintainable code.',
      image: '/images/blog/typescript.jpg',
      date: 'December 10, 2024',
      author: 'Mahdi Hasan',
      category: 'Programming Languages',
      tags: ['TypeScript', 'React', 'JavaScript'],
      slug: 'mastering-typescript-for-react-developers',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading" data-aos="fade-up">
          Latest <span>Articles</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:translate-y-[-5px] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaClock className="text-secondary" />
                  <span>{post.date}</span>
                  <FaUser className="text-secondary ml-2" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 mb-4">
                  <FaTags className="text-secondary" />
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-secondary">
                        {tag}{idx < post.tags.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-secondary hover:text-primary transition-colors duration-300"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="btn-primary inline-block px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
