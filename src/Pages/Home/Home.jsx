import me from "../../assets/images/me.png";
import Header from "./Header";
import Projects from "./Projects";
const Home = () => {
  const handleDownload = () => {
    const cvFile = "../../assets/images/five-qution-answer.pdf";
    const downloadLink = document.createElement("a");

    downloadLink.href = cvFile;
    downloadLink.download = cvFile;
    downloadLink.click();
  };

  return (
    <>
      <div className="banner md:flex lg:flex flex-none mt-32">
        <div className="w-full">
          <h3
            className="text-2xl font-bold pb-4"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            HELLO, MY NAME IS
          </h3>
          <h1
            className="text-5xl font-bold"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Mahdi <span className="text-orange-600">Hasan</span>
          </h1>
          <p className="text-xl font-bold text-orange-500 pt-4">
            I AM Web Developer
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="py-8"
          >
            and I am a passionate web developer specializing in the MERN
            (MongoDB, Express.js, React, Node.js) stack. With a deep-rooted love
            for coding and problem-solving, I embark on each project with a
            commitment to delivering high-quality and efficient solutions.{" "}
            <br /> <br /> My journey in the world of web development has been
            both exciting and challenging, and I thrive on the continuous
            learning and growth it brings.
          </p>
          <button
            onClick={handleDownload}
            className="btn hover:bg-orange-600 bg-orange-600 text-white"
          >
            Download CV
          </button>
        </div>
        <img className="transform -rotate-12 w-4/6 mx-auto" src={me} alt="" />
      </div>
      <div className="mt-20">
        <Header />
      </div>
      <div className="mt-20">
        <Projects />
      </div>
    </>
  );
};

export default Home;
