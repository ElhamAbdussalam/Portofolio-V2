import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// ImageSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaJava,
  FaAws,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiExpress,
  SiPython,
  SiMongodb,
  SiVercel,
  SiGooglecloud,
  SiDocker,
  SiXampp,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import img1 from "/src/assets/sertifikat/1.jpg";
import img2 from "/src/assets/sertifikat/2.jpg";
import img3 from "/src/assets/sertifikat/3.jpg";
import img4 from "/src/assets/sertifikat/4.jpg";
import img5 from "/src/assets/sertifikat/5.jpg";
import img6 from "/src/assets/sertifikat/6.jpg";
import img7 from "/src/assets/sertifikat/7.jpg";
import img8 from "/src/assets/sertifikat/8.jpg";

const Images = [img1, img2, img3, img4, img5, img6, img7, img8];

const techStack = [
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "HTML", icon: <SiHtml5 className="text-[#E44D26]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" /> },
  { name: "React Js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Vue Js", icon: <FaVuejs className="text-[#42B883]" /> },
  { name: "Angular", icon: <FaAngular className="text-[#DD0031]" /> },
  {
    name: "Next Js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Typescript", icon: <SiTypescript className="text-[#007bff]" /> },
  { name: "Node Js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express Js", icon: <SiExpress className="text-white" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
  { name: "Laravel", icon: <FaLaravel className="text-[#FF2D20]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "Mongo DB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Aws", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" /> },
  { name: "Github", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Xampp", icon: <SiXampp className="text-[#FB7A24]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
];

export const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <div className="py-10 text-center" id="education">
        <h2 className="text-3xl font-bold mb-10 text-white" data-aos="fade-up">
          My <span className="text-[#FAB007]">Tech Stack</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex flex-col items-center text-white w-24 hover:scale-110 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 md:px-10 py-10">
        <h2
          className="text-3xl font-bold text-center text-white "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Education
        </h2>

        <div
          className="w-full max-w-5xl mx-auto px-4 py-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // agar hover tidak menghentikan autoplay
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {Images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[340px] xl:h-[380px] overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
