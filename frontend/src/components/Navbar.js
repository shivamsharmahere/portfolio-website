import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, CircleUserRound } from "lucide-react";
import { portfolioData } from "../data/mock";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-white hover:text-blue-400 transition-all duration-300 cursor-hover group"
            >
              <CircleUserRound className="w-8 h-8 drop-shadow-[0_0_6px_rgba(59,130,246,0.4)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] group-hover:scale-110 transition-all duration-300" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 relative group cursor-hover"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Resume Button */}
            <ResumeButton variant="navbar" />
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)] hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
              >
                <Github size={22} />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors duration-200 cursor-hover"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-b border-gray-800">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 cursor-hover"
            >
              {item.name}
            </button>
          ))}
          
          {/* Mobile Resume Button */}
          <div className="px-3 py-2">
            <ResumeButton variant="outline" className="w-full justify-center" />
          </div>
          
          {/* Mobile social links */}
          <div className="flex items-center space-x-4 px-3 py-2 pt-4 border-t border-gray-700">
            <a
              href={portfolioData.personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 drop-shadow-[0_0_6px_rgba(34,197,94,0.6)] hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
            >
              <Github size={24} />
            </a>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9)] hover:scale-110 transition-all duration-300 cursor-hover"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;