import React from "react";
import Navbar from "../components/Navbar";
import CleanHeroSection from "../components/CleanHeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AIShowcaseSection from "../components/AlShowcaseSection";
import AIContactSection from "../components/AIContactSection";
import Footer from "../components/Footer";
import EnhancedCustomCursor from "../components/EnhancedCustomCursor";
import ScrollProgressIndicator from "../components/ScrollProgressIndicator";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Enhanced cursor and progress indicator */}
      <EnhancedCustomCursor />
      <ScrollProgressIndicator />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content sections */}
      <main>
        <CleanHeroSection />
        <AboutSection />
        <AIShowcaseSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AIContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;