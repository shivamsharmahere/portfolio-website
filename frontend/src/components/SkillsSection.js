import React, { useState } from "react";
import { Code, Database, Cloud, Wrench } from "lucide-react";
import { portfolioData } from "../data/mock";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.languages,
      colors: {
        primary: "from-green-400 to-emerald-500",
        secondary: "from-green-500/20 to-emerald-500/20",
        border: "border-green-400/30",
        hover: "hover:border-green-400/60",
        glow: "shadow-green-400/20",
        text: "text-green-300"
      }
    },
    aiml: {
      title: "AI/ML Frameworks",
      icon: Database,
      skills: portfolioData.skills.aiml,
      colors: {
        primary: "from-blue-400 to-cyan-500",
        secondary: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-400/30",
        hover: "hover:border-blue-400/60",
        glow: "shadow-blue-400/20",
        text: "text-blue-300"
      }
    },
    devops: {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: portfolioData.skills.devops,
      colors: {
        primary: "from-orange-400 to-red-500",
        secondary: "from-orange-500/20 to-red-500/20",
        border: "border-orange-400/30",
        hover: "hover:border-orange-400/60",
        glow: "shadow-orange-400/20",
        text: "text-orange-300"
      }
    },
    tools: {
      title: "Tools & Libraries",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      colors: {
        primary: "from-purple-400 to-violet-500",
        secondary: "from-purple-500/20 to-violet-500/20",
        border: "border-purple-400/30",
        hover: "hover:border-purple-400/60",
        glow: "shadow-purple-400/20",
        text: "text-purple-300"
      }
    }
  };

  const SkillTile = ({ skill, categoryColors }) => {
    return (
      <div 
        className={`group relative p-6 rounded-xl bg-transparent border-2 transition-all duration-300 hover:scale-105 cursor-hover overflow-hidden ${categoryColors.border} ${categoryColors.hover}`}
        style={{
          backdropFilter: 'blur(8px)',
          background: 'transparent'
        }}
      >
        {/* Animated shine effect on hover - colorless */}
        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-700" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center text-center space-y-3">
          {/* Skill Name - Clean white text */}
          <h4 className="text-white font-medium text-base transition-colors duration-300">
            {skill.name}
          </h4>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Floating particles similar to hero section */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        {[...Array(40)].map((_, i) => (
          <div
            key={i + 60}
            className="absolute w-0.5 h-0.5 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 4 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        {[...Array(30)].map((_, i) => (
          <div
            key={i + 100}
            className="absolute w-px h-px bg-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My expertise spans across various technologies in AI/ML and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Skill Categories</h3>
              <nav className="space-y-2">
                {Object.entries(skillCategories).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveCategory(key)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                        activeCategory === key
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {/* Full-width color band for active/hover category */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        activeCategory === key
                          ? `bg-gradient-to-r ${skillCategories[key].colors.primary} opacity-20`
                          : `bg-gradient-to-r ${skillCategories[key].colors.primary} opacity-0 group-hover:opacity-10`
                      }`} />
                      
                      {/* Professional highlight square */}
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 ${
                        activeCategory === key
                          ? `bg-gradient-to-br ${skillCategories[key].colors.primary} shadow-lg ${skillCategories[key].colors.glow}`
                          : `bg-gray-800/50 group-hover:bg-gray-700/70`
                      }`}>
                        <Icon className={`w-5 h-5 ${activeCategory === key ? 'text-black' : 'text-gray-400 group-hover:text-white'}`} />
                      </div>
                      
                      <span className="font-medium relative z-10">{category.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Skills display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 relative overflow-hidden">
              {/* Laboratory Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                    linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%)
                  `,
                  backgroundSize: '100px 100px, 100px 100px, 20px 20px'
                }}
              />
              
              <div className="flex items-center space-x-3 mb-8 relative z-10">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillCategories[activeCategory].colors.primary} shadow-lg flex items-center justify-center`}>
                  {React.createElement(skillCategories[activeCategory].icon, {
                    className: "w-5 h-5 text-black"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillTile 
                    key={skill.name} 
                    skill={skill} 
                    categoryColors={skillCategories[activeCategory].colors}
                  />
                ))}
              </div>

              {/* Clean spacing */}
              <div className="mt-8"></div>
            </div>

            {/* AI Laboratory Info Card */}
            <div className="mt-6 bg-gradient-to-r from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
                  <span>AI Laboratory - Technology Stack</span>
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cutting-edge technologies powering intelligent solutions. Each skill represents 
                  real-world implementation experience in AI/ML projects, from model development 
                  to production deployment in scalable cloud environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for floating particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;