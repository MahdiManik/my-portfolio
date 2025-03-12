import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const metadata = {
  title: 'Contact | Mahdi Hasan',
  description: 'Get in touch with Mahdi Hasan, a MERN Stack developer for your next web project.',
};

export default function Contact() {
  return (
    <>
      {/* Contact page header */}
      <section className="page-header">
        <div className="page-header-pattern"></div>
        <div className="section-container">
          <h1 className="page-title">Contact <span className="text-secondary">Me</span></h1>
          <p className="page-description">Have a project in mind or want to chat? Get in touch with me!</p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map or additional contact section */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quick <span className="text-secondary">Contact</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Feel free to reach out through any of these channels for a quick response</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-gray-600 mb-4">I typically respond within 24 hours</p>
              <a href="mailto:mahdimaniu@gmail.com" className="text-secondary hover:text-primary font-medium transition-colors duration-300">
                mahdimaniu@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaPhone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-gray-600 mb-4">Available during business hours</p>
              <a href="tel:+880123456789" className="text-secondary hover:text-primary font-medium transition-colors duration-300">
                +880 123 456 789
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Based in</p>
              <span className="text-secondary font-medium">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
