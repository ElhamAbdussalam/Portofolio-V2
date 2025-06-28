import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContactSection = () => {
  const icons = [
    { icon: <FaEnvelope />, link: "mailto:abdussalamelham@gmail.com" },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/m-elham-abdussalam",
    },
    { icon: <FaGithub />, link: "https://github.com/ElhamAbdussalam" },
    { icon: <FaInstagram />, link: "https://instagram.com/muh.elham_" },
    {
      icon: <FaDiscord />,
      link: "https://discordapp.com/users/punisherrr_bbbrdces",
    },
  ];

  return (
    <div className="py-16 px-4 text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
        Get In <span className="text-[#FAB007]">Touch</span>
      </h2>
      <p
        className="max-w-xl mx-auto text-sm text-gray-300 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>
      <div
        className="flex justify-center gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-[#FAB007] text-[#1b1b1b] hover:scale-120 transition-transform duration-300 p-4 rounded-full text-2xl shadow-lg"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
