import React from "react";
import { MapPin, GraduationCap, Award } from "lucide-react";
import { portfolioData } from "../data/mock";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {portfolioData.personalInfo.summary}
              </p>
              
              {/* Key details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{portfolioData.personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-green-400" />
                  <span>{portfolioData.education.degree} - {portfolioData.education.specialization}</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 text-green-400 mr-2" />
                Education
              </h3>
              <div>
                <h4 className="text-lg font-medium text-white">{portfolioData.education.degree}</h4>
                <p className="text-blue-400 font-medium">{portfolioData.education.specialization}</p>
                <p className="text-gray-400">{portfolioData.education.university}, {portfolioData.education.location}</p>
                <p className="text-gray-500 text-sm">{portfolioData.education.period} • {portfolioData.education.status}</p>
              </div>
            </div>
          </div>

          {/* Right side - Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-yellow-400 mr-2" />
              Key Achievements
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-6 border border-gray-600 hover:border-blue-400 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.text}
                    </p>
                    <div className="ml-4">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        {achievement.metric}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal touch */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-8">
              <p className="text-blue-300 italic">
                "I'm passionate about pushing the boundaries of AI technology and creating solutions that make a real-world impact. 
                Every project is an opportunity to learn, innovate, and contribute to the future of artificial intelligence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;