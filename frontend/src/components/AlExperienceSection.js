import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle, Zap, TrendingUp } from "lucide-react";
import { portfolioData } from "../data/mock";

const AIExperienceSection = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header like AI in Action */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From intern to AI architect - building the future one algorithm at a time
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Job Selection */}
          <div className="space-y-4">
            {portfolioData.experience.map((job, index) => (
              <motion.div
                key={job.id}
                className={`p-6 rounded-xl cursor-hover transition-all duration-500 ${
                  activeJob === index 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 shadow-2xl shadow-blue-400/20' 
                    : 'bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50'
                }`}
                onClick={() => setActiveJob(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    job.type === 'Full-time' 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">
                      {job.title}
                    </h3>
                    <p className="text-blue-400 font-medium">{job.company}</p>
                    <p className="text-gray-400 text-sm">{job.period}</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeJob === index ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Job Details */}
          <motion.div
            key={activeJob}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">
                  {portfolioData.experience[activeJob].title}
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium text-blue-400">
                    {portfolioData.experience[activeJob].company}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{portfolioData.experience[activeJob].location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{portfolioData.experience[activeJob].period}</span>
                </div>
              </div>

              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                portfolioData.experience[activeJob].type === 'Full-time' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {portfolioData.experience[activeJob].type}
              </span>
            </div>

            {/* Achievements */}
            <div className="space-y-4 mb-6">
              <h4 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Key Achievements
              </h4>
              {portfolioData.experience[activeJob].achievements.map((achievement, achievementIndex) => (
                <motion.div 
                  key={achievementIndex} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {portfolioData.experience[activeJob].technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 hover:text-blue-200 transition-all duration-200 cursor-hover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIExperienceSection;