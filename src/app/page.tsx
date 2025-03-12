import HomeHero from '@/components/home/HomeHero';
import Header from '@/components/home/Header';
import Projects from '@/components/home/Projects';
import BlogPosts from '@/components/blog/BlogPosts';

export default function Home() {
  return (
    <>
      {/* Hero section with full-width design */}
      <HomeHero />
      
      {/* Projects section with container */}
      <section className="bg-white py-20">
        <div className="section-container">
          <Projects />
        </div>
      </section>
      
      {/* Blog section */}
      <section className="bg-gray-50">
        <BlogPosts />
      </section>
    </>
  );
}
