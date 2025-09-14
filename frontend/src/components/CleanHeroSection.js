import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Brain, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/mock";

const CleanHeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const canvasRef = useRef(null);

  const titles = [
    "NEURAL ARCHITECT",
    "CODE ALCHEMIST", 
    "AI VISIONARY"
  ];

  const subtitles = [
    "Building Tomorrow's Intelligence",
    "Transforming Data into Magic",
    "Pushing Boundaries of Possibility"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 5000); // Increased time to allow for typing animation
    return () => clearInterval(interval);
  }, [titles.length]);

  // Typing animation effect
  useEffect(() => {
    const currentTitleText = titles[currentTitle];
    const currentSubtitleText = subtitles[currentTitle];
    
    setIsTyping(true);
    setDisplayedTitle("");
    setDisplayedSubtitle("");

    let titleIndex = 0;
    let subtitleIndex = 0;
    let titleTyping;
    let subtitleTyping;

    // Type out the title first
    titleTyping = setInterval(() => {
      if (titleIndex <= currentTitleText.length) {
        setDisplayedTitle(currentTitleText.slice(0, titleIndex));
        titleIndex++;
      } else {
        clearInterval(titleTyping);
        
        // Start typing subtitle after title is complete
        subtitleTyping = setInterval(() => {
          if (subtitleIndex <= currentSubtitleText.length) {
            setDisplayedSubtitle(currentSubtitleText.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleTyping);
            setIsTyping(false);
          }
        }, 50); // Subtitle typing speed
      }
    }, 100); // Title typing speed

    return () => {
      clearInterval(titleTyping);
      clearInterval(subtitleTyping);
    };
  }, [currentTitle]);

  // Enhanced particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const particleCount = 80; // Increased particle count
    
    // Create particles with different colors and properties
    for (let i = 0; i < particleCount; i++) {
      const colors = [
        { r: 59, g: 130, b: 246, alpha: 0.4 },   // Blue
        { r: 34, g: 197, b: 94, alpha: 0.4 },    // Green
        { r: 147, g: 51, b: 234, alpha: 0.4 },   // Purple
        { r: 255, g: 255, b: 255, alpha: 0.2 }   // White
      ];
      
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        baseSize: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.2,
        color: color,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;
      
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Pulsing effect
        const pulse = Math.sin(time * particle.pulseSpeed + particle.phase);
        particle.size = particle.baseSize + pulse * 0.5;
        particle.opacity = particle.baseOpacity + pulse * 0.2;

        // Draw particle with glow effect
        ctx.save();
        
        // Outer glow
        ctx.globalAlpha = particle.opacity * 0.3;
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, 0.8)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Draw connections between nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              ctx.save();
              ctx.globalAlpha = (1 - distance / 150) * 0.1;
              ctx.strokeStyle = `rgba(59, 130, 246, 0.3)`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const scrollToNext = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Enhanced particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
        style={{ zIndex: 1 }}
      />
      
      {/* Enhanced gradient overlay with pulse effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" 
        style={{ zIndex: 2 }}
        animate={{
          background: [
            "linear-gradient(to top, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.3))",
            "linear-gradient(to top, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.2))",
            "linear-gradient(to top, rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.3))"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          
          {/* Enhanced pulsing icons */}
          <motion.div 
            className="flex justify-center space-x-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="p-4 rounded-full backdrop-blur-sm transition-all duration-500 cursor-hover"
              animate={{ 
                backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.3)",
                  "0 0 0 10px rgba(59, 130, 246, 0.1)",
                  "0 0 0 0 rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.25, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
            >
              <Brain className="w-6 h-6 text-blue-400" />
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-full backdrop-blur-sm transition-all duration-500 cursor-hover"
              animate={{ 
                backgroundColor: ["rgba(34, 197, 94, 0.2)", "rgba(34, 197, 94, 0.4)", "rgba(34, 197, 94, 0.2)"],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.3)",
                  "0 0 0 10px rgba(34, 197, 94, 0.1)",
                  "0 0 0 0 rgba(34, 197, 94, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
              whileHover={{ scale: 1.25, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
            >
              <Code className="w-6 h-6 text-green-400" />
            </motion.div>
            
            <motion.div 
              className="p-4 rounded-full backdrop-blur-sm transition-all duration-500 cursor-hover"
              animate={{ 
                backgroundColor: ["rgba(147, 51, 234, 0.2)", "rgba(147, 51, 234, 0.4)", "rgba(147, 51, 234, 0.2)"],
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 rgba(147, 51, 234, 0.3)",
                  "0 0 0 10px rgba(147, 51, 234, 0.1)",
                  "0 0 0 0 rgba(147, 51, 234, 0.3)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4
              }}
              whileHover={{ scale: 1.25, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            >
              <Zap className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>

          {/* Clean main heading */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h1>
            
            {/* Rotating title with typing effect */}
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  {displayedTitle}
                  {isTyping && displayedTitle.length < titles[currentTitle].length && (
                    <span className="animate-pulse text-blue-400">|</span>
                  )}
                </span>
              </h2>
            </div>
            
            <div className="h-8 flex items-center justify-center">
              <p className="text-lg text-gray-300">
                {displayedSubtitle}
                {isTyping && displayedTitle.length >= titles[currentTitle].length && displayedSubtitle.length < subtitles[currentTitle].length && (
                  <span className="animate-pulse text-green-400">|</span>
                )}
              </p>
            </div>
          </motion.div>

          {/* Simple description */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          {/* Enhanced CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 cursor-hover"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                background: "linear-gradient(to right, rgb(29, 78, 216), rgb(126, 34, 206))"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.2)",
                  "0 0 0 8px rgba(59, 130, 246, 0.1)",
                  "0 0 0 0 rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              Explore My Universe
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-full transition-all duration-300 cursor-hover"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                backgroundColor: "rgba(34, 197, 94, 1)",
                color: "rgb(0, 0, 0)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                borderColor: [
                  "rgba(34, 197, 94, 1)",
                  "rgba(34, 197, 94, 0.6)",
                  "rgba(34, 197, 94, 1)"
                ]
              }}
              transition={{
                borderColor: { duration: 2, repeat: Infinity }
              }}
            >
              Connect with AI
            </motion.button>
          </motion.div>

          {/* Simple scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={scrollToNext}
              className="animate-bounce cursor-hover p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronDown size={24} className="text-white" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanHeroSection;