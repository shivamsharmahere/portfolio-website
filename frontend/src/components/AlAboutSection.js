import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, Brain, Target, Sparkles } from "lucide-react";
import { portfolioData } from "../data/mock";

const AIAboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header like AI in Action */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the mind behind the algorithms
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - About content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">The AI Engineer</h3>
              </div>
              
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
                <div className="flex items-center space-x-3 text-gray-300">
                  <Target className="w-5 h-5 text-purple-400" />
                  <span>Specializing in Production-Grade AI Systems</span>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-6 border border-blue-500/20">
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
          </motion.div>

          {/* Right side - Achievements Grid */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Award className="w-6 h-6 text-yellow-400 mr-2" />
              Key Achievements
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.achievements.map((achievement, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 group cursor-hover"
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-gray-300 group-hover:text-white transition-colors flex-1">
                      {achievement.text}
                    </p>
                    <div className="ml-4 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        {achievement.metric}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Vision statement */}
            <motion.div 
              className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Vision</h4>
                  <p className="text-purple-300 italic">
                    "I'm passionate about pushing the boundaries of AI technology and creating solutions that make a real-world impact. 
                    Every project is an opportunity to learn, innovate, and contribute to the future of artificial intelligence."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAboutSection;