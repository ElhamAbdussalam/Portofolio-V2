/* eslint-disable no-irregular-whitespace */
import React, { useEffect } from "react";
import ProfileCard from "./assets/ProfileCard/ProfileCard";
import DecryptedText from "./assets/DecryptedText/DecryptedText";
import AOS from "aos";
import "aos/dist/aos.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true, // animasi juga saat scroll ke atas
    });
  }, []);

  return (
    <section className="text-white py-20" id="home">
      <div className="container mx-auto px-4 my-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Side Text */}
        <div
          className="w-full md:w-1/2 space-y-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div data-aos="fade-up" data-aos-delay="300">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white">
              <DecryptedText text="M Elham Abdussalam" />
            </h1>
          </div>
          <h3
            className="text-3xl text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Hello, World!{" "}
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, -5, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
              className="inline-block text-4xl"
            >
              👋
            </motion.span>
          </h3>

          <h2
            className="text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I’m{" "}
            <TypeAnimation
              sequence={[
                "", // Start with blank
                500,
                "Junior Front End Developer",
                2000,
                // "",
                // 500,
                // "Front End Developer",
                // 2000,
                // "",
                // 500,
                // "Back End Developer",
                // 3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-[#FAB007] font-semibold"
            />
          </h2>

          <p
            className="text-white leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            I am a{" "}
            <span className="text-[#FAB007] font-semibold">
              Junior Frontend Developer
            </span>{" "}
            from Indonesia with a strong foundation in{" "}
            <span className="text-[#FAB007] font-semibold">Frontend</span>{" "}
            development. I have experience using technologies like React and
            Next.js to build responsive and user-friendly web applications, such
            as dashboards and company profiles. I'm passionate about clean code,
            modern UI design, and creating web experiences that are both
            functional and visually appealing.
          </p>

          <button
            className="mt-4 px-6 py-2 bg-[#FAB007] text-black font-semibold rounded-xl shadow hover:bg-white transition duration-300 jello-horizontal"
            onClick={() => (window.location.href = "#contact")}
            onMouseEnter={(e) => {
              e.target.classList.remove("jello-horizontal");
              void e.target.offsetWidth;
              e.target.classList.add("jello-horizontal");
            }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Contact Me
          </button>
        </div>

        {/* Right Side - Profile Card */}
        <div
          className="w-full md:w-1/2 flex md:justify-end justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <ProfileCard />
        </div>
      </div>
    </section>
  );
};
