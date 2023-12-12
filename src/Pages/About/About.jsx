import me from "../../assets/images/me.png";
import SkillsSection from "./SkillsSection";

const About = () => {
  return (
    <div className="mt-10  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1500"
          src={me}
          className="transform -rotate-12 w-1/2 mx-auto "
          alt="my image"
        />
      </figure>
      <div className=" items-center text-center -mt-32">
        <h2
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500"
          className="text-7xl font-extrabold text-black"
        >
          MAHDI <span className="text-orange-600">HASAN</span>
        </h2>
        <p className="text-2xl font-bold text-orange-600 p-3">
          Web Developer (MernStack)
        </p>
      </div>
      <div className="p-8 pt-20 flex flex-col justify-center items-start gap-4">
        <h3 className="text-3xl font-bold text-orange-600">ABOUT ME</h3>
        <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
          I am a passionate web developer specializing in the MERN (MongoDB,
          Express.js, React, Node.js) stack. With a deep-rooted love for coding
          and problem-solving, I embark on each project with a commitment to
          delivering high-quality and efficient solutions. My journey in the
          world of web development has been both exciting and challenging, and I
          thrive on the continuous learning and growth it brings. <br /> <br />{" "}
          I am dedicated to creating responsive and user-friendly web
          applications that not only meet but exceed client expectations. My
          expertise lies in crafting dynamic and interactive front-end
          experiences using React, coupled with robust back-end solutions
          powered by Node.js and Express. I also bring proficiency in MongoDB
          for efficient data management. Beyond coding, I value collaboration
          and teamwork, <br /> <br /> recognizing the importance of effective
          communication and adaptability in achieving project success. As a
          lifelong learner, I stay abreast of the latest industry trends and
          technologies, ensuring that my skills are always aligned with the
          ever-evolving landscape of web development. I am excited about the
          opportunity to contribute my skills and passion to innovative
          projects, and I look forward to collaborating with like-minded
          professionals who share a vision for excellence in the digital realm.
        </p>
      </div>
      <div className="my-20">
        <SkillsSection />
      </div>
    </div>
  );
};

export default About;
