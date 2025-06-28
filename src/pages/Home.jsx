import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import SplashCursor from "../components/assets/SplashCursor/SplashCursor";

export const Home = () => {
  return (
    <div className="bg-black">
      <SplashCursor />
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
