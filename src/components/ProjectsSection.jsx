import { React, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "aos/dist/aos.css";
import AOS from "aos";
import PortofolioV1 from "/src/assets/1.png";
import PortofolioV2 from "/src/assets/6.png";
import SPK from "/src/assets/2.png";
import DesaKu from "/src/assets/3.png";
import BackEnd from "/src/assets/4.png";
import FrontEnd from "/src/assets/5.png";
import School from "/src/assets/school.png";
import Cashier from "/src/assets/cashier.png";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "School Management App",
      stack: "Next JS, Typescript, Taillwind CSS, Prisma Studio",
      image: School,
    },
    {
      title: "Cashier App",
      stack: "Laravel 12, Bootstrap, MySQL",
      image: Cashier,
    },
    {
      title: "Portofolio V1",
      stack:
        "React Js, Taillwind CSS, Radix UI, React Router, Lucide React Icons",
      image: PortofolioV1,
    },
    {
      title: "Portofolio V2",
      stack: "React JS, Taillwind CSS, React Bits, AOS, Framer Motion",
      image: PortofolioV2,
    },
    {
      title: "SPK Penjualan Ekspor Tanaman Porang",
      stack: "PHP Native, Javascript (Vanilla), MySQL, Bootstrap",
      image: SPK,
    },
    {
      title: "DesaKu (Aduan Warga)",
      stack: "Laravel, Bootstrap, MySQL, Javascript(Vanilla)",
      image: DesaKu,
    },
    {
      title: "Bookshelf Back-End",
      stack: "HTML, JavaScript (Vanilla), Bootstrap, API",
      image: BackEnd,
    },
    {
      title: "Bookshelf Front-End",
      stack: "HTML, JavaScript (vanilla), Bootstrap",
      image: FrontEnd,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="container min-h-screen text-white py-10 px-5" id="projects">
      <h2
        className="text-3xl md:text-4xl font-bold mb-14 text-center mx-auto"
        data-aos="fade-up"
      >
        My <span className="text-[#FAB007]">Project</span>
      </h2>

      {/* GitHub Contributions */}
      <div
        className="px-2 py-6 mb-16 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          GitHub <span className="text-[#FAB007]">Contributions</span>
        </h2>
        <div className="w-full overflow-x-auto flex justify-center">
          <GitHubCalendar
            username="ElhamAbdussalam"
            colorScheme="dark"
            // Consider adjusting blockSize and blockMargin for smaller screens if needed
            // You might use a state to dynamically change these based on screen size
            blockSize={15}
            blockMargin={5}
            fontSize={14}
          />
        </div>
      </div>

      {/* Project Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-md overflow-hidden bg-[#181a2c] group border-2 border-white hover:scale-115 transition-transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay={index * 150} // muncul satu-satu tiap 150ms
          >
            {/* Image */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-[#FAB007]">
                  {project.title}
                </h3>
                <p className="text-sm text-white">{project.stack}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
