import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center p-6 bg-neutral text-neutral-content ">
      <div className="w-full max-w-[1100px] mx-auto md:flex lg:flex justify-between items-center">
        <nav className="flex items-center justify-center gap-8  pb-5">
          <Link
            className="bg-black p-4 rounded-full text-2xl"
            to={"https://www.linkedin.com/in/codermahdi/"}
          >
            <FaLinkedin />
          </Link>

          <Link
            className="bg-black p-4 rounded-full text-2xl"
            to={"https://github.com/MahdiManik"}
          >
            <FaGithub />
          </Link>
          <Link
            className="bg-black p-4 rounded-full text-2xl"
            to={"https://twitter.com/CoderMahdi"}
          >
            <FaTwitter />
          </Link>
        </nav>
        <aside className=" flex items-center justify-center gap-4   ">
          <p>© All Rights Reserved 2023 - | Mahdi Hasan </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
