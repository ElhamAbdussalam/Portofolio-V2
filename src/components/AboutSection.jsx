import React, { useEffect } from "react";
import { FaCode, FaPencilRuler, FaProjectDiagram } from "react-icons/fa";
import ShinyText from "./assets/ShinyText/ShinyText";
import AOS from "aos";
import "aos/dist/aos.css";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true, // animasi juga saat scroll ke atas
    });
    setTimeout(() => AOS.refresh(), 500); // refresh jika elemen dinamis
  }, []);

  return (
    <section className="text-white py-20 bg-black" id="about">
      <h2
        className="text-3xl md:text-4xl font-bold mb-14 text-center mx-auto"
        data-aos="fade-up"
      >
        About <span className="text-[#FAB007]">Me</span>
      </h2>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-32">
        {/* Left Content */}
        <div
          className="w-full md:w-1/2 space-y-4"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <ShinyText text="Front End Developer" disabled={false} speed={3} />

          <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg max-w-3xl mx-auto text-justify">
            Enthusiastic and detail-oriented{" "}
            <span className="text-[#FAB007]">Junior Frontend Developer</span>{" "}
            with a solid foundation in{" "}
            <span className="text-[#FAB007]">modern UI development</span> and
            responsive design. Experienced in building interactive and
            user-friendly web interfaces using technologies like{" "}
            <span className="text-[#FAB007]">React</span> and{" "}
            <span className="text-[#FAB007]">Next.js</span>. Passionate about
            writing clean, maintainable code and turning design concepts into
            functional web experiences. Strong team player who thrives in{" "}
            <span className="text-[#FAB007]">collaborative environments</span>{" "}
            and eager to grow by learning from real-world projects and industry
            best practices.
          </p>

          <a
            className="mt-4 px-6 py-2 bg-[#FAB007] text-black font-semibold rounded-xl shadow hover:bg-white transition duration-300 jello-horizontal"
            href="#contact"
            onMouseEnter={(e) => {
              e.target.classList.remove("jello-horizontal");
              void e.target.offsetWidth;
              e.target.classList.add("jello-horizontal");
            }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get In Touch
          </a>
        </div>

        {/* Right Content */}
        <div
          className="w-full md:w-1/2 flex flex-col gap-6 md:justify-end justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <HoverCard
            title="Web Development"
            icon={<FaCode className="text-xl" />}
            description="Creating responsive websites and web applications with modern frameworks."
          />
          <HoverCard
            title="UI/UX Design"
            icon={<FaPencilRuler className="text-xl" />}
            description="Designing intuitive user interfaces and seamless user experiences."
          />
          <HoverCard
            title="Project Management"
            icon={<FaProjectDiagram className="text-xl" />}
            description="Leading projects from conception to completion with agile methodologies."
          />
        </div>
      </div>
    </section>
  );
};

const HoverCard = ({ title, icon, description }) => {
  return (
    <div
      className="group bg-[#FAB007] border border-white rounded-md px-5 py-4 text-black hover:scale-105 transition-transform duration-300 ease-in-out shadow-md"
      data-aos="zoom-in"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="text-black">{icon}</div>
        <h4 className="font-semibold text-base">{title}</h4>
      </div>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
};
