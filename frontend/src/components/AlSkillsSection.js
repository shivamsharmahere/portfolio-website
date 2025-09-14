import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Wrench, Zap, Brain } from "lucide-react";
import { portfolioData } from "../data/mock";

const AISkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.languages,
      color: "from-blue-500 to-cyan-500"
    },
    aiml: {
      title: "AI/ML Frameworks",
      icon: Brain,
      skills: portfolioData.skills.aiml,
      color: "from-purple-500 to-pink-500"
    },
    devops: {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: portfolioData.skills.devops,
      color: "from-green-500 to-teal-500"
    },
    tools: {
      title: "Tools & Libraries",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      color: "from-orange-500 to-red-500"
    }
  };

  const SkillBar = ({ skill, index }) => {
    return (
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-semibold">{skill.name}</span>
          <span className="text-blue-400 font-bold">{skill.level}%</span>
        </div>
        
        <div className="w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
          <motion.div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${
              skill.category === 'primary' 
                ? 'bg-gradient-to-r from-blue-500 to-green-500' 
                : 'bg-gradient-to-r from-gray-500 to-blue-400'
            }`}
            initial={{ width: '0%' }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
          />
        </div>
        
        {/* Skill level indicator */}
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Expert</span>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header like AI in Action */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The tools and technologies that power innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Category navigation - Interactive like AI demos */}
          <div className="space-y-4">
            {Object.entries(skillCategories).map(([key, category], index) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;
              
              return (
                <motion.div
                  key={key}
                  className={`p-6 rounded-xl cursor-hover transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-white/10 to-white/5 border-2 border-blue-400/50 shadow-2xl shadow-blue-400/20' 
                      : 'bg-gray-800/30 border border-gray-700 hover:bg-gray-800/50'
                  }`}
                  onClick={() => setActiveCategory(key)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.skills.length} skills
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-green-400 animate-pulse' : 'bg-gray-600'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills display - Like AI demo display */}
          <div className="relative">
            <motion.div
              key={activeCategory}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                {React.createElement(skillCategories[activeCategory].icon, {
                  className: "w-8 h-8 text-blue-400"
                })}
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Skill statistics */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-500/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400">
                      {skillCategories[activeCategory].skills.filter(s => s.category === 'primary').length}
                    </div>
                    <div className="text-sm text-gray-400">Primary Skills</div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-400">
                      {Math.round(skillCategories[activeCategory].skills.reduce((acc, s) => acc + s.level, 0) / skillCategories[activeCategory].skills.length)}%
                    </div>
                    <div className="text-sm text-gray-400">Avg Proficiency</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Continuous learning card */}
            <motion.div
              className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
                  <p className="text-purple-300 text-sm leading-relaxed">
                    I'm constantly expanding my skill set by staying up-to-date with the latest developments in AI/ML, 
                    attending conferences, and working on cutting-edge projects. The field evolves rapidly, and I embrace this journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISkillsSection;