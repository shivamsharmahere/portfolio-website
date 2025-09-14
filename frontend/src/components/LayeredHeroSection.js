import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Code, Brain, Zap, Cpu, Database, Bot } from "lucide-react";
import { portfolioData } from "../data/mock";

const LayeredHeroSection = () => {
  const [currentLayer, setCurrentLayer] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const layers = [
    {
      title: "NEURAL ARCHITECT",
      subtitle: "Building Tomorrow's Intelligence",
      background: "bg-gradient-to-br from-blue-900 via-black to-purple-900",
      icon: Brain,
      particles: "neural"
    },
    {
      title: "CODE ALCHEMIST", 
      subtitle: "Transforming Data into Intelligence",
      background: "bg-gradient-to-br from-green-900 via-black to-blue-900",
      icon: Code,
      particles: "matrix"
    },
    {
      title: "AI VISIONARY",
      subtitle: "Pushing the Boundaries of Possibility",
      background: "bg-gradient-to-br from-purple-900 via-black to-red-900",
      icon: Zap,
      particles: "energy"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLayer((prev) => (prev + 1) % layers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleLayerClick = () => {
    setCurrentLayer((prev) => (prev + 1) % layers.length);
  };

  const scrollToNext = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden cursor-hover"
      onClick={handleLayerClick}
    >
      {/* Layered backgrounds with smooth transitions */}
      {layers.map((layer, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${layer.background} ${
            index === currentLayer 
              ? 'opacity-100 scale-100' 
              : index === (currentLayer - 1 + layers.length) % layers.length
                ? 'opacity-30 scale-110'
                : 'opacity-0 scale-95'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 20 - 10}px, ${mousePosition.y * 20 - 10}px) scale(${index === currentLayer ? 1 : 1.05})`
          }}
        />
      ))}

      {/* AI Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 L50 40 L80 40 L80 60 L20 60 L20 90" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    className="animate-pulse" />
              <circle cx="50" cy="40" r="3" fill="currentColor" className="animate-ping" />
              <circle cx="80" cy="60" r="3" fill="currentColor" className="animate-ping" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          >
            {React.createElement([Cpu, Database, Bot, Brain, Code, Zap][i], {
              className: `w-8 h-8 text-blue-400 opacity-60 animate-pulse`,
              style: { animationDelay: `${i * 0.3}s` }
            })}
          </div>
        ))}
      </div>

      {/* Main Content with Layer Transitions */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          
          {/* Animated Layer Indicator */}
          <div className="flex justify-center space-x-4 mb-8">
            {layers.map((layer, index) => (
              <div
                key={index}
                className={`p-4 rounded-full backdrop-blur-sm transition-all duration-500 ${
                  index === currentLayer 
                    ? 'bg-white/20 scale-125 animate-pulse' 
                    : 'bg-white/5 scale-100 hover:bg-white/10'
                }`}
              >
                {React.createElement(layer.icon, {
                  className: `w-8 h-8 ${index === currentLayer ? 'text-white' : 'text-gray-400'}`
                })}
              </div>
            ))}
          </div>

          {/* Dynamic Title with Layer Transitions */}
          <div className="space-y-4 relative h-40">
            {layers.map((layer, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  index === currentLayer
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-8'
                }`}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-pulse">
                    {portfolioData.personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-light">
                  <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                    {layer.title}
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-4 animate-fadeIn">
                  {layer.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Description with Typewriter Effect */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed typewriter-text">
              {portfolioData.personalInfo.summary}
            </p>
          </div>

          {/* Next-Level CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 cursor-hover overflow-hidden"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:-rotate-1 cursor-hover overflow-hidden"
            >
              <span className="relative z-10">Connect with AI</span>
              <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>

          {/* Layer Change Indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <div className="text-center text-gray-400 text-sm mb-4">
              <p className="animate-pulse">Click anywhere to unveil layers</p>
              <div className="flex justify-center space-x-2 mt-2">
                {layers.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentLayer ? 'bg-blue-400 scale-125' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToNext();
              }}
              className="group animate-bounce cursor-hover"
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <ChevronDown size={32} className="text-white group-hover:text-blue-400 transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Neural Network Animation Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="neural-network">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LayeredHeroSection;