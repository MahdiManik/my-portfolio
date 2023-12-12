import js from "../../assets/images/js.png";
import react from "../../assets/images/react.png";
import node from "../../assets/images/nodejs.png";
import mongo from "../../assets/images/mongo.png";

const Header = () => {
  return (
    <div>
      <section className="skill-section">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="flex flex-col justify-center items-center gap-5"
        >
          <h3 className=" text-5xl font-bold border-b-2 border-black">
            What I do
          </h3>
          <p className="px-8 py-2 text-center">
            With over one year of hands-on experience, I have successfully
            developed a diverse range of software projects <br /> across various
            categories. Heres a glimpse of my primary technical skills and the
            technologies I wield. <br /> For a more in-depth exploration of my
            journey, feel free to peruse <br /> my online resume and project
            portfolio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 my-10 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="bg-gray-800 text-white flex flex-col justify-center items-center gap-5 p-6 rounded-lg"
          >
            <img src={js} alt="" />
            <h3 className="skill-title">Vanilla JavaScript</h3>
            <p className="skill-description">
              Mastering Vanilla JavaScript for seamless client-side
              interactions, I specialize in crafting efficient and scalable web
              applications, ensuring clean and optimized code for robust user
              experiences.
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="bg-gray-800 text-white flex flex-col justify-center items-center gap-5 p-6 rounded-lg"
          >
            <img src={react} alt="" />
            <h3 className="skill-title">React</h3>
            <p className="skill-description">
              Leveraging React power, I excel in building dynamic and intuitive
              user interfaces. My expertise extends to state management,
              component architecture, and optimizing performance for
              cutting-edge web applications.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="bg-gray-800 text-white flex flex-col justify-center items-center gap-5 p-6 rounded-lg"
          >
            <img src={node} alt="" />
            <h3 className="skill-title">Node.js</h3>
            <p className="skill-description">
              Harnessing the power of Node.js, I excel in server-side
              development, building scalable and efficient applications. From
              handling HTTP requests to implementing real-time features, my
              expertise in Node.js ensures robust and responsive back-end
              solutions.
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="bg-gray-800 text-white flex flex-col justify-center items-center gap-5 p-6 rounded-lg"
          >
            <img src={mongo} alt="" />
            <h3 className="skill-title">MongoDB</h3>
            <p className="skill-description">
              In the realm of MongoDB, I specialize in crafting efficient and
              scalable database solutions. My expertise extends to data
              modeling, querying, and ensuring optimal performance, providing a
              solid foundation for data-driven applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
