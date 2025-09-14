import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {portfolioData.personalInfo.name}
              </h3>
              <p className="text-blue-400 font-medium mb-4">
                {portfolioData.personalInfo.title}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the future with AI and machine learning, one project at a time.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>{portfolioData.personalInfo.email}</span>
              </a>
              <p className="text-gray-400 text-sm">
                {portfolioData.personalInfo.location}
              </p>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 pt-2">
              <a
                href={portfolioData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} {portfolioData.personalInfo.name}. Made with{" "}
              <Heart className="w-4 h-4 text-red-400 mx-1 fill-current" /> and lots of coffee.
            </p>
            
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-200 text-sm"
            >
              Back to Top ↗
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;