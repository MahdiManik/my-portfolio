import AboutMe from '@/components/about/AboutMe';
import Skills from '@/components/about/Skills';
import Timeline from '@/components/about/Timeline';

export const metadata = {
  title: 'About Me | Mahdi Hasan',
  description: 'Learn more about Mahdi Hasan, a MERN Stack developer with a passion for creating engaging web experiences.',
};

export default function About() {
  return (
    <>
      {/* About page header */}
      <section className="page-header">
        <div className="page-header-pattern"></div>
        <div className="section-container">
          <h1 className="page-title">About <span className="text-secondary">Me</span></h1>
          <p className="page-description">Learn more about my skills, experience, and what drives me as a developer.</p>
        </div>
      </section>

      {/* About content */}
      <section className="bg-white py-16">
        <div className="section-container">
          <AboutMe />
        </div>
      </section>

      {/* Skills section */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <Skills />
        </div>
      </section>

      {/* Timeline section */}
      <section className="bg-white py-16">
        <div className="section-container">
          <Timeline />
        </div>
      </section>
    </>
  );
}
