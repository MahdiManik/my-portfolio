'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  
  return (
    <ul className="menu p-4 w-80 min-h-full bg-black text-white">
      <li>
        <Link
          className={pathname === "/" ? "text-orange-400 font-bold" : ""}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/about" ? "text-orange-400 font-bold" : ""}
          href="/about"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/blog" ? "text-orange-400 font-bold" : ""}
          href="/blog"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          className={pathname === "/contact" ? "text-orange-400 font-bold" : ""}
          href="/contact"
        >
          Talk to me
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
