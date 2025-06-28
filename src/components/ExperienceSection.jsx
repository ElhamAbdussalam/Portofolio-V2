import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    title: "Back End Developer",
    company: "AWS Back End Academy",
    description:
      "Builds and manages the server-side of web applications using JavaScript, primarily with Node.js. Responsible for handling APIs, databases, and the application's business logic.",
    date: "April 2025 - Present",
    side: "right",
  },
  {
    title: "Front End Developer",
    company: "ID Camp (Indosat Ooredoo Hutchison)",
    description:
      "Develops and maintains the user interface of web applications using technologies like HTML, CSS, and JavaScript. Focuses on creating responsive, interactive, and user-friendly designs.",
    date: "September 2024 - February 2025",
    side: "left",
  },
  {
    title: "Full Stack Developer",
    company: "SMP 2 Kaliwungu – Internship",
    description:
      "Developed and maintained web applications for school needs using PHP on the back end and HTML, CSS, and JavaScript on the front end. Handled both server-side logic and user interface to support administrative and academic activities.",
    date: "January 2021 - February 2021",
    side: "right",
  },
  {
    title: "Graphic Design",
    company: "CV Sinar Jaya Konveksi – Full Time",
    description:
      "Designed custom clothing, screen printing, and embroidery based on client requests. Adjusted designs for production methods and collaborated with the production team using software like CorelDRAW, Adobe Illustrator, and Photoshop.",
    date: "January 2019 - Desember 2024",
    side: "left",
  },
  {
    title: "Media Spesialist",
    company: "Pondok Pesantren Darun Naim – Part Time",
    description:
      "Managed and created social media content (Instagram, YouTube, Facebook) for Islamic boarding school activities. Documented daily and special events through photos and videos, and designed promotional materials such as posters, banners, and digital publications.",
    date: "May 2019 - Desember 2024",
    side: "right",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-12" id="experience">
      <div className="text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-14 text-center mx-auto"
          data-aos="fade-up"
        >
          My <span className="text-[#FAB007]">Experience</span>
        </h2>
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-[#FAB007] rounded"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative flex items-start justify-between mb-16 ${
              exp.side === "left" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-5/12"></div>
            <div className="relative z-10 w-5 h-5 bg-black border-4 border-[#FAB007] rounded-full mt-24"></div>
            <div
              className="border border-[#FAB007] bg-[#181a2c] text-sm text-[#FAB007] w-5/12 p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="zoom-in"
            >
              <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
              <p className="font-semibold">{exp.company}</p>
              <p className="text-white mt-2">{exp.description}</p>
              <p className="text-xs text-gray-400 mt-2">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
