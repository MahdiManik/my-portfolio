import image1 from "../../assets/images/p1.png";
import image3 from "../../assets/images/p2.png";
import image2 from "../../assets/images/p3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "aos/dist/aos.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className=" mb-32">
      <h3
        data-aos="flip-left"
        data-aos-duration="900"
        className="py-10 text-center p-2 text-5xl font-bold text-orange-600"
      >
        My Projects
      </h3>

      <div
        className="w-full h-full relative overflow-hidden bg-blue-800"
        data-aos="zoom-out"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
          spaceBetween={50}
          effect="flip"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div>
            <SwiperSlide>
              <img src={image1} alt="web 1" className="w-full h-96" />
              <div className="text-white">
                <Link
                  className=" text-xl font-bold  p-8"
                  to="https://brand-products-ec283.web.app/"
                >
                  Visit this
                </Link>
              </div>
            </SwiperSlide>
          </div>
          <SwiperSlide>
            <img src={image3} alt="web 2" className="w-full h-96" />
            <div className="text-white ">
              <Link
                className=" text-xl font-bold  p-4"
                to="https://zak-parcel-project.web.app/"
              >
                Visit this
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="web 3" className="w-full h-96" />
            <div className="text-white ">
              <Link
                className=" text-xl font-bold  p-4"
                to="https://the-diner-project.web.app/"
              >
                Visit this
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
