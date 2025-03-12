import BlogPosts from '@/components/blog/BlogPosts';

export const metadata = {
  title: 'Blog | Mahdi Hasan',
  description: 'Read articles and tutorials about web development, programming, and technology.',
};

export default function Blog() {
  return (
    <>
      {/* Blog page header */}
      <section className="page-header">
        <div className="page-header-pattern"></div>
        <div className="section-container">
          <h1 className="page-title">My <span className="text-secondary">Blog</span></h1>
          <p className="page-description">Insights, tutorials, and thoughts on web development and technology</p>
        </div>
      </section>

      {/* Blog content */}
      <section className="bg-white py-16">
        <div className="section-container">
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
