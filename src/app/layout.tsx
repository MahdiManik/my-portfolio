import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Mahdi Hasan | Web Developer',
  description: 'Portfolio website of Mahdi Hasan, MERN Stack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen`}>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col relative">
            {/* Background pattern */}
            <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-grid-primary/5"></div>
            </div>
            
            {/* Navbar */}
            <div className="sticky top-0 z-50 w-full">
              <Navbar />
            </div>

            {/* Page content */}
            <main className="flex-grow z-10 w-full max-w-[1920px] mx-auto">
              {children}
            </main>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* Sidebar content will be added later */}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
